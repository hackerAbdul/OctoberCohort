const body = document.body
const btn = document.querySelector('button')

btn.addEventListener('click', function(){

    var list = document.querySelector('ul')
    const newItem = document.querySelector('input')

    var array = []
    
    for(let i=0; i<list.children.length;i++){
        array.push(list.children[i].innerText)
    }

    if(array.includes(newItem.value.trim())){
        alert("item in the list")
    }else{
        console.log(newItem.value)
        const newCar = document.createElement('li')
        newCar.innerText = newItem.value
        list.append(newCar)
    }

})