

// setTimeout(quickGreet, 5000);
// const secondGreet =()=>{
//     console.log("Second Hello World!");
// }
// setTimeout(secondGreet, 2000);
// const person = {};
// person.name = "John";
// person.age = 30;
// person.city = "New York";
// console.log(person);

// const person2= new Object();
// person2.name = "dave";
// person2.age = 25;
// person2.city = "London";
// console.log(person2);

// const person3 = {
//     name: "Jane",
//     age: 28,
//     city: "Paris",
//     myFunc: function(){
//     return `${this.name} age is ${this.age}`;
//     }
// };
// console.log(person3{myFunc, city}); 
class myClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }   
}
class myClass2 {
    constructor(city,education){
        this.city=city;
        this.education=education;
    }
}
const person4 = new myClass("John", 30);
const person4Details = new myClass2("New York", "Bachelors");
const person5 = new myClass("Jane", 28);

console.log(person4Details.city);

function getData(){
    
return new Promise( (resolve,reject) => {
    setTimeout(() => {
        const data = {name:"john", age: 30};
        const isSuccess=true;
if (isSuccess){
resolve(data);
}
else{
reject("failure");
}
        }, 2000);
    });
}
getData()
    .then((data)=> {
        console.log("data fetched", data);
    })

    .catch((error)=> {
        console.log("error",error);
});
    // .then((data) => {
    //     console.log("Data fetched:", data); // Success handler
    // })
    // .catch((error) => {
    //     console.error("Error:", error); // Error handler
    // });


