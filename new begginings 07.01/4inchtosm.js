// Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. 
//За целта умножете инчовете по 2.54 (1 инч = 2.54 сантиметра).
//
function inch(input){
    let myInch = Number(input[0]);
    let sntm = myInch * 2.54;
    console.log(sntm);
}
inch(["5"])