var fNameInput = document.getElementById("firstName");
var lNameInput = document.getElementById("lastName");
var emailInput = document.getElementById("emailId");
var passwordInput = document.getElementById("passwordId");
var masg = document.getElementById("message");

function startquiz(){
    if(fNameInput.value == "" || lNameInput.value == "" || emailInput.value == "" || passwordInput.value == ""){
        masg.style.display = "block";
        masg.innerHTML = "*Please enter all the fields";
    } 
    else{ 
        var userInput = {
            fName : fNameInput.value,
            lName : lNameInput.value,
            email : emailInput.value,
            password : passwordInput.value
        }
        
        localStorage.setItem("user" , JSON.stringify(userInput));
       
        
        window.location = "quiz.html";
      
        
    }
}

