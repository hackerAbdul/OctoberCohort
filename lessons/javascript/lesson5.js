//Functions
//return statements
//function parameters & arguments
//calling on functions
//purpose of functions


let myName = "Abdul"


function errorMessage(errorType){
    console.log("Error " + errorType)
}

// console.log("This is the initial " + myName)

// var newName = errorMessage();

// console.log("This is after it has been reassigned " + newName)

//myName = errorMessage() => someOne = "John" => return someOne to be accessible to the rest code outside the private function
//myName = "John"


var firstName = 2

var name = "abdul"

// function checkName(param){
    
// }


const checkName = () =>{
    let ans = false
    if(typeof param === "string"){
        ans = true
    }

    return ans
}


if(checkName(name) && (name.length<15)){
    if(name.toLowerCase() === "john" || name.toLowerCase() === "johnathan"){
        console.log("Welcome back John")
    }else{
        console.log("Sorry i do not recognise you")
    }
}else{
    errorMessage("Sorry invalid name")
}



if( checkName(firstName) && (firstName.length>=2 && firstName.length<15)){
    if(firstName.toLowerCase() === "john" || firstName.toLowerCase() === "james" || firstName.toLowerCase() === "jason"){
        console.log(`Welcome back ${firstName}`)
    }else{
        console.log("Sorry computer does not recognise you")
    }
}else{
    errorMessage("Sorry invalid name")
}