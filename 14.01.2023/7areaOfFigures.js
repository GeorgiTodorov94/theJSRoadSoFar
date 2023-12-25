function areaOfFigures(input){
    let type = input[0];

    if (type === 'square') {
        let side = Number(input[1]);
        let result = side * side;
        console.log(result.toFixed(3));
    } else if (type === 'rectangle') {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let resultA = sideA * sideB;
        console.log(resultA.toFixed(3)); 
    } else if (type === 'circle'){
        let r = Number(input[1]);
        let resultB = Math.PI * Math.pow(r,2);
        console.log(resultB.toFixed(3));
    } else { 
        let side = Number(input[1]);
        let h = Number(input[2]);
        let resultC = side * h / 2;
        console.log(resultC.toFixed(3))
    }
}

areaOfFigures(['triangle', "4.5" , "20"]);
