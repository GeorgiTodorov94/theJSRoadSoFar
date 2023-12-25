// 1.	Брой танцьори – цяло число в интервала [1 … 10]
// 2.	Брой точки – реално число в интервала [1.00 … 10000.00]
// 3.	Сезон –  текст със следните възможности - "summer" или "winter"
// 4.	Място – текст със следните възможности - "Bulgaria" или "Abroad"
//  •	Ако състезанието се е провело в България паричната награда се изчислява като се умножат точките по броя участниците.
//  •	Ако се е провело в чужбина – се умножават броя участници по броя точки и към тях се добавя 50% от получената сума. 

function final(input){
    let dancerCount = Number(input[0]);
    let pointsCount = Number(input[1]);
    let season = input[2];
    let destination = input[3];
    
   

    if(destination === 'Bulgaria'){
        let totalPrizeMoney = dancerCount * pointsCount;
        switch (season){
            case "summer": totalPrizeMoney = totalPrizeMoney - (0.05 * totalPrizeMoney);
            break;
            case 'winter': totalPrizeMoney = totalPrizeMoney - (0.08 * totalPrizeMoney);
            break;
        }
        let charity = 0.75 * totalPrizeMoney;
        let moneyLeft = totalPrizeMoney - charity;
        let moneyPerDancer = moneyLeft / dancerCount;
        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
    } else if (destination === "Abroad"){
        let prizeMoney = (dancerCount * pointsCount);
        let totalPrizeMoney = prizeMoney + (0.5 * prizeMoney);
        switch (season){
            case 'summer': totalPrizeMoney = totalPrizeMoney - (0.10 * totalPrizeMoney);
            break;
            case 'winter': totalPrizeMoney = totalPrizeMoney - (0.15 * totalPrizeMoney);
            break;
        }    
        let charity = 0.75 * totalPrizeMoney;
        let moneyLeft = totalPrizeMoney - charity;
        let moneyPerDancer = moneyLeft / dancerCount;
        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
    }
}
final(["1",
"89.5",
"summer",
"Abroad"])


