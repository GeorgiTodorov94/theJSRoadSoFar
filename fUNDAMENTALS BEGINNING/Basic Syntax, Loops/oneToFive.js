function printOut(num) {

    for (let i = num; i >= 1; i--) {
        console.log(i)
    }

    let i = num;
    while (i >= 1) {
        console.log(i)
        i--;
    }
}
printOut(5)