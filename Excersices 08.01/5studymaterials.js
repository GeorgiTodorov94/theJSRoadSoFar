//Учебната година вече е започнала и отговорничката на 10Б клас - 
//Ани трябва да купи определен брой пакетчета с химикали,
//пакетчета с маркери, както и препарат за почистване на дъска. 
//Тя е редовна клиентка на една книжарница, затова има намаление за нея,
//което представлява някакъв процент от общата сума. Напишете програма, 
//която изчислява колко пари ще трябва да събере Ани, за да плати сметката, 
//като имате предвид следния ценоразпис: 

//•	Пакет химикали - 5.80 лв. 
//•	Пакет маркери - 7.20 лв. 
//•	Препарат - 1.20 лв (за литър)
//От конзолата се четат 4 числа:
//•	Брой пакети химикали - цяло число в интервала [0...100]
//•	Брой пакети маркери - цяло число в интервала [0...100]
//•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
//•	Процент намаление - цяло число в интервала [0...100]


function studyMaterials(input){
   let packPencils = Number(input[0]);
   let packMarkers = Number(input[1]);
   let litres = Number(input[2]);
   let discount = Number(input[3])/100;
   let pricePencils = packPencils * 5.8;
   let priceMarkers = packMarkers * 7.2;
   let priceLitres = litres * 1.2;
   let totalPrice = pricePencils + priceMarkers + priceLitres;
   let finalPrice = totalPrice - (discount * totalPrice);
   console.log(finalPrice)
}
studyMaterials(["2", " 3" , "4" , "25"]);