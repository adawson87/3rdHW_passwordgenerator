// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowercase = 'abcde'.split('');
let uppercase = 'ABCDE'.split('');
let special = '@#$%^'.split(''); 
let numbers = '12345'.split('');
let options = []
// Variables for uppercase

// variables for numbers

// variables for special characters

// Function Generate Password 
  // Use a prompt to ask for password length
  // We need 4 confirm variables for each of the criteria
  // Write a conditional if statement to verify at least one character set was confirmed.
  // Math.random() generates a random number between 0 and 1.
  // Math.floor() rounds a decimal or float number down to the nearest whole number
function generatePassword() {
  var result = []

  let length = parseInt(window.prompt('How long would you like your password?'))
  if(length < 8 || length > 128) {
    alert('Password length must be between 8 and 128')
    return;
    }

  let hasLower = window.confirm('Would you like to have lowercase in your password?')
  if(hasLower === true) {
    options = options.concat(lowercase);
  }
  let hasUpper = window.confirm('Would you like to have Uppercase')
  if(hasUpper === true){
    options = options.concat(uppercase);
  }
  let hasSpecial = window.confirm('Would you like special Characters')
  if(hasSpecial === true){
    options = options.concat(special)
  }
  let hasNumber = window.confirm('Would you like numbers')
  if(hasNumber === true){
    options = options.concat(numbers)
    
  }

  
  console.log(options)
  for(i = 0; i < length; i++) {
    var number = Math.floor(Math.random() * options.length);
    var character = options[number];

    result.push(character);
  }

  console.log(length)
  return result.join('');
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
