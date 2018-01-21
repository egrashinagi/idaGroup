function showError(container, errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    let elems = form.elements;

    resetError(elems.number.parentNode);
    if (!elems.number.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
    }

    resetError(elems.month.parentNode);
    if (!elems.month.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
    }

    resetError(elems.year.parentNode);
    if (!elems.year.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
    }

    resetError(elems.username.parentNode);
    if (!elems.username.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
    }

    resetError(elems.pass.parentNode);
    if (!elems.pass.value) {
        showError(elems.from.parentNode, ' Укажите от кого.');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
    } else if (elems.password.value !== elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают.');
    }

    resetError(elems.to.parentNode);
    if (!elems.to.value) {
        showError(elems.to.parentNode, ' Укажите, куда.');
    }

    resetError(elems.message.parentNode);
    if (!elems.message.value) {
        showError(elems.message.parentNode, ' Отсутствует текст.');
    }
}