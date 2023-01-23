//I will summon my function to add and mix all the chars of a password


const generateExtraChars = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
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
