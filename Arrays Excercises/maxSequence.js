function maxSequence(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < arr.length; index++) {
 
        if (index !== 0) {
            let currentNumber = Number(arr[index]);
            let previousNumber = Number(arr[index - 1]);

            if (currentNumber === previousNumber) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNumber;
                }
                
            } else {
                sequence = 1;
            }
        }
    }
    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`)

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])