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
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//need to define generatePassword function for ths project

//delete cosole in the end
function generatePassword() {
  console.log("this is a button test"); //delete later
  //checking password length
  var passwordLength = window.prompt("What length should your password be? Please type a number between 8 and 128");
  console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      generatePassword();
    }
  
  var chooseCriteria = function () {
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
      return chooseCriteria();
    }
  }
  chooseCriteria();
  
  
  // var password = "";
  // //password generator loop
  // for (let i = 0; i <= passwordLength; i++) {

  // }

  //final return to display password in box
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