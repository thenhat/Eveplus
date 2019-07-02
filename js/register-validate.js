function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidEmail = true;
    var isValidID = true;
    var isValidPassword = true;

    var txtName = document.forms['form-register']['fullname'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Name is required!';
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = ' ';
    }
    var txtEmail = document.forms['form-register']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = ' ';
    }
    var txtID = document.forms['form-register']['ID'];
    var msgID = txtID.nextElementSibling;
    if (txtID.value == null || txtID.value.length != 5) {
        msgID.classList.remove('msg-success');
        msgID.classList.add('msg-error');
        msgID.innerHTML = 'ID must be 5 characters';
        isValidID = false;
    }
    else {
        msgID.classList.remove('msg-error');
        msgID.classList.add('msg-success');
        msgID.innerHTML = ' ';
    }
    var txtPassword = document.forms['form-register']['password'];
    var msgPassword= txtPassword.nextElementSibling;
    if (txtPassword.value == null || txtPassword.value.length <6 || txtPassword.value.length > 18) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password must be between 6 and 18 characters';
        isValidPassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = ' ';
    }
    isValid = isValidName && isValidID && isValidPassword && isValidEmail;
    return isValid;
}
var btnSubmit = document.forms['form-register']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Register Success');
        doRegister();
        document.getElementsByClassName('form-register').innerHTML='';
    }
}
function doRegister() {
    var name = document.forms['form-register']['name'].value;
    var email = document.forms['form-register']['email'].value;
    var ID = document.forms['form-register']['ID'].value;
    var password = document.forms['form-register']['password'].value;

    htmlContent += name;
    htmlContent += email;
    htmlContent += ID;
    htmlContent += password;

    document.getElementById('register-validate').innerHTML += htmlContent;
}
