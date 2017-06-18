import "./styles.css"

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

	tr.setAttribute('id', 'row' + (rowMassive.length - 1));
	//tdName.setAttribute('id', 'name' + (rowMassive.length - 1));
	tableContent.appendChild(tr);
	tr.appendChild(tdName);
	tr.appendChild(tdLastname);
	tr.appendChild(tdBirth);
	tr.appendChild(tdSuperpower);
	tr.appendChild(tdButtons);

	editButton.setAttribute('type', 'button');
	editButton.setAttribute('value', 'Edit');
	editButton.onclick = function(){
		//кнопка эдит исчезнет, вместо неё появится кнопка "ок"
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
		buttons.insertBefore(okButton, buttons.childNodes[1]);
		okButton.setAttribute('type', 'button');
		okButton.setAttribute('value', 'Ok');
		nameEdit.setAttribute('type', 'text');
		lastnameEdit.setAttribute('type', 'text');
		birthEdit.setAttribute('type', 'date');
		superabilEdit.setAttribute('type', 'text');
		parentRow.childNodes[0].innerHTML = '';
		parentRow.childNodes[0].appendChild(nameEdit);
		parentRow.childNodes[0].childNodes[0].setAttribute('value', rows[number].name);
		parentRow.childNodes[1].innerHTML = '';
		parentRow.childNodes[1].appendChild(lastnameEdit);
		parentRow.childNodes[1].childNodes[0].setAttribute('value', rows[number].lastname);
		parentRow.childNodes[2].innerHTML = '';
		parentRow.childNodes[2].appendChild(birthEdit);
		parentRow.childNodes[2].childNodes[0].setAttribute('value', rows[number].birth);
		parentRow.childNodes[3].innerHTML = '';
		parentRow.childNodes[3].appendChild(superabilEdit);
		parentRow.childNodes[3].childNodes[0].setAttribute('value', rows[number].superabil);
		
	}
	
	removeButton.setAttribute('type', 'button');
	removeButton.setAttribute('value', "Remove");

	tdButtons.appendChild(editButton);
	tdButtons.appendChild(removeButton);

	tdName.innerHTML = rowValues.name[0].toUpperCase() + rowValues.name.substr(1).toLowerCase();
	tdLastname.innerHTML = rowValues.lastname[0].toUpperCase() + rowValues.lastname.substr(1).toLowerCase();
	tdBirth.innerHTML = rowValues.birth;
	tdSuperpower.innerHTML = rowValues.superabil;
}

function putValues(name, lastname, birth, superabil) {
	this.name = name;
	this.lastname = lastname;
	this.birth = birth;
	this.superabil = superabil;
}

var AddRocketman = () => {
	if (validateLatin(objForms.getValues().name) === true && validateLatin(objForms.getValues().lastname) === true && objForms.getValues().birth !== '' && objForms.getValues().superabil !== ''){
		
		rows.push(new putValues(objForms.getValues().name, objForms.getValues().lastname, objForms.getValues().birth, objForms.getValues().superabil));
		
		var n = rows.length - 1;
		newRow(rows, rows[n]); //создать новый ряд в таблице

		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
		}
	} else {
		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
			if (validateLatin(objForms.getValues()[option]) === false){
				form.style.background = 'red';
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