// class name must always start with a Capital Letter =>
class Student {
    // => the class is simply a template to create an Object 
    // => with clear properties and functionality 
    // => constructor function is necessary 
    // => constructor function can not be called out 

    constructor(name, grade) {
        this.name = name;
        this.grade = grade
        // => this keyword is used to set a property of the object by given value


    }
    speak() {
        console.log(`hello ${this.name}`)
    }
}
let myStudent = new Student('Todor', 6.00);
// => we can add properties to the class by using the Object.property = 30 => as follows called (run time)
myStudent.age = 30
// => we can use a class to create an object 
let newMyStudent = new Student('Pesho', 3.00)

console.log(myStudent)
// => call the speak function with the same formula as the objects with .nameOfFunction
myStudent.speak()
// => we can call a property by using the same formula as the classes with .nameOfProperty
// console.log(myStudent.grade)

console.log(newMyStudent)
newMyStudent.speak()


function dte(){

    let obj = {
        name: "todor",
        age: 30,

    }
    // can delete a property from an Object with delete => 
    //delete obj.age
    console.log(obj.hasOwnProperty("name"))
}
dte()