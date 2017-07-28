import "./styles.css"
import "./skeleton/skeleton.css"
import "./skeleton/normalize.css"

var buttonAdd = document.getElementById('buttonAdd'),
	regLatin = /^[a-zA-Z]+$/,
	rows = [],
	objForms = {
		nameForm: document.getElementById('name'),
		lastnameForm: document.getElementById('lastname'),
		birthForm: document.getElementById('birth'),
		superabilForm: document.getElementById('superabil'),
		getValues: function(){
			return {
				name: this.nameForm.value,
				lastname: this.lastnameForm.value,
				birth: this.birthForm.value,
				superabil: this.superabilForm.value
			}
	}
}

var validateLatin = function(option){
		return regLatin.test(option);
}

var newRow = function(rowMassive, rowValues){
	var tableContent = document.getElementById('tableContent'),
		tr = document.createElement('tr'),
		tdName = document.createElement('td'),
		tdLastname = document.createElement('td'),
		tdBirth = document.createElement('td'),
		tdSuperpower = document.createElement('td'),
		tdButtons = document.createElement('td'),
		editButton = document.createElement('input'),
		removeButton = document.createElement('input');

	tr.setAttribute('id', 'row' + (rowMassive.length - 1)); //New row in the table
	tableContent.appendChild(tr);
	tr.appendChild(tdName);
	tr.appendChild(tdLastname);
	tr.appendChild(tdBirth);
	tr.appendChild(tdSuperpower);
	tr.appendChild(tdButtons);

	tdName.setAttribute('class', 'color-col');
	tdBirth.setAttribute('class', 'color-col birthTd');
	editButton.setAttribute('type', 'button');
	editButton.setAttribute('value', 'Edit');
	editButton.setAttribute('class', 'five columns')
	editButton.onclick = function(){

		let parentRow = editButton.parentNode.parentNode,
			parentRowId = parentRow.id,
			number = parentRowId.substr(length - 1),
			name = parentRow.childNodes[0],
			lastname = parentRow.childNodes[1],
			birth = parentRow.childNodes[2],
			superabil = parentRow.childNodes[3],
			buttons = parentRow.childNodes[4],
			okButton = document.createElement('input'),
			nameEdit = document.createElement('input'),
			lastnameEdit = document.createElement('input'),
			birthEdit = document.createElement('input'),
			superabilEdit = document.createElement('input');
		
		editButton.style.display = 'none';
		removeButton.style.display = 'none';
		buttons.insertBefore(okButton, buttons.childNodes[1]);
		okButton.setAttribute('type', 'button');
		okButton.setAttribute('value', 'Ok');

		nameEdit.setAttribute('type', 'text');
		lastnameEdit.setAttribute('type', 'text');
		birthEdit.setAttribute('type', 'date');
		superabilEdit.setAttribute('type', 'text');
		name.innerHTML = '';
		name.appendChild(nameEdit);
		nameEdit.setAttribute('value', rows[number].name);
		lastname.innerHTML = '';
		lastname.appendChild(lastnameEdit);
		lastnameEdit.setAttribute('value', rows[number].lastname);
		birth.innerHTML = '';
		birth.appendChild(birthEdit);
		birthEdit.setAttribute('value', rows[number].birth);
		superabil.innerHTML = '';
		superabil.appendChild(superabilEdit);
		superabilEdit.setAttribute('value', rows[number].superabil);
		
		okButton.onclick = function(){ //Commit changes

			if (validateLatin(nameEdit.value) && validateLatin(lastnameEdit.value) && birthEdit.value !== '' && superabilEdit.value !== ''){
				name.innerHTML = rows[number].name = nameEdit.value[0].toUpperCase() + nameEdit.value.substr(1).toLowerCase();
				lastname.innerHTML = rows[number].lastname = lastnameEdit.value[0].toUpperCase() + lastnameEdit.value.substr(1).toLowerCase();
				birth.innerHTML = rows[number].birth = birthEdit.value;
				superabil.innerHTML = rows[number].superabil = superabilEdit.value;
				buttons.removeChild(okButton);
				editButton.style.display = 'inline-block';
				removeButton.style.display = 'inline-block';
				console.log(rows[number]);
			} else {
				let formsEdit = [nameEdit, lastnameEdit, birthEdit, superabilEdit]
				for (let i in formsEdit){
					formsEdit[i].style.background = 'none';
					if (!validateLatin(formsEdit[i].value)){
						formsEdit[i].style.background = '#ff7d7d';
						if ( (formsEdit[i] === birthEdit && formsEdit[i].value !== '') || (formsEdit[i] === superabilEdit && formsEdit[i].value !== '') ){
							formsEdit[i].style.background = 'none';
						}
					}
				}
			}
		}
	}
	
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute('value', "Remove");
	removeButton.setAttribute('class', 'five columns')

	removeButton.onclick = function(){
		if (confirm("Do you want to remove " + tdName.innerHTML + " " + tdLastname.innerHTML + " ?")){
			let parentRow = editButton.parentNode.parentNode,
			parentRowId = parentRow.id,
			number = parentRowId.substr(length - 1);

			tableContent.removeChild(parentRow);
			delete rows[number];
			console.log(rows);
		}
	}

	tdButtons.appendChild(editButton);
	tdButtons.appendChild(removeButton);

	tdName.innerHTML = rowValues.name[0].toUpperCase() + rowValues.name.substr(1).toLowerCase();
	tdLastname.innerHTML = rowValues.lastname[0].toUpperCase() + rowValues.lastname.substr(1).toLowerCase();
	tdBirth.innerHTML = rowValues.birth;
	tdSuperpower.innerHTML = rowValues.superabil;
}

