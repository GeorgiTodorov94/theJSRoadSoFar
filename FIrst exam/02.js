// •	Любовно послание - 0.60 лв.
// •	Восъчна роза - 7.20 лв.
// •	Ключодържател - 3.60 лв.
// •	Карикатура - 18.20 лв.
// •	Късмет изненада - 22 лв.



function Michaela(input) {

    let partyPrice = Number(input[0]);
    let loveLettersCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyCounts = Number(input[3]);
    let paintingsCount = Number(input[4]);
    let surprisesCount = Number(input[5]);
    let totalMoneyNeeded = 0;

    let totalSumOfArt = loveLettersCount * 0.60 + rosesCount * 7.20 + keyCounts * 3.60 + paintingsCount * 18.20 + surprisesCount * 22;

    let totalArtCount = loveLettersCount + rosesCount + keyCounts + paintingsCount + surprisesCount;

    if (totalArtCount >= 25) {
        let discount = 0.35 * totalSumOfArt;
        let sumAfterDiscount = totalSumOfArt - discount;
        let expense = sumAfterDiscount * 0.10;
        let profit = sumAfterDiscount - expense;
        let totalMoneyNeeded = profit - partyPrice;
        if (totalMoneyNeeded >= partyPrice) {
            console.log(`Yes! ${totalMoneyNeeded.toFixed(2)} lv left.`);
        }


        } else if (totalMoneyNeeded < partyPrice) {
            let expense = totalSumOfArt * 0.1;
            let profit = totalSumOfArt - expense;
            let moneyNeeded = profit - partyPrice;

            console.log(`Not enough money! ${Math.abs(moneyNeeded.toFixed(2))} lv needed.`);

        } 

    }




Michaela(["40.8",
"20",
"25",
"30",
"50",
"10"])






