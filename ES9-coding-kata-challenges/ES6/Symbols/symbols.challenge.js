const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    
    set carColor(color) {
        this[CARCOLOR]=color;
    }
    
    set carMake(make) {
        this[CARMAKE]=make;
    }
    
    set carModel(model) {
        this[CARMODEL]=model;
    }

    get carColor(){
        return this[CARCOLOR];
    }

    get carMake(){
        return this[CARMAKE];
    }

    get carModel(){
        return this[CARMODEL];
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `blue`;
console.log(myCar.color);
console.log(myCar);

myCar.carColor = `Black`;            //calls set carColor(color)
myCar.carMake = `Jaguar`;            //calls set carMake(make)
myCar.carModel = `Land Rover`;       //calls set carModel(model)

console.log("Color : ",myCar.carColor);  //calls get carColor()
console.log("Make : ",myCar.carMake);    //calls get carMake()
console.log("Model : ",myCar.carModel);  //calls get carModel()

console.log(myCar);
// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
