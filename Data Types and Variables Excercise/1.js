function sumDigits(number) {

    let inputAsString = number.toString()
    let sum = 0;

    for (i = 0; i < inputAsString.length ; i++) {
        let currentDigit = Number(inputAsString[i]);
        sum += currentDigit

    }
    console.log(Number(sum))

}
sumDigits(245678)