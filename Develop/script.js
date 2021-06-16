// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate password
generatePassword(){

  var lowercaseCharacters = false;
  var uppercaseCharacters = false;
  var numericCharacters = false;
  var specialCharacters = false;
  var specialCharactersList = '!#$%&()*+,-./<=>?@[\]^_{|}~'; 
  var numericCgharactersList = '0123456789';
  var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters = '';
  var passwordLength;

  if (!lowercaseCharacters && !uppercaseCharacters && !numericCharacters && !specialCharacters) {
    alert("You must select at least one option!");
    return;
  };

  if (uppercaseCharacters) {
    characters += uppercaseCharactersList;
  };

  if (lowercaseCharacters) {
    characters += lowercaseCharactersList;
  };

  if (specialCharacters) {
    characters += specialCharactersList;
  };

  if (numericCharacters) {
    characters += specialCharacters;
  };

  for (i=0; i < passwordLength; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;

  }


