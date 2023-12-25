//•	Пилешко меню –  10.35 лв. 
//•	Меню с риба – 12.40 лв. 
//•	Вегетарианско меню  – 8.15 лв. 

//•	Брой пилешки менюта 
//•	Брой менюта с риба 
//•	Брой вегетариански менюта 

// Да се отпечата на конзолата един ред:  "{цена на поръчката}"
//Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
//Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
//Цената на доставка е 2.50 лв и се начислява най-накрая.  


function delivery(input){
    let amountChicken = Number(input[0]);
    let amountFish = Number(input[1]);
    let amountVegan = Number(input[2]);
    let priceChicken = amountChicken * 10.35;
    let priceFish = amountFish * 12.4;
    let priceVegan = amountVegan * 8.15;
    let priceMenus = priceChicken + priceFish + priceVegan;
    let priceDesert = priceMenus - (0.8 * priceMenus);
    let totalPrice = priceDesert + priceMenus + 2.5;
    console.log(totalPrice);

}

delivery(["2 ", "4 ", "3 "])
