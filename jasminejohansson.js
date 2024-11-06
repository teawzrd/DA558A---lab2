function validateUserInfo() {

 let errors = [];

/*Validate user informaiton*/
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let emailAdress = document.getElementById("emailAdress").value;

/*variable to check that the email is valid*/
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*variables questions*/
let question1 = document.getElementById("question1").value;
let question5 = document.getElementById("question5").value;

/*check if the requiered fields are empty*/
if (firstName === "") {
    errors.push("First name is requiered");
}

if (lastName ==="") {
    errors.push("Last name is is requiered");
}

if (emailAdress ==="") {
    errors.push("Email is requiered");
}

/* if the error array is empty, check for the valid format*/
if (!errors.length){
   /*test first name valid*/
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        errors.push("first name must only contain letters");
    }

    if (!/^[a-zA-Z]+$/.test(lastName)){
        errors.push("last name must only contain letters");
    }

    if (!validRegex.test(emailAdress)){
        errors.push("you have to enter a valid email");
    }


}

/*Check if the requiered questions are empty*/ 
if (question1 ===""){
    errors.push("You must answer question 1")
}

if (question5 ===""){
    errors.push("You must answer question 5")
}


/*Show error is there is one*/
if (errors.length > 0) {
    console.log(errors);
    alert(errors.join("\n"));
} else{     
    alert("it works")
    
}

return errors;
}


