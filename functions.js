
/* Funzione per verificare se una parola è palindroma */
function isPalindrome(inputWord) {
    
    let reverseWord = '';
    for (let i = inputWord.length - 1; i >= 0; i--) {
        reverseWord += inputWord.charAt(i);
    }
    console.log(reverseWord);
    const result = inputWord === reverseWord ? true : false;
    console.log(result);
    return result;
}


/* Funzione per generare un numero random */
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}


/* Funzione per verificare se un numero è pari o dispari */
function isEven(number) {
    return !(number % 2);
}