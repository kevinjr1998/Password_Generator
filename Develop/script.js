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
function generatePassword()
  {

  var lowercaseCharacters = document.getElementById("lowercaseCharacters").checked;
  var uppercaseCharacters = document.getElementById("uppercaseCharacters").checked;
  var numericCharacters = document.getElementById("numericCharacters").checked;
  var specialCharacters = document.getElementById("specialCharacters").checked;
  var specialCharactersList = '!#$%&()*+,-./<=>?@[\]^_{|}~'; 
  var numericCharactersList = '0123456789';
  var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters = '';
  var passwordLength = document.getElementById('passwordLength').value;
  var result = '';

  if (!lowercaseCharacters && !uppercaseCharacters && !numericCharacters && !specialCharacters) {
    alert("You must select at least one option!");
    return result;
  }

  if (passwordLength > 128 || passwordLength < 8){
    alert("Password should be between 8 and 128 characters long");
    return result;
  }

  if (uppercaseCharacters) {
    characters += uppercaseCharactersList;
  }

  if (lowercaseCharacters) {
    characters += lowercaseCharactersList;
  }

  if (specialCharacters) {
    characters += specialCharactersList;
  }

  if (numericCharacters) {
    characters += numericCharactersList;
  }

  for (var i = 0; i < passwordLength; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;

  }


