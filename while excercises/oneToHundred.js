function one(input) {
    
    let daysCount = Number(input[0]);
    let totalFood = Number(input[1]);
    let index = 2;
    let foodEatenByDog = Number(input[index]);
    index++;
    let foodEatenByCat = Number(input[index]);
    index++;
    let biscuits = 0;
    let totalFoodEaten = 0;

    for (let i = daysCount; i <= daysCount; i++){
        let currentDay = Number(input[i]);

        if( currentDay % 3 * 2 === 0){
            biscuits = 0.1 * totalFoodEaten;
        }

        if (currentDay % 2 === 1){
            totalFoodEaten -= totalFood - (foodEatenByCat + foodEatenByDog);
        } else if ( currentDay % 2 === 0){

        }
    }
    

}
one((["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
);