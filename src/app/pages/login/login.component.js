//=============== START - DECLARATION DU FORMULAIRE ===============//    

(function() {
  'use strict'

  let form = document.getElementById('loginForm');
  

  form.addEventListener('submit', function(event) {
   
    Array.from(form.elements).forEach((input) => {
      // 
      if (input.type !== "submit") {
        // if (validateFieds(input)==0)
        if (!validateFields(input)) {
            
            event.preventDefault();
            event.stopPropagation();
            
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            input.nextElementSibling.style.display = 'block';
        } 
        else {
            //alert('3')
            input.nextElementSibling.style.display = 'none';
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
      }
    });
    
  }, false)
})()

//=============== END - DECLARATION DU FORMULAIRE ================//

//========== START - VALIDATION DES CHAMPS DU FORMULAIRE =========//

function validateFields(input) {
let fieldName = input.name;

// Validaton de l'input userName
if (fieldName == "userName") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateTextNumber(input)){
    return false;
  }
  return true;
}

// Validaton de l'input EMAIL
if (fieldName == "email") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateEmail(input)){
    return false;
  }
  return true;
}

// Validaton de l'input PASSWORD
if (fieldName == "passWord") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validatePassword(input)){
    return false;
  }
  return true;
}

// Validaton de l'input PASSWORDCOPY
if (fieldName == "passWordCopy") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validatePassword(input)){
    return false;
  }
  if (!validatePasswordsEqual(input)){
    return false;
  }
  return true;
}

// Validaton de l'input NOM
if (fieldName == "lastName") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateText(input)){
    return false;
  }
  return true;
}

// Validaton de l'input PRENOM
if (fieldName == "firstName") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateText(input)){
    return false;
  }
  return true;
}

// Validaton de l'input ADDRESS
if (fieldName == "address") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateTextNumber(input)){
    return false;
  }
  return true;
}

// Validaton de l'input CITY
if (fieldName == "city") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateText(input)){
    return false;
  }
  return true;
}

// Validaton de l'input POSTALCODE
if (fieldName == "postalCode") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validatePostalCode(input)){
    return false;
  }
  return true;
}

// Validaton de l'input TEL
if (fieldName == "tel") {
  if (!validateRequired(input)) {
    return false;
  }
  if (!validateTel(input)){
    return false;
  }
  return true;
}

// Validaton de l'input CONDITIONSCAUTION
if (fieldName == "conditionsCaution") {
  if (!validateTerms(input)) {
    return false;
  }
  return true;
}

// Validaton de l'input CONDITIONSGEN
if (fieldName == "conditionsGen") {
  if (!validateTerms(input)) {
    return false;
  }
  return true;
}
}


// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation d'un champ CHECKBOX
function validateTerms(input) {
return input.checked;
}

//Validate d'un champ caractère latin & lettre
function validateText (input){
return input.value.match ("^[A-Za-z+\\s?-]+$");
}

//Validate caractère latin plus chiffre
function validateTextNumber (input) {
return input.value.match ("^[A-Za-z0-9\\s?+-._]+$")
}

//Validate code postal
function validatePostalCode (input){
return input.value.match ("^(0[1-9]|[1-9][0-9])[0-9]{3}$")
}

//Validate tel
function validateTel (input){
return input.value.match ("^(0|\\+33|0033)[6-7][0-9]{8}$")
}

//validate email
function validateEmail (input) {
return input.value.match ("^[A-Za-z0-1+-._]+@[A-Za-z0-1\\-\\_]+.[A-Za-z]{2,3}$")
}

//validate PASSWORD
function validatePassword (input) {
return input.value.match ("^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{6,20}$")
}

//validate PASSWORD == PASSWORDCOPY
function validatePasswordsEqual (input) {
var passwordValue = document.getElementById("passWord");
return !(input.value != passwordValue.value)
}
//========== END - VALIDATION DES CHAMPS DU FORMULAIRE =========//