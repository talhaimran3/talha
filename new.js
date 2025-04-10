// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     eat(){
//         console.log("eating");    
//     }
// }
// console.log(person.age , person.name);   
// const employ = {
//     calTax() {
//         console.log("tax 10%");
//     },
//     eat(eat) {
//         console.log(`eating ${eat}`);
//     }
// }
// const newEmploy = {
//     name: "John",
//     calTax() {
//         console.log("tax 20%");
//     }
// }
// newEmploy.__proto__ = employ;// we defined the prototype of newEmploy object and now newEmploy object can access the properties and methods of employ object
// newEmploy.calTax();
// newEmploy.eat("pizza");
//CLASS and INheritance
class Car {
    constructor(type) {
        this.type = type;
    }
    start(name) {
        console.log(`${name} started`);
    }
    stop(name) {
        console.log(`${name} stopped`);
    }
}
class BMW extends Car {
    constructor() {
        super();
        console.log("BMW constructor");

    }
    model(name) {
        console.log(`model is ${name}`);
    }
    color(name) {
        console.log(`color is ${name}`);
    }
}
let i8 = new BMW("german");
i8.color("black");


