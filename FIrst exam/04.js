// Компютърната продажба се скалира на база рейтинг:
// •	Рейтинг 2 взима 0% от  възможните продажби.
// •	Рейтинг 3 взима 50% от възможните продажби.
// •	Рейтинг 4 взима 70% от възможните продажби.
// •	Рейтинг 5 взима 85% от възможните продажби.
// •	Рейтинг 6 взима 100% от възможните продажби.

// На първия ред:
// •	n - брой компютри - цяло число в интервала [1…10]
// На следващите n реда:
// •	Числото, представляващо възможните продажби и рейтинга - цяло число в интервала [32…306]

function firm(input) {


    let computerCount = Number(input[0]);
    let salesMade = 0;
    let totalRating = 0;
    let totalSales = 0;
    
    for (let i = 1; i <= computerCount; i++) {
        let currentComputer = Number(input[i]);
        let currentRating = currentComputer % 10;
        let currentSales = String(currentComputer).substring(0, 2);
        totalRating += currentRating;
        totalSales += currentSales;
        


        if (currentRating === 2) {

        } else if (currentRating === 3) {
            salesMade += 0.5 * currentSales;
        } else if (currentRating === 4) {
            salesMade += 0.7 * currentSales;
        } else if (currentRating === 5) {
            salesMade += 0.85 * currentSales;
        } else if (currentRating === 6){
            salesMade += currentSales;
        }

    }
    let averageRating = totalRating / computerCount;
    console.log(salesMade.toFixed(2));
    console.log(averageRating)
    


}
firm([
    "3",
    "103",
    "103",
    "103",
])