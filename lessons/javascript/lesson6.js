//for (let index=0; index<10; index++){
//     console.log(index)
// }

//q.1

// for (let index=1; index<=10; index++){
//     console.log(index)
// }

//q.2

// var array = [0,1,2,3,4,5,6,11,13,15,17,19]
// for (let i=0; i<array.length;i++){
//     if(array[i]%2 === 0){
//         console.log(`even number ${array[i]}`)
//     }else{
//         console.log(`odd number ${array[i]}`)
//     }
// }

// for (let index=0; index<=100; index+=2){
//     console.log(index)
// }

//challenge

//palindrome 

function checkPalindrome(string){
    console.log(string.split("").reverse().join("n"))
}

checkPalindrome("madam")

/*
create me a script that prints forms of fizzbuzz depending on if a number is divisible. 
Any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. 
finally any number divisible by both 3 & 5 should print "FIZZBUZZ!"
0-100
*/

// var array = [1,2,3,4,5,6345,32]
// target = 9

// let ans = false
// var position;

// for (let i=0;i<array.length;i++){
//     if(array[i] === target){
//         ans = true
//         position = i
//     }
// }
// if(ans){
//     console.log("target is in the array at position " + position)
// }else{
//     console.log("item not in array")
// }


/*

let index = 0
while (condition){
    doSomething
    index++
}

*/

let i=0
while (i<100){
    console.log(i)
    i++
}


