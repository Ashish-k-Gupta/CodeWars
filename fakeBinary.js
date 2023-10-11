/* 
DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// solution

function fakeBin(x){
    x =  x.split('')
   let newArr = []
for(let i = 0; i < x.length; i++){
   if(x[i] < 5){
       newArr.push(0)
   }else if(x[i] >= 5){
       newArr.push(1)
   }
}
   return newArr.join('')
}
let arr = ('45385593107843568')

console.log(fakeBin(arr))


//Best solution

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}