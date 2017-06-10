import "./styles.css"

var nameForm = document.getElementById('name'),
    lastnameForm = document.getElementById('lastname'),
    birthForm = document.getElementById('birth'),
    superabilForm = document.getElementById('superabil');

var getValues = function(){
    if (nameForm.value !== "" &&
        lastnameForm.value !== "" &&
        birthForm.value !== "" &&
        superabilForm.value !== ""
        ){
            return {
                name: nameForm.value,
                lastname: lastnameForm.value,
                birth: birthForm.value,
                superabil: superabilForm.value
            }
        } else {
            console.log("please")
        }
}

var lol = function() {
    console.log(getValues());
}

$('.buttonAdd').on('click', lol)




