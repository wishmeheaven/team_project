const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const quantity = document.getElementById('quantity');
const length = document.getElementById('length');
const numberOfPasswords = document.getElementById('pass-amount');


function randomLetter(capital, lower, numbers, symbol) {
  let letters = "";

  // Create an array for lowercase letters
  const lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
  // Create an array for uppercase letters
  const upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // Create an array for symbols
  const symbolsArr = "!@#$%^&*_+-=|?".split("");
  // Create an array for numbers
  const numbersArr = "0123456789".split("");

  if (capital > 0) {
    for (let i = 0; i < capital; i++) {
      letters += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];

    }
  }
  if (lower > 0) {
    for (let i = 0; i < capital; i++) {
      letters += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];

    }
  }
  if (numbers > 0) {
    for (let i = 0; i < capital; i++) {
      letters += numbersArr[Math.floor(Math.random() * numbersArr.length)];

    }
  }
  if (symbol > 0) {
    for (let i = 0; i < capital; i++) {
      letters += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];

    }
  }


  return letters;
}



const generateExtraChars = (length) => {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


const mixString = (str) => {
 str = str.split('').sort(() => {
  return Math.floor(Math.random() * (5 - (-5)) + 5) -10;
 }).join('');
 return str; 
}

mixString('abcdefghij');//=

