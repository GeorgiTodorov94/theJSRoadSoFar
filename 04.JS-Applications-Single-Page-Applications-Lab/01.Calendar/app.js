import {loadYearsView} from "./yearsView.js";
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    if (section.id === "years") {
        section.style.display = 'block';
        return;
    }
    section.style.display = 'none';


});

loadYearsView()
