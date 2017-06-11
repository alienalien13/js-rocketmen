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

var values = {
	name: '',
	lastname: '',
	birth: '',
	superabil: ''
}

var lol = () => { //потом эта функция принимает объект в котором будет возиться, сначала это данные форм, потом это буду данные уже заполненной таблицы (для эдитации)
	for (let option in objForms.getValues()){
		
		if (objForms.getValues()[option] === ''){
			let form = document.getElementById(option);
			form.style.background = 'red';
			console.log('please, FILL IN: ' + option)
		} else {
			let form = document.getElementById(option);
			form.style.background = 'none';
			var result = regLatin.test(objForms.getValues()[option]);

			/*if (option === 'name' && result === true){
				values.name = objForms.getValues()[option]
			} else if (option === 'lastname' && result === true) {
				values.lastname = objForms.getValues()[option]
			}*/

			/*if (option !== 'birth' && option !== 'superabil' && result === true) {
				console.log(option + ' ' + objForms.getValues()[option] + ' good ')
			} else if (option !== 'birth' && option !== 'superabil' && result === false) {
				console.log(option + ' ' + objForms.getValues()[option] + ' Latin letters ONLY ')
			}*/
		}
	}
}

buttonAdd.onclick = lol;
//$('.buttonAdd').on('click', console.log(lol()))




