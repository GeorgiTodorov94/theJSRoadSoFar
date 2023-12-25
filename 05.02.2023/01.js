function library(input){

    let index = 0;
    let book = input[index];
    index++;
    let command = input[index];
    index++;
    let bookC = 0;

    while(command !== "No More Books"){
        if ( command === book){
            console.log(`You checked ${bookC} books and found it.`);
            break;
        }
        bookC++;
        command = input[index];
        index++;
    }
    if( command === "No More Books"){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookC} books.`)
    }

}

library(["Troy",
"Stronger",
"Life Style",
"Troy"]);
