function one(firstName, secondName, age) {
    let myThree = {
        
        firstName,
        secondName,
        age,
    }
    // return Object.keys(myThree) => returns the keys in the Object
    // return Object.values(myThree) => returns the Values of the Keys in the Object
    // return Object.entries(myThree) =? returns The entries in the Object
    for (let key of Object.keys(myThree)){
        // console.log(myThree[key]) => returns the keys
        console.log(`${key} -> ${myThree[key]}`) // => returns the key + the value of the Key in the Object
    }
}
one("Peter", "Pan", "20")
console.log(" -----------");
one("George", "Smith", "18")