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

async function greet() {
//     console.log("Hello...");
//     await promise(2000);
//     console.log("World!");
// }
// greet();
// async function sequentialTasks() {
//     const task1 = await delay(1000);
//     console.log("Task 1 done");
//     const task2 = await delay(1000);
//     console.log("Task 2 done");
//   }
//   sequentialTasks(); 

// async function pizzaOrder() {
//   try {
//     const promise = await fetch('https://pizza-api.com/pepperoni');
//     if (!promise.ok) {
//       throw new Error("cant fetch");
//     }
//     const pizza = await promise.json();
//     console.log(pizza.pepperoni);
//     console.log(pizza.price);
//   }
//   catch (error) {
//     console.log("error");
//   }
//   finally {
//     console.log("finally");
//   }
// }
// pizzaOrder();
async function getPizza() {
  try {
    // 1. Fetch pizza data (returns a Promise)
    
    const response = await fetch('https://pizza-api.com/orders');

    
    // 2. Check if request succeeded
    if (!response.ok) throw new Error('Oven broken!');
    
    // 3. Convert JSON → JavaScript object
    const pizza = await response.json();
    
    // Now use the data!
// ['pepperoni', 'cheese']
    console.log(pizza.price); // 12.99
    
  } catch (error) {
    console.log("Failed to get pizza:", error);
  }
}
getPizza();
