//I will summon my function to add and mix all the chars of a password


const generateExtraChars = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-@#$%^&*';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
generateExtraChars(13);

const mixString = (str) => {
   str = str.split('').sort(() => {
    return Math.floor(Math.random() * (5 - (-5)) + 5) -10;
   }).join('');
   return str; 
}

mixString('abcdefghij');//=
