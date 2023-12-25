import { loadLogin } from "./login.js";
import { checkAuth } from "./auth.js";
import { loadCreate } from "./create.js";
import { loadRegister } from "./register.js";


checkAuth();
let lastLoaded = loadLogin();

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {

    if (e.target.tagName == "A") {
        e.preventDefault();
        const lastLoadedElement = document.getElementById(lastLoaded);
        lastLoadedElement.style.display = "none";

        const url = new URL(e.target.href);
        if (url.pathname == "/create") {
            lastLoaded = loadCreate();
        } else if (url.pathname == "/register") {
            lastLoaded = loadRegister();
        } else if (url.pathname == "/login") {
            lastLoaded = loadLogin();
        }
    };
});


