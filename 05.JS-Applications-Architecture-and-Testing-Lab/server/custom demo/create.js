const createView = document.querySelectorAll('#create')[1]

export function loadCreate() {
    createView.style.display = 'block';
    console.log(createView)
    const form = createView.querySelector("form");
    console.log(form)

    form.addEventListener("submit", async (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.ingredients = data.ingredients.split('\n')
        data.steps = data.steps.split('\n');

        fetchRecipes(data)
            .then(() => {
                alert('Recipe created successfully');
            })


    });
}

function fetchRecipes(data) {
    return fetch('http://localhost:3030/data/recipes', {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            // window.location.href = "./create.html"
            return data;

        })


}