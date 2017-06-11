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

var lol = () => { //потом эта функция принимает объект в котором будет возиться, сначала это данные форм, потом это буду данные уже заполненной таблицы (для эдитации)
	if (objForms.getValues().name !== '' && objForms.getValues().lastname !== '' && objForms.getValues().birth !== '' && objForms.getValues().superabil !== ''){
		for (let option in objForms.getValues()){
			if (objForms.getValues()[option] === ''){
				let form = document.getElementById(option);
					form.style.background = 'red';
				console.log('please, FILL IN: ' + option)
			} else if (option === 'name' || option === 'lastname' || option === 'birth' || option === 'superabil') {
					let result = regLatin.test(objForms.getValues()[option]);
					if (option !== 'birth' && option !== 'superabil' && result === true) {
						console.log(option + ' ' + objForms.getValues()[option] + ' good ' + form)
					} else if (option !== 'birth' && option !== 'superabil' && result === false) {
						console.log(option + ' ' + objForms.getValues()[option] + ' Latin letters ONLY ' + form)
					}
			}
		}
	} else {
		console.log('========= fill in all the forms, please ==========')
	}
}

buttonAdd.onclick = lol;
//$('.buttonAdd').on('click', console.log(lol()))




