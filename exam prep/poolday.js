// От конзолата се четат 4 числа:
// •	Първи ред – брой на хората. Цяло число в интервала [1…100]
// •	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
// •	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00] 

function poolDay(input){

    let people = Number(input[0]);
    let feePerPerson = Number(input[1]);
    let pricePerLounger = Number(input[2]);
    let pricePerUmbrella = Number(input[3]);

    let totalFee = people * feePerPerson;

    let umbrellaCount = Math.ceil(people / 2);
    let loungerCount = Math.ceil(0.75 * people);
    let totalUmbrellaPrice = umbrellaCount * pricePerUmbrella;
    let totalLoungerPrice = loungerCount * pricePerLounger;
    let totalPrice = totalFee + totalLoungerPrice + totalUmbrellaPrice;

    console.log(`${totalPrice.toFixed(2)} lv.` )

}
poolDay(["21",
"5.50",
"4.40",
"6.20"]);
