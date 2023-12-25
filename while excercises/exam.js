function exam(input) {

    let badGradesLimit = Number(input[0]);
    let index = 1;
    let problem = input[index];
    index++;
    let grade = input[index];
    index++;
    let lastProblem = "";
    let numberOfProblems = 0;
    let badGradesSum = 0;
    let badGrades = 0;
    let goodGrades = 0;
    let goodGradesSum = 0;

    while (problem !== "Enough") {

        let currentGrade = Number(grade);
        if (currentGrade <= 4) {
            numberOfProblems++;
            badGrades++;
            badGradesSum += currentGrade;
            lastProblem = problem;
        } else if (currentGrade > 4 && currentGrade <= 6) {
            numberOfProblems++;
            goodGrades++;
            goodGradesSum += currentGrade;
            lastProblem = problem;
        }
        if (badGradesLimit <= badGrades){
            break;
        }

        problem = input[index];
        index++;
        grade = input[index];
        index++;

    }
    if (badGradesLimit <= badGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`)
       

    } else {
        let totalScore = badGradesSum + goodGradesSum;
        let averageScore = totalScore / (badGrades + goodGrades);
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`)
    }


}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


