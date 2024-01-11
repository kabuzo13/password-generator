// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var length;
var special;
var number;
var upper;
var lower;

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Please choose a length for your password. It must be at least 8 characters"));
  if (length < 8) {
    alert("Your password must contain at least 8 characters");
    return getPasswordOptions();
  } if (length > 128) {
    alert("Your password cannot contain more than 128 characters");
    return getPasswordOptions();
  };
  
  var special = confirm("Would you like to include a special character?"); 
  var number = confirm("Would you like to include a number?");
  var upper = confirm("Would you like to include an upper case character?");
  var lower = confirm("Would you like to include a lower case character?");

  if (!special && !number && !upper && !lower) {
    alert("You must select at least one character type for your password");
  return getPasswordOptions()
  }

  var passwordOptions = {
    length: length,
    special: special,
    number: number, 
    upper: upper,
    lower: lower
  };
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
var currentArr = new Array();
  
  if (options.special) {
    currentArr = currentArr.concat(specialCharacters)
  }
  if (options.number) {
    currentArr = currentArr.concat(numericCharacters)
  }
  if (options.lower) {
    currentArr = currentArr.concat(lowerCasedCharacters)
  }
  if (options.upper) {
    currentArr = currentArr.concat(upperCasedCharacters)
  }
  
  let pass = ""
  let i = 0
  while (i < options.length) {
    pass += getRandom(currentArr);
    i++;
  } 
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
writePassword()

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
