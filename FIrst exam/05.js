function haircut(input) {

    let incomeGoal = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let hairStyle = input[index];
    index++;

    let totalSum = 0;


    while (command !== 'closed' || totalSum >= incomeGoal) {
        
        
        if (hairStyle === 'ladies') {
            totalSum += 20;

        } else if (hairStyle === 'kids') {
            totalSum += 10;


        } else if (hairStyle === 'touch up') {
            totalSum += 20;


        } else if (hairStyle === 'full color') {
            totalSum += 30;


        } else if (hairStyle === 'mens') {
            totalSum += 15;
        }

        

        command = input[index];
        index++;
        hairStyle = input[index];
        index++;

        
        
    }
    if (totalSum >= incomeGoal) {
        console.log(`You have reached your target for the day!`)
    } else if (totalSum < incomeGoal) {
        let moneyNeeded = incomeGoal - totalSum;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${totalSum}lv.`);
    } 
    


}



haircut(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])
