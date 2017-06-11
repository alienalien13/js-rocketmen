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
var values = {
	name: '',
	lastname: '',
	birth: '',
	superabil: ''
}



var lol = () => { //потом эта функция принимает объект в котором будет возиться, сначала это данные форм, потом это буду данные уже заполненной таблицы (для эдитации)
	if (validateLatin(objForms.getValues().name) === true && validateLatin(objForms.getValues().lastname) === true && objForms.getValues()[birth] !== '' && objForms.getValues()[superabil] !== ''){
		values.name = objForms.getValues().name;
		values.lastname = objForms.getValues().lastname;
		values.birth = objForms.getValues().birth;
		values.superabil = objForms.getValues().superabil;
		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
		}
		console.log(values)
	} else {
		for (let option in objForms.getValues()){
			let form = document.getElementById(option);
			form.style.background = 'none';
			if (validateLatin(objForms.getValues()[option]) === false){
				form.style.background = 'red';
				if (option === 'birth' && objForms.getValues()[option] !== ''){
					form.style.background = 'none';
				}
				console.log(option);
			}
		}
	}
}

buttonAdd.onclick = lol;