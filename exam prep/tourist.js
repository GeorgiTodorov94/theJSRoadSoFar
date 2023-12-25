// 1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
// 2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
// 3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
// 4.	Дни за престой - цяло число в интервала [1 … 10000]


function tourist(input) {

    let cityName = input[0];
    let packetName = input[1];
    let vipStatus = input[2];
    let days = Number(input[3]);
    let totalPrice = 0;

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }

    if (days > 7) {
        days -= 1;
    }
    switch (cityName) {
        case 'Bansko':
        case "Borovets":
            if (packetName === "withEquipment") {
                totalPrice = days * 100;
                if (vipStatus === 'yes') {
                    totalPrice *= 0.9;
                }
            } else if (packetName === "noEquipment") {
                totalPrice = days * 80;
                if (vipStatus === 'yes') {
                    totalPrice *= 0.95;
                } 
                }else {
                    console.log("Invalid input!");
                    return;
            }
            break;
        case 'Varna':
        case "Burgas":
            if (packetName === 'withBreakfast') {
                totalPrice = days * 130;
                if (vipStatus === 'yes') {
                    totalPrice *= 0.88;
                } else if (packetName === 'noBreakfast') {
                    totalPrice = days * 0.93;
                } 
                } else {
                    console.log("Invalid input!");
                    return;
            }
            break;
        default:
            console.log("Invalid input!");
            return;

    }
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
}
tourist(["Varna",
"withBreakfast",
"yes",
"6"])



