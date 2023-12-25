function ages(age) {

    let person = "";

    if (age < 0){
        person = 'out of bounds'
    }
    else if (age >= 0 && age <= 2) {
        person = 'baby';

        
    } else if (age <= 13) {
        person = 'child';
    } else if (age <= 19) {
        person = 'teenager';
    } else if (age <= 65) {
        person = 'adult';
    } else if (age >= 66) {
        person = 'elder';
    } 
    console.log(person);
}
ages("-1")