//За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги. 
//Понеже Жоро предпочита да играе с приятели навън, 
//вашата задача е да му помогнете да изчисли колко часа на ден трябва да отделя, за да прочете необходимата литература

//1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
//2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
//3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function books(input){
    let numberPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let hoursNeeded = numberPages / pagesPerHour;
    let hoursNeededPerDay = hoursNeeded / numberOfDays;
    console.log(hoursNeededPerDay);
}
books(["212 ","20 ","2 "]);