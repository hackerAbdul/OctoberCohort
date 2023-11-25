const body = document.body
const fNameEl = document.getElementById('fname')
const lNameEl = document.getElementById('lname')
const emailEl = document.getElementById('email')
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    var checkFName = checkName(fNameEl.value, fNameEl)
    var checkLName = checkName(lNameEl.value, lNameEl)
    var checkEmail = checkEmailEl(emailEl.value, emailEl)

    if (checkFName && checkLName && checkEmail){
        alert('Login Successful')
        form.classList.add('dontDisplay')
        const h1 = document.querySelector('h1')
        h1.innerText = `Welcome Back ${fNameEl.value}`
    }

})

function checkEmailEl(input,element){
    let ans = false
    let passes = false

    if (input.length>0){
        ans = true
    }else{
        errorMessage('Does not meet the length requirement',element)
    }

    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regex = reg.test(input)

    if(ans===true & regex===true){
        passes = true
        successMessage(element)
    }else{
        errorMessage("Not Valid", element)
    }

    return passes
}

function checkName(input,element){
    let ans = false
    let passes = false

    if (input.length>0 & input.length<12){
        console.log("Passes")
        ans = true
    }else{
        errorMessage('Does not meet the length requirement',element)
    }

    var regex = checkString(input)
    console.log(regex)

    if(ans===true & regex===true){
        passes = true
        successMessage(element)
    }else{
        errorMessage("Not Valid", element)
    }


    return passes
}

function checkString(input){
    const reg = /[a-zA-Z]/
    return reg.test(input)
}

function errorMessage(text,element){
    element.style.borderColor = 'red'
    // const message = document.querySelector('small')
    // message.after(emailEl)
    // message.innerText = text
    // message.style.color = 'red'
}

function successMessage(element){
    element.style.borderColor = 'green'
}