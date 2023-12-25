function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break;
        case "Winter":
            rentPrice = 2600;
            break;
    }
    if (fisherCount <= 6) {
        rentPrice *= 0.9;
    } else if (fisherCount <= 11) {
        rentPrice *= 0.85;
    } else {
        rentPrice *= 0.75;
    }
    if (season !== "Autumn" && fisherCount % 2 === 0) {
        rentPrice *= 0.95;
    }
    if (budget >= rentPrice){
        let leftSum = budget - rentPrice;
        console.log(`Yes! You have ${leftSum.toFixed(2)} leva left.`)
    } else {
        let sumNeeded = rentPrice - budget;
        console.log(`Not enough money! You need ${sumNeeded.toFixed(2)} leva.`)
    }
}
boat(["3000", "Summer", "11"]);