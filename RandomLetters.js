const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("quantity");
const lengthOfPass = document.getElementById("length");
const numberOfPasswords = document.getElementById("pass-amount");
const passwordBox = document.getElementById("pass-box");

let errorMsg ='';

const minMost = 0;
const minLen = 8;
const maxMost = 5;
const maxLen = 16;

const getPassStrength = (passStr) => {
  const powerArr=['Weak', 'Good', 'Strong', 'Best!'];
  let power = 0;
  if((/[A-Z]/).test(passStr) && (/[a-z]/).test(passStr)){
    power++;
    if((/[0-1]/).test(passStr)){
      power++;
    }
  }
  if((/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test){
    power++;
  }
  return powerArr[power];
}

const isError = (arr, minMaxL, amountOfPass) => {
  if(arr.reduce((acc,cur) => acc+cur ,0) > minMaxL){
    errorMsg ='Too many chars!'
    return true;
  }
  if (amountOfPass < 1 || amountOfPass > 3) {
    errorMsg = 'Only 1-3 passwords!'
    return true;
  }
  if (minMaxL < minLen || minMaxL > maxLen) {
    errorMsg = 'Password length can only be 8-16!'
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minMost || arr[i] > maxMost) {
      errorMsg = 'Invalid amount in one/more parameters!'
      return true;
    }
    return false;
  }
};
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
    for (let i = 0; i < lower; i++) {
      letters += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
    }
  }
  if (numbers > 0) {
    for (let i = 0; i < numbers; i++) {
      letters += numbersArr[Math.floor(Math.random() * numbersArr.length)];
    }
  }
  if (symbol > 0) {
    for (let i = 0; i < symbol; i++) {
      letters += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
    }
  }

  return letters;
}

const generateExtraChars = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const mixString = (str) => {
  str = str
    .split("")
    .sort(() => {
      return Math.floor(Math.random() * (5 - -5) + 5) - 10;
    })
    .join("");
  return str;
};

function generatorPassword() {
  let e = document.querySelectorAll("p");
  if (e) {
    e.forEach((element) => {
      element.remove();
    });
  }

  const upper = Number(uppercase.value);
  const lower = Number(lowercase.value);
  const nums = Number(numbers.value);
  const symb = Number(symbols.value);
  const len = Number(lengthOfPass.value);
  const numOfPasswords = Number(numberOfPasswords.value);

  if (isError([upper, lower, nums, symb], len, numOfPasswords)) {
    const errorP = document.createElement("p");
    errorP.textContent = errorMsg;
    passwordBox.appendChild(errorP);
    return;
  }

  for (let i = 0; i < numOfPasswords; i++) {
    let pass = randomLetter(upper, lower, nums, symb);
    pass += generateExtraChars(len - pass.length);
    pass = mixString(pass);
    const newP = document.createElement("p");
    newP.textContent = pass + ' - ' + getPassStrength(pass);
    passwordBox.appendChild(newP);
  }
}
