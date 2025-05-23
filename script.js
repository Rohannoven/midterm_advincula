function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Only Rohan is the valid username and password
    if (username === "Rohan" && password === "Rohan") {
        window.location.href = "about.html";  // Redirect to About Us page
    } else {
        document.getElementById("error-msg").textContent = "Invalid username or password!";
    }

    return false;  // Prevent form submission
}
