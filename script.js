// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// function that generates the password dictated from user prompts
function generatePassword() {
  let password = [];
  let passLength = prompt("What is your desired length for your password? (8-128)");

  // prompts
  let confirmLowercase;
  let confirmUppercase;
  let confirmNumeric;
  let confirmSpecial;

  // confirms prompts when generating password given user input
  let criteria;

  // function to convert lowercase letters to uppercase
  const toUpper = function(x) {
    return x.toUpperCase();
  };

  let upperConversion = [];

  // creating variable for all usable characters
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  const uppercase = lowercase.map(toUpper);

// error handling to verify user input is between 8 and 128 AND verify the input is a valid number
  if (passLength === null){
    return;

  } else if (parseInt(passLength) < 8 || parseInt(passLength) > 128 || passLength === "") {
    alert("Value of number is out of the range of 8-128. Please try again.");
    generatePassword();

  } else if (isNaN(passLength)){
    alert("Wrong type of value. Please enter a numerical value.");
    generatePassword();

  } else {
    confirmLowercase = confirm("Would you like to use lowercase letters? Cancel = 'No'");
    confirmUppercase = confirm("Would you like to use uppercase letters? Cancel = 'No'");
    confirmNumeric = confirm("Would you like to use numeric values? Cancel = 'No'");
    confirmSpecial = confirm("Would you like to use special characters? Cancel = 'No'");

  };


  // If user cancels all choices
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial){
    alert("Invalid criteria. You must make at least one selection!");
    return;

  // 4 confirmed options
  } else if (confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial){
    criteria = lowercase.concat(uppercase, numeric, special);

  // 3 confirmed options
  } else if (confirmLowercase && confirmUppercase && confirmNumeric){
      criteria = lowercase.concat(uppercase, numeric);

  } else if (confirmLowercase && confirmUppercase && confirmSpecial){
      criteria = lowercase.concat(uppercase, special);

  } else if (confirmLowercase && confirmNumeric && confirmSpecial){
      criteria = lowercase.concat(numeric, special);

  } else if (confirmNumeric && confirmUppercase && confirmSpecial){
      criteria = numeric.concat(uppercase, special);

  // 2 confirmed options
  }  else if (confirmLowercase && confirmUppercase){
      criteria = lowercase.concat(uppercase);

  }  else if (confirmLowercase && confirmNumeric){
      criteria = lowercase.concat(numeric);

  }  else if (confirmLowercase && confirmSpecial){
      criteria = lowercase.concat(special);

  }  else if (confirmNumeric && confirmUppercase){
      criteria = numeric.concat(uppercase);

  }  else if (confirmSpecial && confirmUppercase){
      criteria = special.concat(uppercase);

  }  else if (confirmNumeric && confirmSpecial){
    criteria = numeric.concat(special);

  // 1 confirmed option
  } else if (confirmLowercase){
    criteria = lowercase;

  // converting lower to uppercase
  } else if (confirmUppercase){
    criteria = upperConversion.concat(uppercase);

  } else if (confirmNumeric){
    criteria = numeric;

  } else if (confirmSpecial){
    criteria = special;

  }

  // iteration to actually randomly generate the password given the criteria from the prompts above
  for (let i = 0; i < parseInt(passLength); i++){
    let Criteria = criteria[Math.floor(Math.random() * criteria.length)];
    password.push(Criteria);
  };

  let pw = password.join("");
  return pw;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
