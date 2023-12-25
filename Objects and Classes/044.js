function convertAgain(name, lastName, hairColor){


    let person = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(person))

}
convertAgain(
    'George', 'Jones','Brown')