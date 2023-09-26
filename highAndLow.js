/* 
function highAndLow(numbers) {
  // Split the input string into an array of numbers
  const numArray = numbers.split(' ').map(Number);

  // Find the highest and lowest numbers
  const highest = Math.max(...numArray);
  const lowest = Math.min(...numArray);

  // Return the result as a string
  return ${highest} ${lowest};
}

// Test cases
console.log(highAndLow("1 2 3 4 5"));    // Output: "5 1"
console.log(highAndLow("1 2 -3 4 5"));   // Output: "5 -3"
console.log(highAndLow("1 9 3 4 -5"));   // Output: "9 -5"
*/

//Solution

function highAndLow(numbers) {
    // Split the input string into an array of numbers
    const numArray = numbers.split(' ').map(Number);
  
    // Find the highest and lowest numbers
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
  
    // Return the result as a string
    return ${highest} ${lowest};
  }
  
  // Test cases
  console.log(highAndLow("1 2 3 4 5"));    // Output: "5 1"
  console.log(highAndLow("1 2 -3 4 5"));   // Output: "5 -3"
  console.log(highAndLow("1 9 3 4 -5"));   // Output: "9 -5"



  //Best practice

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return ${Math.max(...numbers)} ${Math.min(...numbers)};
  }