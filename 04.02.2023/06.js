function maxNumber(input){
    let index = 0;
    let command = input[index];
    
    index++;

    let myMax = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let num = Number(command);
      
        command = input[index];
        index++;

        if (myMax < num){
            myMax = num;
        }
        command = input[index];
        index++;

    }
    console.log(myMax);



}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
