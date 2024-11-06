function validateUserInfo() {

 let errors = [];

/*Validate user informaiton*/
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let emailAdress = document.getElementById("emailAdress").value;

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

    

}


/*Show error is there is one*/
if (errors.length > 0) {
    console.log(errors);
    alert(errors.join("\n"));
}

return errors;
}


