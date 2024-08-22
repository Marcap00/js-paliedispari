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