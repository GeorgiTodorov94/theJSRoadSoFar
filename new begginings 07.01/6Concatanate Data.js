//Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 
// "You are <firstName> <lastName>, a <age>-years old person from <town>."
// 
function concatenateData(input){
    let name = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${city}.`)
}
concatenateData(["George", "Todorov", "24", "Ruse"]);