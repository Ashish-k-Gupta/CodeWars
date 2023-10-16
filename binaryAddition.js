/* 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/
function addBinary(a, b) {
    if (a + b === 0) return '0';
    
    let sum = a + b;
    let binary = '';
    
    while (sum > 0) {
      const remainder = sum % 2;
      binary = remainder + binary;
      sum = Math.floor(sum / 2);
    }
    
    return binary || '0'; // Handle the case where the sum is 0
  }
  
  console.log(addBinary(50, 50)); 
  

  //Best practice
  function addBinary(a,b){
    return (a+b).toString(2)
  }

  //Same approach

  function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }