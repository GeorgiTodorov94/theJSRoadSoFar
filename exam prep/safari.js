// //Симона и Светлин ще ходят на почивка в Африка и искат да отидат на сафари. 
//Понеже за делничните дни вече имат планове, решават, че ще отидат събота или неделя.
// Напишете програма, която изчислява колко ще им струва ходенето на сафари и дали бюджетът им ще им стигне да отидат, 
//като имате предвид следното:
// •	Цената на един литър гориво е 2.10 лв.
// •	Цената за екскурзовод е 100лв.
// •	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%

// От конзолата се четат 3 реда:
// •	Бюджет – реално число в интервала [0.00… 10000.00]
// •	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
// •	Ден от седмицата – текст с възможности "Saturday" и "Sunday" 

function safari(input){

    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1])
    let day = input[2];

    let fuelPrice = fuelNeeded * 2.10;
    let totalPrice = fuelPrice + 100;

    if (day === 'Saturday'){
        totalPrice = 0.9 * totalPrice;
    } else (
        totalPrice = 0.8 * totalPrice
    )
    if (budget >= totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`)
    }
    
}
safari(["1000",
    "10",
    "Sunday"]);

