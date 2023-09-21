/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


[2, 4, 0, 100, 4, 11, 2602, 36]
should return: 11 (the only odd Number)

[160, 3, 1719, 19, 11, 13, -21]
should return: 160 (the only even number)

*/


let arr = [160, 3, 1719, 19, 11, 13, -21]

function retOutlier(arr){
    let even = arr.filter(a => a%2 == 0);
    let odd = arr.filter(a => a%2 == 0);
    return even.length == 1 ? even[0] : odd[0]
}


function findOutlier(int){

    let LastEven;
    let LastOdd;
    let evenCount = 0;
    let oddCount = 0;

    for(let i = 0; i < int.length; i++){
        if(int[i] % 2 === 0){
            evenCount++;
            LastEven = int[i];
        }else{
            oddCount++;
            LastOdd = int[i];
        }
    }

    if(evenCount > 1 && oddCount === 1){
        return LastOdd
    }else if(oddCount > 1 && evenCount === 1){
        return LastEven
    }

}
console.log(retOutlier(arr))
console.log(findOutlier(arr))