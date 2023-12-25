function vacation(input) {
    let index = 0;
    let sumNeededForVacation = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let consecutiveDays = 0;
    let daysCount = 0;

    while (availableMoney < sumNeededForVacation) {
        let action = input[index];
        index++;
        let moneySpend = Number(input[index]);
        index++;

        if (action === 'spend') {
            if (moneySpend > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= moneySpend;
            }
            consecutiveDays++;
            daysCount++;
        } else if (action === 'save') {

            availableMoney += moneySpend;
            daysCount++;
            consecutiveDays = 0;
        }
        if (consecutiveDays === 5) {
            console.log("You can't save the money.");
            console.log(`${consecutiveDays}`)
            break;
        }
        if (availableMoney >= sumNeededForVacation) {
            console.log(`You saved the money for ${daysCount} days.`);
            break;
        }
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

