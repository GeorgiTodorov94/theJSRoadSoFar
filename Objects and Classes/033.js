function convert(json) {

    let myObject = JSON.parse(json)

    for (const key in myObject) {
       console.log(`${key} : ${myObject[key]}`)
    }

}
convert(
    '{"name": "George", "age": 40, "town": "Sofia"}'
);