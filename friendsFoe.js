/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/


let friends =["Ryan", "Kieran", "Jason", "Yous", "1234"]
function friend(friends){
    return friends.filter(n => n.length === 4)
}

console.log(friend(friends)) 




//The below method is my solution and I don't know why it not correct.

/*
let friends =["Ryan", "Kieran", "Jason", "Yous"]
let friend = []
for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4){
        friend.push(friends[i]);
    }
}
console.log(friend);

*/