// Входът се чете от конзолата и съдържа точно 4 реда:
//1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
//2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
//3.	Количество разредител (в литри) - цяло число в интервала [1…30]
//4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
//•	Предпазен найлон - 1.50 лв. за кв. метър
//•	Боя - 14.50 лв. за литър
//•	Разредител за боя - 5.00 лв. за литър

function repainting(input){
    let naylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let hoursNeeded = Number(input[3]);


    let naylonPrice = (naylonQuantity + 2) * 1.50;
    let paintPrice = (paintQuantity + (0.1 * paintQuantity)) * 14.50;
    let thinnerPrice = thinnerQuantity * 5;
    let totalPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;
    let paymentPerHour = (0.3 * totalPrice);
    let totalPayment = paymentPerHour * hoursNeeded;
    let finalPrice = totalPrice + totalPayment;
    console.log(finalPrice);

}
repainting(["10 ","11 ","4 ","8 "]
)