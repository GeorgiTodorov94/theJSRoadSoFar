function solve(input){

    let name = input[0];
    console.log("Hello, " + name);
}
solve(["George" + "!"]);

function myName(input){
    let name = input[0];
    console.log("Hello, " + name + "!")
}
myName(["George"]);

function realName(input){
    let myName = input[0];
    console.log(`Hello, ${myName}!`);
}
realName(["George"])