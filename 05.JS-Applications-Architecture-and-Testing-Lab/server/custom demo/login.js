import { checkAuth } from "./auth.js";


export function loadLogin() {
    const loginPage = document.querySelector("#login");
    loginPage.style.display = "block";
    const url = new URL(window.location.href);
    url.pathname = "/";

    loginPage.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const password = formData.get("password");
        const email = formData.get("email");
        

        fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password, email })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                sessionStorage.setItem("token", data.accessToken);
                
                checkAuth();
            });
    });
    return 'login';
};
