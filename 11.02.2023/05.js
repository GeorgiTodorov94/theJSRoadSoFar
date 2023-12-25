function combo(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let flag = false;

    for (x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            counter++;
            if (x + y === magicNumber) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`)
                break;
            }

        }
        if (flag) {
            break;
        }
        if (!flag) {
            console.log(`${counter} combinations - neither equals ${magicNumber}`)
            break;
        }
    }



}
combo(["88", "888", "1000"]);