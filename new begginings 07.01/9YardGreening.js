//Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, 
//като по този начин създаде уютна обстановка и комфорт на гостите си. За целта е наела фирма.
//Напишете програма, която изчислява необходимате сума, които Божидара ще трябва да заплати на фирмата изпълнител на проекта. 
//Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям, 
//фирмата изпълнител предлага 18% отстъпка от крайната цена.

//1.	Кв. метри, които ще бъдат озеленени 
//На конзолата се отпечатват два реда:
//•	"The final price is: {крайна цена на услугата} lv."
//•	"The discount is: {отстъпка} lv."

function yardGreening(input){
    let yards = Number(input[0]);
    let price = yards * 7.61;
    let discount = 0.18 * price;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])