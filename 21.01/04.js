function sex(input){
    let age = Number(input[0]);
    let gender = input[1];
    if (age >= 16) {
        if (gender === "f") {
            console.log("Ms.");
            
        } else {
            console.log("Mr.");
        }
    } else {
        if (gender === "f") {
            console.log("Miss");
        } else { 
            console.log("Master");
        }
    }

}
sex(["10" , "f"])