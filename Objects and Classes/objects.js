let myObj = {
    name: "Peter",
    age: 30
}

myObj.age = 30;
let key = 'age'
console.log(myObj.age)
console.log(myObj['age'])
console.log(myObj[key])


function solve(key) {
    let myObjTwo = {
        name: "Todor"
    }
    myObjTwo['hairColor'] = 'black'
    myObjTwo.hairColor = 'black'
    myObjTwo.age = 30
    console.log(myObjTwo[key])
    console.table(myObjTwo)
}
solve('age');

function one(firstName, secondName, age) {
    let myThree = {
        firstName: `${firstName}`,
        secondName: `${secondName}`,
        age: `${age}`,
        //  => another syntaxes
        firstName,
        secondName,
        age,
        sayHello: function () {
            console.log('Hello')
        },
        //  => different syntax to call a method  without a function in an object =>
        sayHello() {
            console.log('Hello')
        },
        // => can take value and properties in the following way => with (name) ... => " Hello" + name 
        sayHello(name) {
            console.log('Hello ' + name)
        }
    }
    return myThree
}
console.log(one("Peter", "Pan", "20"))
console.log(" -----------");
console.log(one("George", "Smith", "18"))
