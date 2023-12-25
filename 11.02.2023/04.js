function solve(input) {

    for (let x = 1; x <= 49; x++) {
        let isFinish = false;
        for (let y = 1; y <= 49; y++){
            if ( y === 15 && x === 3){
                isFinish = true;
                break;
            }
            console.log(` x => ${x}, y => ${y}`)
        }
        if (isFinish) {
            break;
            
        } 
    }
    
        

}
solve();
