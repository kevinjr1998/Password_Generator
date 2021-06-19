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
  // the variables below check if the checkboxes for the respective properties of the password has been checked.
  // if they have been checked, it returns true
  var lowercaseCharacters = document.getElementById("lowercaseCharacters").checked;
  var uppercaseCharacters = document.getElementById("uppercaseCharacters").checked;
  var numericCharacters = document.getElementById("numericCharacters").checked;
  var specialCharacters = document.getElementById("specialCharacters").checked;

  // the varables below hold the strings of text that the password will be generated from.
  var specialCharactersList = '!#$%&()*+,-./<=>?@[\]^_{|}~'; 
  var numericCharactersList = '0123456789';
  var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  //initialises the characters variable as an empty string, this will hold the final string the password will be generated from
  var characters = '';
  var passwordLength = document.getElementById('passwordLength').value; //reads in password length
  var result = ''; //this will hold the final password

  // below will verify whether at least one of the password options hase been checked, if not, an alert is shown by the window it returns the empty result string
  if (!lowercaseCharacters && !uppercaseCharacters && !numericCharacters && !specialCharacters) {
    alert("You must select at least one option!");
    return result;
  }
  // checks that the password is within the parameters set by the specification, alert is shown if out of range
  if (passwordLength > 128 || passwordLength < 8){
    alert("Password should be between 8 and 128 characters long");
    return result;
  }

  //the following 4 if statements determine whether an option was selected or not, if yes then the characters corresponding to those options are added to the 
  // characters string

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

  //the code below will generate a random number between 0 and 1 less than the length of the characters string
  // and will append the character at that index in the characters string to the results string, up to the
  //length specified by the password length variable. after which it will return the results string.
  for (var i = 0; i < passwordLength; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;

  }


