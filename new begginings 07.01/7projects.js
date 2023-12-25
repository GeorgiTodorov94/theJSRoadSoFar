//Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
//за да изготви проектите на няколко строителни обекта. 
//Изготвянето на един проект отнема три часа.

// 1.	Името на архитекта - текст
// 2.	Брой на проектите, които трябва да изготви 
// •	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."


function projects(input){
    let name = input[0];
    let projects = input[1];
    let hoursPerProject = 3;
    let totalProjects = projects * hoursPerProject;
    let hoursNeeded = totalProjects / hoursPerProject;
    console.log(`The architect ${name} will need ${totalProjects} hours to complete ${hoursNeeded} project/s. `);
}
projects(["George" , "4"]);