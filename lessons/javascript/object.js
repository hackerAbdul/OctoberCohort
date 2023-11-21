// var person1 = "john"
// var person2 = "jane"

// age1 = 45
// age2 = 56

function Car(name, model, type, colour, engineSize, drive){
    this.name = name
    this.model = model
    this.type = type
    this.colour = colour
    this.engineSize = engineSize
    this.drive = drive
    this.sales = function(){
        return this.name + " " + this.model + " FOR ONLY £150,000"
    }
}

let audiCar = new Car("Audi", "Q3", "Sline", "Grey", 2.0, "4 wheel drive")
let bmw = new Car("bmw", "150", "msport", "white", 2.0, "front wheel drive")

var array = [audiCar,bmw]

console.log(array)