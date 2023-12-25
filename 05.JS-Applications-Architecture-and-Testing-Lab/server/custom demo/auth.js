const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    checkAuth()
})


export function checkAuth() {
    const token = sessionStorage.getItem("token");
    const userDiv = document.querySelector("#user");
    const guestDiv = document.querySelector("#guest");


    if (token !== null) {
        userDiv.style.display = "inline";
        guestDiv.style.display = "none";

    } else {
        userDiv.style.display = "none";
        guestDiv.style.display = "inline";

    }
}