function putValues(name, lastname, birth, superabil) { //new rocketman constructor function
	this.name = name;
	this.lastname = lastname;
	this.birth = birth;
	this.superabil = superabil;
}

var AddRocketman = () => {
	if (validateLatin(objForms.getValues().name) && validateLatin(objForms.getValues().lastname) && objForms.getValues().birth !== '' && objForms.getValues().superabil !== ''){
		
		rows.push(new putValues(objForms.getValues().name, objForms.getValues().lastname, objForms.getValues().birth, objForms.getValues().superabil));
		
		var n = rows.length - 1;
		newRow(rows, rows[n]); //Design new row in the DOM

		for (let i in objForms){
			objForms[i].value = '';
			objForms[i].style.background = 'none';
		}
	} else {
		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
			if (!validateLatin(objForms.getValues()[option])){
				form.style.background = '#ff7d7d';
				if (option === 'birth' && objForms.getValues()[option] !== ''){
					form.style.background = 'none';
				} else if (option === 'superabil' && objForms.getValues()[option] !== '') {
					form.style.background = 'none';
				}
			}
		}
	}
}

buttonAdd.onclick = AddRocketman;

window.onload = function(){ //Init adding some rocketmen

	rows.push(new putValues('Yuri', 'Gagarin', '1934-03-09', 'He was the first human to journey into outer space'))
	let n = rows.length - 1;
	newRow(rows, rows[n]);

	rows.push(new putValues('Alan', 'Shepard', '1923-11-18', 'He became the second person, and the first American, to travel into space, and the first person to manually control the orientation of his spacecraft'))
	let nn = rows.length - 1;
	newRow(rows, rows[nn]);

	rows.push(new putValues('Neil', 'Armstrong', '1930-08-05', 'Armstrong&rsquo;s second and last spaceflight was as commander of Apollo 11, the first manned Moon landing mission in July 1969'))
	let nnn = rows.length - 1;
	newRow(rows, rows[nnn]);

	rows.push(new putValues('Vladimír ', 'Remek ', '1948-09-26', 'Remek is considered to be the first astronaut from the European Union'))
	let nnnn = rows.length - 1;
	newRow(rows, rows[nnnn]);
}