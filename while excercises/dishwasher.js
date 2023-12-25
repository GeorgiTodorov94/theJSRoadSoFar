function dishwasher(input) {

    let bottlesCounts = Number(input[0]);
    let index = 1;
    let dishesCount = Number(input[index]);
    index++;

    let soapML = bottlesCounts * 750;
    let soapLeft = 0;
    let soapUsedForDishes = 0;
    let dishesCleaned = 0;
    let potsCleaned = 0;
    let currentClean = 0;
    let TotalDishes = 0;
    let soapUsedForPots = 0;
    let totalSoapUsed = 0;


    while (dishesCount !== "End") {
        
        
        dishesCleaned += Number(dishesCount);

        currentClean = index - 1;

        if (currentClean % 3 * 2 === 0) {
            soapUsedForPots += dishesCount * 15;

        } else if (currentClean % 2 === 0) {
            soapUsedForDishes += dishesCount * 5;

        }
        else  {
            soapUsedForDishes += dishesCount * 5;

        }
        totalSoapUsed = soapUsedForDishes + soapUsedForPots;

        soapLeft = soapML - totalSoapUsed;


        TotalDishes = soapUsedForDishes / 5;
        potsCleaned = soapUsedForPots / 15;

        dishesCount = input[index];
        index++;
        
        if (totalSoapUsed > soapML){ 
            break;
        }

        
    }
    
    if (soapML >= totalSoapUsed) {
        console.log("Detergent was enough!")
        console.log(`${TotalDishes} dishes and ${potsCleaned} pots were washed.`)
        console.log(`Leftover detergent ${soapLeft} ml.`)
    } else if (totalSoapUsed >= soapML) {
        let soapNeeded = totalSoapUsed - soapML;
        console.log(`Not enough detergent, ${soapNeeded} ml. more necessary!`)
    }
}
dishwasher(["2", "53", "65", "55", "25"])