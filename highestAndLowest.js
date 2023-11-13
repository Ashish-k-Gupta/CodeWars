/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers) {
    const array = numbers.split(' ').map(Number);
    if (array.length === 0) {
      return ""; // Handle the case of an empty input string
    }
    
    const highest = Math.max(...array);
    const lowest = Math.min(...array);
  
    return highest + " " + lowest;
  }
  
  console.log(highAndLow("1 2 3 4 5"));    // "5 1"
  console.log(highAndLow("1 2 -3 4 5"));   // "5 -3"
  console.log(highAndLow("1 9 3 4 -5"));   // "9 -5"
  

//   Best Practices

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//   Best Practices

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }