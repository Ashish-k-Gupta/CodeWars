/* 
 print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for numbers that are multiples of both 3 and 5. For all other numbers, you print the number itself.
*/

//PREP
// fizzBuzz
// upto a number whole number
// divisible  by 3 = fizz
// divisilbel by 5 = buzz
// divisible by 3 and 5 = fizzBuzz
// also print rest of the numbres

let num = 25;
function fizzBuzz(num){

    for(let i = 0; i <= num; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzBuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
}

fizzBuzz(num)