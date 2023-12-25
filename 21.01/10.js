function isValid(input){
    let num = Number(input[0]);
    let valid = num >= 100 && num <= 200;
    if(!valid && num !== 0){
        console.log("invalid")
    }

}
isValid(["0"])