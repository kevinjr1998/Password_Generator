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





generatePassword()
{
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;
  var specialCharacters = '!#$%&()*+,-./<=>?@[\]^_{|}~'; 
  var numericCgharacters = '0123456789';
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters = '';

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select an option!");
    return;
  };

  if (uppercase) {
    characters += uppercaseCharacters;
  };
  if (lowercase) {
    characters += lowercaseCharacters;
  };
  if () {};
  if () {};




}


