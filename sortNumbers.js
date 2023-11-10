/* 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

// Solution

function solution(nums) {
    // Check if the input is null/nil or an empty array
    if (nums === null || nums === undefined || nums.length === 0) {
        return [];
    } else {
        // Sort and return the array
        return nums.sort(function(a, b) {
            return a - b;
        });
    }
}

// Example usage:
const sortedArray1 = solution([1, 2, 10, 50, 5]);
console.log(sortedArray1); // Logs the sorted array [1, 2, 5, 10, 50]

const sortedArray2 = solution([]); // Passing an empty array
console.log(sortedArray2); // Logs an empty array []

const sortedArray3 = solution(null); // Passing a null value
console.log(sortedArray3); // Logs an empty array []


// Best Practice

function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}