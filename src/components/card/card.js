const form = document.querySelector('form.cards');
console.log('что тут у нас?', form);
const fields = form.querySelectorAll('.input');
console.log('что тут у нас?', fields);

const validateButton = form.querySelector('.button');
console.log('что тут у нас?', validateButton);


function generateError(text) {
    let error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
}


function removeValidation() {
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

function checkField() {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blanck', fields[i]);
            let error = generateError(' * ');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkField();
});

// TODO if (cardsElement === null) {
//TODO    throw "Работать дальше нельзя! Элемент не найден!"


