function steps(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalSteps = 0;

    while (command !== 'Going home') {
        let steps = Number(command);

        totalSteps += steps;

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }
    if (command === 'Going home') {
        let steps = Number(input[index]);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsMore} steps over the goal!`);
        } else {
            let stepsNeeded = 10000 - totalSteps
            console.log(`${stepsNeeded} more steps to reach goal.`)
        }

    }

}
steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])




