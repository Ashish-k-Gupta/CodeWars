/* 
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//Solution 


let array = [1,2,3,4]

function arrayAverage(array){
    if(array.length > 0){
        let sum = 0;
        let average;
        for(let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        average = sum/ array.length;
        return average;
    }else{
        return 0;
    }
}

console.log(arrayAverage(array))



// Solution 2
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}