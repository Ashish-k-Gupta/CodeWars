// Question link - https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

//My Soltuion which is wrong by CodeWars

let string = 'The woods are lovely dark and deep'
function capatalizeWords(string){
    const words = string.split(' ');

    const capatalizeWords = words.map(word =>{
        if(word.length < 2){
            return word.toUpperCase();
        }
        return word[0].toUpperCase() + word.slice(1);
    });

    const capitalizedString = capatalizeWords.join(' ');
    return capitalizedString;
}

const result = capatalizeWords(string)
console.log(result)


//Best practice & working solution

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//Answer I liked

String.prototype.toJadenCase = function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
  };