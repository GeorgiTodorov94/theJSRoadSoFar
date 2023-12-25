/*Напишете функция, която получава аргументи:плод 
(banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число)
 и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
 При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".  */

 function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        switch(fruit){
            case "banana": result = quantity * 2.50
            console.log(result.toFixed(2))
            break;
            case "apple": result = quantity * 1.20
            console.log(result.toFixed(2))
            break;
            case "orange": result = quantity * 0.85
            console.log(result.toFixed(2))
            break;
            case "grapefruit": result = quantity * 1.45
            console.log(result.toFixed(2))
            break;
            case "kiwi": result = quantity * 2.7
            console.log(result.toFixed(2))
            break;
            case "pineapple": result = quantity * 5.50
            console.log(result.toFixed(2))
            break;
            case "grapes": result = quantity * 3.85
            console.log(result.toFixed(2))
            break;
            default:console.log("error");
            
        }

  } else if (day === "Sunday" || day === "Saturday")
    {
        switch (fruit){
            case "banana": result = quantity * 2.7
            console.log(result.toFixed(2))
            break;
            case "apple": result = quantity * 1.25
            console.log(result.toFixed(2))
            break;
            case "orange": result = quantity * 0.90
            console.log(result.toFixed(2))
            break;
            case "grapefruit": result = quantity * 1.6
            console.log(result.toFixed(2))
            break;
            case "kiwi": result = quantity * 3
            console.log(result.toFixed(2))
            break;
            case "pineapple": result = quantity * 5.6
            console.log(result.toFixed(2))
            break;
            case "grapes": result = quantity * 4.20
            console.log(result.toFixed(2))
            break;
            
  } 
} else {
    console.log('error');
}
 }
 fruitShop(["apple", "Friday", "2"])
 