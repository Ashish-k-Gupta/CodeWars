/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces
*/




// Solution

function getCount(str) {
    let numOfVowels = 0;
    let newStr = str.split('')
    for(let i = 0; i < newStr.length; i++){
      (newStr[i] === 'a' || newStr[i] ===  'e' || newStr[i] ===  'i' || newStr[i] ===  'o' || newStr[i] ===  'u') ? numOfVowels++ : null
      
    }
    return numOfVowels
  }