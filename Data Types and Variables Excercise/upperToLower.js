function upper(input) {
    
    let caseResult = '';

    if(input === input.toUpperCase()){
        caseResult = 'upper-case'
    } else {
        caseResult = 'lower-case'
    }
    console.log(caseResult)
}
upper("A")