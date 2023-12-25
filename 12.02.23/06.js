function tickets(input) {

    let index = 0;
    let command = input[index];
    index++;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let spacesTaken = 0;


    while (command !== 'Finish') {
        let movieTitle = command;
        let freeSpaces = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;
        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'student') {
                studentTickets++;

            } else if (ticketType === 'standard') {
                standardTickets++;
            } else {
                kidTickets++;
            }
            spacesTaken++;
        
            if (spacesTaken === freeSpaces) {
                break;
            }
            command1 = input[index];
            index++;
            
        }
        let percentFull = (spacesTaken / freeSpaces)*100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
    

}
tickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
