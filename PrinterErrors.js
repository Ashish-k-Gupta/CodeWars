/* 


In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

Fundamentals

*/

// Solution

function printerError(s) {
    // Count the number of characters not in the range 'a' to 'm'
    const errorCount = s.split('').filter(char => char > 'm').length;

    // Calculate the error rate as a string fraction
    const totalLength = s.length;
    const errorRate = errorCount + '/' + totalLength;

    return errorRate;
}

// Example usage:
const controlString = "aaaxbbbbyyhwawiwjjjwwm";
const errorRate = printerError(controlString);
console.log(errorRate); // Output: "11/23"


//Solution I was trying

function printerError(m) {
    let s = m.split()
    let totalLetters = s.length;
    let error = 0
    for(let i = 0; i < s.lenght; i++){
      if(s[i] !== 'a' || s[i] !== 'b' || s[i] !== 'c'|| s[i] !== 'd'|| s[i] !== 'e' || s[i] !== 'f' || s[i] !== 'g' || s[i] !== 'h' || s[i] !== 'i' || s[i] !== 'j' || s[i] !== 'k' || s[i] !== 'l' || s[i] !== 'm')
       error = error + 1;
    }
    return `${error}/${totalLetters}"`
  }
  let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
  console.log(printerError(s))