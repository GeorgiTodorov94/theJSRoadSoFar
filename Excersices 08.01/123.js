function depositCalculator(input){
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12
     //1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
     //2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
     //3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
   let depositedSum = Number(input[0]);
   let monthlyDeposit = Number(input[1]);
   let yearlyPercentage = Number(input[2]);
   let yearlyPercentageDecimal = yearlyPercentage / 100;
   let finalSum = depositedSum + monthlyDeposit * ((depositedSum * yearlyPercentageDecimal) / 12);
   console.log(finalSum);
 }
 depositCalculator(["200" , "3" , "5.7"]);