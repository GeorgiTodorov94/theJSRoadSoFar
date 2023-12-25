function fitness(input) {

    let visitors = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeCount = 0;
    let barCount = 0;

    for (let i = 1; i <= visitors; i++) {
        let type = input[i];

        if (type === 'Back') {
            backCount++;
        } else if (type === 'Chest') {
            chestCount++;
        } else if (type === 'Legs') {
            legsCount++;
        } else if (type === 'Abs') {
            absCount++;
        } else if (type === 'Protein shake') {
            shakeCount++
        } else if ( type === 'Protein bar'){
            barCount++;
        }
    }
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barCount} - protein bar`);
    let totalWorkOuts = backCount + chestCount + legsCount + absCount;
    let totalProtein = shakeCount + barCount;

    let workOutsPercent = (totalWorkOuts / visitors) * 100;
    let proteinPercent = (totalProtein / visitors) * 100;
    console.log(`${workOutsPercent.toFixed(2)}% - work out`);
    console.log(`${proteinPercent.toFixed(2)}% - protein`);
}
fitness(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"]);

