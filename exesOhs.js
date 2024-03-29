/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let countX = 0;
    let countY = 0;
    str = str.split('')
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'x' || str[i] === "X"){
            countX ++;
        }else if(str[i] === 'o' || str[i] === 'O'){
            countY++;
        }
    }if(countX === countY){
        return true;
    }else{
        return false;
    }
}
let str = ('xxooxso')
console.log(XO(str))


//Best Solutions

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//Best solutions

function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
  }
g  