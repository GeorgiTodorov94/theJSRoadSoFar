//1.	Дължина в см 
//2.	Широчина в см 
//3.	Височина в см 
//4.	Процент  
//Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 

function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3] / 100);
    

    let volume = (length * width * height) / 1000;
    let volumeTaken = percentage * volume;
    let volumeLeft = volume - volumeTaken;
    console.log(volumeLeft);

}
fishTank(["85 ", "75 ", "47 ", "17 "])

