/* 

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

/* function validPin(pin){
    if(pin.length === 4 || pin.length === 6 && !isNaN(pin) ? true : false)
   
}
 */

//Shortest answer
function validPin(pin){
    return /^(\d{4}|\d{6})$/.test(pin)
}

validPin("123d")

/* 
The code return /^(\d{4}|\d{6})$/.test(pin) is a concise way of checking whether the pin string is a valid PIN based on a regular expression pattern. Here's an explanation of each part:

^ and $: These are called anchors. ^ asserts the start of the string, and $ asserts the end of the string. Together, they ensure that the entire string matches the pattern, not just a part of it.

\d: This is a character class representing any digit (0-9). It matches a single digit.

{4} and {6}: These are quantifiers that specify how many times the preceding \d should match. {4} means exactly four times, and {6} means exactly six times.

| (pipe): This is an alternation operator. It allows for multiple alternatives separated by |. In this case, it means either four digits or six digits are allowed.

So, when you put it all together:

(\d{4}|\d{6}) matches either four digits or six digits.
^(\d{4}|\d{6})$ ensures that the entire string consists of either four or six digits.
The .test(pin) function is used to apply this regular expression pattern to the pin string and check if it matches. If it matches the pattern (i.e., the string is composed of either four or six digits and nothing else), the function returns true, indicating that the pin is valid. If it doesn't match, it returns false, indicating that the pin is not valid according to the defined criteria.

*/



//Second Solution
//Answer that made most sense

function validatePin(pin){
    let validLength = (pin.length === 4 || pin.length === 6)
    let validChar = /^(\d+)$/.test(pin)
    /*  another wau to get validChar
        let validChar = pin.match(/^(\d+)$/);   */


    if(validLength && validChar){
        return true
    }else{
        return false
    }
}

console.log(validatePin("1234"))