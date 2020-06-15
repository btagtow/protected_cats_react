const backendURL = "http://localhost:3000";

const loginForm = document.querySelector(".login-form");
const getUsers = document.querySelector(".get-users");
const createCat = document.querySelector(".create-cat");

loginForm.addEventListener("submit", login);
getUsers.addEventListener("click", retrieveUsers);
createCat.addEventListener("submit", makeNewCat);

function makeNewCat(event) {
    event.preventDefault();
    
    const catFormData = new FormData(event.target);
    const name = catFormData.get("name");
    const color = catFormData.get("color");

    fetch(`${backendURL}/cats`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ localStorage.token }`
        },
        body: JSON.stringify({ cat: { name, color } })
    })
        .then(response => response.json())
        .then(console.log)

    event.target.reset();
}

function retrieveUsers() {
    fetch(`${backendURL}/users`, {
        headers: {
            "Authorization": `Bearer ${ localStorage.getItem("token") }`
        }
    })
        .then(response => response.json())
        .then(console.log)
}

function login(event) {
    event.preventDefault();

    const loginFormData = new FormData(event.target);
    const username = loginFormData.get("username");
    const password = loginFormData.get("password");

    const body = JSON.stringify({ username, password })
    // const body = JSON.stringify({ username: username, password: password })

    fetch(`${backendURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.token) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("user_id", result.user_id);
                localStorage.setItem("cats", result.cats);
                const successMessage = document.createElement("p");
                successMessage.textContent = "success!";
                document.body.append(successMessage);

                displayCats(result.cats);
            } else {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = result.message;
                document.body.append(errorMessage);
            }
        })

    event.target.reset();
}