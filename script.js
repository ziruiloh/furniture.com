var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('subit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;

    if(name.length==0){
    name.Error.innerHTML='Name is required';
    return false;
}
    nameError.innerHTML='valid';
    return true;
}

function validatePhone(){
    var phone=document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits';
        return false;
    }
    phoneError.innerHTML='valid';
    return true;
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+'more characters required';
        return false;
    }
    messageError.innerHTML='valid';
    return true;
}

function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
    submitError.innerHTML='Message sent successfully';
    return true;

}





var LoginForm=document.getElemenById('LoginForm');
var RegForm=document.getElementById('RegForm');
var Indicator=document.getElementById('Indicator');

function register(){
    RegForm.style.transform="translateX(0px)";
    LoginForm.style.transform="translateX(0px)";
    Indicator.style.transform="translateX(100px)";
}

function login(){
    RegForm.style.transform="translateX(300px)";
    LoginForm.style.transform="translateX(300px)";
    Indicator.style.transform="translateX(0px)";
}
