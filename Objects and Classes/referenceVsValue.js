function ref() {
    //  Primitive => variables by value 
    // Arrays, Objects, Functions => variables by location


    let myObj = {
        age: 20,
        name: "george",
        arr: [1, 2, 3, 3, 3, 3, 3, 3, 4],




    }
    //  => always use "" to define a string in a JSON file.

    // How to make a deep copy of a obj into a JSON by making it a string by reference not value =>
    // breaks the reference in the location and memory => 
    // object = JSON.parse(JSON.stringify(myObject.))
    let object2 = JSON.parse(JSON.stringify(myObj));
    //  we can convert a JSON string into an Object using the JSON.parse(object) =>
    // let object = JSON.parse(myObject) <=

    // => this lets us add or remove entries from the original Object without changing the second or the opposite.
    myObj.test = "add new entry"
    console.log(myObj)
    // => take a look at the difference 
    console.log(object2)
    // we can convert an JSON into an Object by using the method .stringify
}
ref()

function convertAnObject(json) {
    // => transfer the JSON into an object using the .parse() method
    let person = JSON.parse(json);

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`)
    }
    // => to loop through an object we need to use Object.entries(object)
    // make sure the "O" in Object is Capital 
    // make sure to give the .entries method to take the variables of the Object as key:value

}
convertAnObject('{"name": "George", "age": 40, "town": "Sofia"}')

function convertAnJason(name, lastName, hairColor) {
    // put the variables in the function =
    // => create the object
    let object = {
        // => create the properties in the Object
        name,
        lastName,
        hairColor
    }
    // => transfer the object into an JSON using the .stringify() method
    let objectJSON = JSON.stringify(object)
    console.log(objectJSON)

}
convertAnJason('George', 'Jones', 'Brown')