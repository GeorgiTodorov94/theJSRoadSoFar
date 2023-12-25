function solve(input){

    for (let x = 1; x <= 10; x++){
        for ( let y = 1; y <= 10; y++){
            for (let z = 1; z <= 10; z++){
                if(x !== y && x !== z && y !== z ) {
                    console.log(` ${x}:${y}:${z}`);
                }
            }
        }
    }
}
solve();