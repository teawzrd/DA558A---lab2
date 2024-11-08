function validateUserInfo() {


    /*Variables*/
let errors = [];

let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let emailAdress = document.getElementById("emailAdress").value;

/*variable to check that the email is valid*/
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*variables questions*/
let question1 = document.getElementById("question1").value;
let question5 = document.getElementById("question5").value;

let errorList = document.getElementById("errorMessages");

let paris = document.getElementById("paris").checked;
let berlin = document.getElementById("berlin").checked;
let london = document.getElementById("london").checked;


/*check if the requiered fields are empty*/
if (firstName === "") {
    errors.push("First name is required");
}

if (lastName ==="") {
    errors.push("Last name is required");
}

if (emailAdress ==="") {
    errors.push("Email is required");
}

/* if the error array is empty, check for the valid format*/
if (!errors.length){
   /*test first name valid*/
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        errors.push("First name must only contain letters");
    }

    if (!/^[a-zA-Z]+$/.test(lastName)){
        errors.push("Last name must only contain letters");
    }

    if (!validRegex.test(emailAdress)){
        errors.push("You have to enter a valid email");
    }


}

/*Check if the requiered questions are empty*/ 
if (question1 ===""){
    errors.push("You must answer question 1")
}

if (question5 ===""){
    errors.push("You must answer question 5")
}

/*check if the radio buttons are not checked and in that cause push error*/ 
if (!paris && !berlin && !london){
    errors.push("You have to answer question 3, by checking one radio button")
}


/*if the array is bigger than 0 show error messages*/
if (errors.length > 0) {
    console.log(errors);

    /*alert(errors.join("\n"));*/
  
    /*add error message to the list element in the html and display*/
    errorList.innerHTML = ""; //clear if any prevcious error messages
    errorList.innerHTML = "<ul><li>" + errors.join("</li><li>") + ("</li></ul>");

    

} else{     

    /*display a success message in the html*/ 
   const successMessage = document.getElementById("successMessage");
   successMessage.innerHTML = "Form submitted"

   /*clear if any old errors*/ 
   const errorList = document.getElementById("errorMessages");
   errorList.innerHTML = "";
    
}

return errors;
}


