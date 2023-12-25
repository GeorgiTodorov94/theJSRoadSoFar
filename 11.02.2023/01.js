function clock(input) {
    for (let hours = 0; hours < 24; hours++) {
        
        for (let minutes = 0; minutes < 60; minutes++) {
            let buff = "";
        
            if (hours < 10){
                buff += "0" + hours;
                
            }
            
                else { buff += hours
                } 
                buff += ":"
                if (minutes < 10){
                    buff += "0" + minutes;
                } else { 
                    buff += minutes;
                }
        
                console.log(buff);
            }
            
        }
    }


clock();