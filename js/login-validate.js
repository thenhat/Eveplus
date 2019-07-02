function validateForm() {
    var isValid = true;
    var isValidID = true;
    var isValidPassword = true;

    var txtID = document.forms['login-form']['ID'];
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
    var txtPassword = document.forms['login-form']['password'];
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
    isValid = isValidID && isValidPassword;
    return isValid;
}
var btnSubmit = document.forms['login-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if(validateForm()){
        alert('Login Success');
        doLogin();
        document.getElementsByClassName('login-form').innerHTML='';
    }
}
function doLogin() {

    var ID = document.forms['login-form']['ID'].value;
    var password = document.forms['login-form']['password'].value;

    htmlContent += ID;
    htmlContent += password;

    document.getElementById('login-validate').innerHTML += htmlContent;
}
