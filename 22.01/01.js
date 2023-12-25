function cinema(input){
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    
    let places = rows * cols;
    let totalPrice = 0;

    if (projectionType === "Premiere") {
        totalPrice = places * 12;
        
    } else if (projectionType === "Normal") {
        totalPrice = places * 7.5;

    } else {
        totalPrice = places * 5;
    } console.log(`${totalPrice.toFixed(2)} leva`)
}
cinema(["Premiere", "10" , "12"]);