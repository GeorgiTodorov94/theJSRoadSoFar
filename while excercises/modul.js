// // •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// // •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
// // Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
// От конзолата се четат:
// •	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
// На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства: 
// цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]



function cash(input) {

    let cashSum = Number(input[0]);
    let index = 1;
    let pricePerItem = input[index];
    index++;
    let cashPayments = 0;
    let cardPayments = 0;
    let totalCashAmount = 0;
    let totalCardAmount = 0;
    let cardCashSum = 0;


    while (pricePerItem !== "End") {
        
        
        
        let currentSum = Number(pricePerItem);
        let currentPayment = index - 1;

        if (currentSum >= 100 && currentPayment % 2 === 1) {
            console.log("Error in transaction!");
        } else if (currentSum <= 100 && currentPayment % 2 === 1) {
            console.log("Product sold!")
            cashPayments++;
            totalCashAmount += currentSum;
        }
        else if (currentSum <= 10 && currentPayment % 2 === 0) {
            console.log("Error in transaction!")
        } else if (currentSum >= 10 && currentPayment % 2 === 0) {
            console.log("Product sold!")
            cardPayments++;
            totalCardAmount += currentSum;
        }

        


        cardCashSum = Number(totalCardAmount + totalCashAmount);
        pricePerItem = input[index];
        index++;
        
        if (pricePerItem === "End"){
            console.log("Failed to collect required money for charity.")
            break;
        }
        else if (pricePerItem !== "End" && cardCashSum >= cashSum){
            let averageCashPayments = totalCashAmount / cashPayments
            console.log(`Average CS: ${averageCashPayments.toFixed(2)}`);
            let averageCardPayments = totalCardAmount / cardPayments;
            console.log(`Average CC: ${averageCardPayments.toFixed(2)}`);
            break;
        }
    
    } 
    
    
}
cash(["500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317",
    "End"
])



// if (currentSum <= 10 && currentPayment % 2 === 0){
//     console.log()
// }



// //if (currentSum <= 10 && currentPayment % 2 === 0) {
//     console.log("Error in transaction!")
// } else {
//     console.log("Product sold!")
//     cardPayments++;
//     totalCardAmount += pricePerItem;
// }