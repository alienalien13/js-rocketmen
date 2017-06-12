import "./styles.css"

var buttonAdd = document.getElementById('buttonAdd'),
	regLatin = /^[a-zA-Z]+$/;
var objForms = {
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

var rows = []

function putValues(name, lastname, birth, superabil) {
	this.name = name;
	this.lastname = lastname;
	this.birth = birth;
	this.superabil = superabil;
}

var counter = 1;

var lol = () => {
	if (validateLatin(objForms.getValues().name) === true && validateLatin(objForms.getValues().lastname) === true && objForms.getValues()[birth] !== '' && objForms.getValues()[superabil] !== ''){
		counter++;
		
		var values = new putValues(objForms.getValues().name, objForms.getValues().lastname, objForms.getValues().birth, objForms.getValues().superabil);
		rows.push(values);

		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
		}
		console.log(rows)
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
				console.log(option);
			}
		}
	}
}

buttonAdd.onclick = lol;