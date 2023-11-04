// //Tuesday
// //.tolowerCase() / .toUpperCase()
// //logical operators in conditional statements > <
// //arrays
// //switch cases

// // greater than > / greater or equal to >=
// // less than < / less or equal to <=


// // var age = "18"

// // if(typeof age === "number"){
// //     if(age === 60){
// //         console.log("Only 7 years to go")
// //         console.log("need to still work")
// //     }else if((age >= 67) && (age<70)){
// //         console.log("Time to retire")
// //     }else if(age>=70){
// //         console.log("Enjoying my time off")
// //     }
// //     else{
// //         console.log("need to work")
// //     }
// // }else{
// //     console.log("Error: Age must be a number")
// // }




// var name = "jkdfhalkjdshflkashdflkdashflkadsfdhlkdsajfhlkasj"
// console.log(name.toUpperCase())



// if(typeof name === "string" && (name.length<15)){
//     if(name.toLowerCase() === "john" || name.toLowerCase() === "johnathan"){
//         console.log("Welcome back John")
//     }else{
//         console.log("Sorry i do not recognise you")
//     }
// }else{
//     console.log("Error")
// }


// //-------------- Switch Cases

// /*

// switch(condition){
//     case 1:
//         doThis
//         break
//     case 2:
//         doThis
//         break
//     default:
//         doThis
//         break;
// }
// */

// var dayOfTheWeek = "monday"
// var time = "16:30"

// switch(dayOfTheWeek.toLowerCase()){
//     case "monday":
//         if(time === "16:30"){
//             console.log("finish work early")
//         }
//         break;
//     case "tuesday":
//         console.log("Work")
//         break;
//     case "Wednesday":
//         console.log("Work")
//         break;
//     case "thursday":
//         console.log("Work")
//         break;
//     case "friday":
//         console.log("ITS FRIDAY")
//         break;
//     case "saturday":
//         console.log("ITS WEEKEND")
//         break;
//     case "sunday":
//         console.log("its monday tomorrow :(")
//         break;
//     default:
//         console.log(`Error ${dayOfTheWeek} is not an actual day`)
//         break;
// }



//-----------------------Homework---------------------
//q.1

var firstName = "JAmes";

if(typeof firstName === "string" && (firstName.length>=2 && firstName.length<15)){
    if(firstName.toLowerCase() === "john" || firstName.toLowerCase() === "james" || firstName.toLowerCase() === "jason"){
        console.log(`Welcome back ${firstName}`)
    }else{
        console.log("Sorry computer does not recognise you")
    }
}else{
    console.log("ERROR")
}

let age = 120;

if(typeof age === "number" && (age>7 && age<=100)){
    if(age>= 25){
        console.log("Higher education is option")
    }else{
        console.log("Go study")
    }
}else{
    console.log("ERROR")
}

//q.3

var a = 25
var b = 20

var operation = 24

switch(operation.toLowerCase()){
    case "addition":
        console.log(a+b)
        break;
    case "subtraction":
        console.log(a-b)
        break;
    case "multiplication":
        console.log(a*b)
        break;
    case "division":
        console.log(a/b)
        break;
    default:
        console.log("Do not recognise that operation")
        break;
}