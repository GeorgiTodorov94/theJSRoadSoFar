function tipAmount(){
    let food = 20;
    let tipPercentage = 0.2;
    let tipAmount = food*tipPercentage;
    console.log(tipAmount);
}
tipAmount();

function multiplier(input){
    let numberX = Number(input[0]);
    let numberA = Number(input[1]);
    let resultB = numberX * numberA;
    console.log(resultB);
}
multiplier([1 , 2]);

function mySquare(input){
    let square = Number(input[0]);
    let dSquare = square * square;
    console.log(dSquare);
}
mySquare(["5"]);