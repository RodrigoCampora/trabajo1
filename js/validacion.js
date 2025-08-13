
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }

    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }


document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('regBtn').addEventListener('click',todobien);
function todobien(){
    if(blank()&&validateTermsAndShowAlert()&&validarContraseña()&&EqualPass()){
        showAlertSuccess();
    }
    else{
        showAlertError();
    }
}
function blank(){
    const name=document.getElementById('nombre').value;
    const lastname=document.getElementById('apellido').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password1').value;
    const repeatPassword=document.getElementById('password2').value;
    if(!name || !lastname || !email || !password || !repeatPassword){
        return false;
    }
    return true;
}


function validateTermsAndShowAlert() {
    const checkbox = document.getElementById("terminos");
        if (checkbox.checked) {
            return true;
        } else {
            return false;
        }
    }
function EqualPass(){
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");        
    if (pass1.value !== "" && pass1.value === pass2.value) {
            return true;
        } else {
            return false;
        }
}
function validarContraseña () {


    let contraseña= document.getElementById("password1").value;


    if (contraseña.length <6) {
        return false;
    } else{
        return true;
    }
}
});

