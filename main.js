
// function randomLetter(capital, lower, numbers, symbol) {
//     let letters = "";

//     // Create an array for lowercase letters
//     const lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
//     // Create an array for uppercase letters
//     const upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     // Create an array for symbols
//     const symbolsArr = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\".split("");
//     // Create an array for numbers
//     const numbersArr = "0123456789".split("");

//     if (capital > 0) {
//         for (let i = 0; i < capital; i++) {
//             letters += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];

//         }
//     }
//     if (lower > 0) {
//         for (let i = 0; i < capital; i++) {
//             letters += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];

//         }
//     }
//     if (numbers > 0) {
//         for (let i = 0; i < capital; i++) {
//             letters += numbersArr[Math.floor(Math.random() * numbersArr.length)];

//         }
//     }
//     if (symbol > 0) {
//         for (let i = 0; i < capital; i++) {
//             letters += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];

//         }
//     }
//     return letters;
// }


// console.log(randomLetter(4, 4, 4, 4));
// const generateExtraChars = (length) => {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }


// const mixString = (str) => {
//     str = str.split('').sort(() => {
//         return Math.floor(Math.random() * (5 - (-5)) + 5) - 10;
//     }).join('');
//     return str;
// }

// const generateBtn = document.getElementById("gene-btn")
// const password = document.getElementById("pass-box")


// function generatorPassword(btn) {

//     btn.addEventListener("click", () => {


//         return password;
//     })
// }