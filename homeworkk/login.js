const formEl = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Username or password is incorrect");
        }
        return res.json();
    })
    .then(data => {
        localStorage.setItem("access_token", data.token);
        window.location.href = "admin.html";
    })
    .catch(err => {
        alert(err.message);
    });
});