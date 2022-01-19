// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Variables for generator
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericValue = '0123456789'.split('');
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//need to define generatePassword function for ths project

function generatePassword() {
  //checking password length
  var passwordLength = window.prompt("What length should your password be? Please type a number between 8 and 128");
  console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      generatePassword();
    }
  
        //does it have uppercase value?
    var upperCasePresent = window.confirm ("Will it contain uppercase letters?");

    //does it have lowercase value?
    var lowerCasePresent = window.confirm ("Will it contain lowercase letters?");

    //does it have numeric value?
    var numbersPresent = window.confirm ("Will it contain numbers?");

    //does it have special characters?
    var specialCharactersPresent = window.confirm ("Will it contain special characters?");
    
    if (!upperCasePresent && !lowerCasePresent && !numbersPresent && !specialCharactersPresent) {
      window.alert("Please select at least one criteria");
          //does it have uppercase value?
        var upperCasePresent = window.confirm ("Will it contain uppercase letters?");

        //does it have lowercase value?
        var lowerCasePresent = window.confirm ("Will it contain lowercase letters?");

        //does it have numeric value?
        var numbersPresent = window.confirm ("Will it contain numbers?");

        //does it have special characters?
        var specialCharactersPresent = window.confirm ("Will it contain special characters?");
      
    }


    // updating passwordCharacter based on user response
    var passwordCharacter = [];

    if (upperCasePresent) {
      passwordCharacter = passwordCharacter.concat(upperCase);
    }

    if (lowerCasePresent) {
      passwordCharacter = passwordCharacter.concat(lowerCase);
    }

    if (numbersPresent) {
      passwordCharacter = passwordCharacter.concat(numericValue);
    }

    if (specialCharactersPresent) {
      passwordCharacter = passwordCharacter.concat(specialCharacter);
    }

    console.log(passwordCharacter);



  
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)];
  }

  return password;
}

//1. Critera prompts for passwords in sequence
//  a. length of password
//  b. 8 < password < 128
//  c. ask for uppercase, lowercase, numbers/numeric, special characters separatelty
//2.a. After each prompt input needs to be validated
//  b. at least one prompt needs to be selected
// 3. When prompts answered, generate password
// 4. Assign password into password variable to be displayed

// var password = (upperCasePresent, lowerCasePresent, numbersPresent, specialCharactersPresent); 

/*
var password = "";
  var characterSelector = [];
  if (upperCasePresent) {
    characterSelector.push(upperCase);
  }
  if (lowerCasePresent) {
    characterSelector.push(lowerCase);
  }
  if (numbersPresent) {
    characterSelector.push(numericValue);
  }
  if (specialCharactersPresent) {
    characterSelector.push(specialCharacter);
  }

  for (let i = 0; i < passwordLength; i++) {
    //   Pick one character type (UpperCase, LowerCase, Numbers, Special Characteres whichever are true)
    var

    function getRandomInt(max) {
      max = Math.floor(max);
      return Math.floor(Math.random() * max);
    }

    */
   