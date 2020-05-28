const backendURL = "http://localhost:3000";

const loginForm = document.querySelector(".login-form");
const getUsers = document.querySelector(".get-users");

loginForm.addEventListener("submit", login);
getUsers.addEventListener("click", retrieveUsers);

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
            if (result.token) {
                localStorage.setItem("token", result.token);
                const successMessage = document.createElement("p");
                successMessage.textContent = "success!";
                document.body.append(successMessage);
            } else {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = result.message;
                document.body.append(errorMessage);
            }
        })
}