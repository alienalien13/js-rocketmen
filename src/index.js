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
var newRow = function(values){
	
}

var rows = []

function putValues(name, lastname, birth, superabil) {
	this.name = name;
	this.lastname = lastname;
	this.birth = birth;
	this.superabil = superabil;
}

var AddRocketman = () => {
	if (validateLatin(objForms.getValues().name) === true && validateLatin(objForms.getValues().lastname) === true && objForms.getValues().birth !== '' && objForms.getValues().superabil !== ''){
		
		rows.push(new putValues(objForms.getValues().name, objForms.getValues().lastname, objForms.getValues().birth, objForms.getValues().superabil));
		
		//создать новый ряд в таблице (вызов функции)

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

buttonAdd.onclick = AddRocketman;

//функция которая пробегает по всем элементам массива rows и для каждого создаёт новую строку в таблице