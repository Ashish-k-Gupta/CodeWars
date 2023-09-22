//PREP
// fizzBuzz
// upto a number
// divisible  by 3 = fizz
// divisilbel by 5 = buzz
// divisible by both = fizzBuzz
// also print rest of the numbres

let num = 23;
function fizzBuzz(num){

    for(let i = 0; i <= num; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            return ("fizzBuzz")
        }else if(i % 3 === 0){
            return ("fizz")
        }else if(i % 5 === 0){
        return ("Buzz")
    }else{
        return (i)
    }
}
}

console.log(fizzBuzz(num))