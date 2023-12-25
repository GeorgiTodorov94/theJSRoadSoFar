function amazingNumbers(num) {

    let numAsText = num.toString();

    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        sum += Number(numAsText[i])
    }
    let sumAsString = sum.toString();
    let isAmazing = false;
    for (let i = 0; i < sum.length; i++) {
        if ((Number(sumAsString[i])) === 9) {
            isAmazing = "True"
            break;
        } 

    }

    console.log(`${num} Amazing? ${isAmazing}`)

}
amazingNumbers(1116)
