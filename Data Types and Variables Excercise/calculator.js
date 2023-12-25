function calculator(firstNum, key, secondNum) {

    let result = 0;

    switch (key) {
        case '+': result = firstNum + secondNum;
            break;
        case '-': result = firstNum - secondNum;
            break;
        case '*': result = firstNum * secondNum;
            break;
        case '/': result = firstNum / secondNum;
            break;


    }
    console.log(result.toFixed(2));

}
calculator(5, "+", 10)
