// •	Процент на мазнините - цяло число в интервала [0…100]
// •	Процент на протеините - цяло число в интервала [0…100]
// •	Процент на въглехидратите - цяло число в интервала [0…100]
// •	Общ брой калории - цяло число в интервала [1000…15000]
// •	Процент на съдържанието на вода - цяло число в интервала [0…100]


function cats(input) {

    let percentFats = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let totalCarbs = Number(input[3]);
    let percentWater = Number(input[4]);

    let fatGrams = ((percentFats/100) * totalCarbs) / 9;
    let proteinGrams = (percentProtein/100) * totalCarbs / 4;
    let carbsGrams = (percentCarbs/100) * totalCarbs / 4;

    let totalWeight = fatGrams + proteinGrams + carbsGrams;
    let singleGramCalories = totalCarbs / totalWeight;
    let waterPercentage = (percentWater/100) * singleGramCalories;

    let totalWater = singleGramCalories - waterPercentage;
    console.log(totalWater.toFixed(4))


}
cats(["60",
"25",
"15",
"2500",
"60"])
