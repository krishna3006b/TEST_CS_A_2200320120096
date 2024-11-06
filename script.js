function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    if(password.length>3){
        if (username === "admin" && password === "password") {
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid ID or Password!";
        }
    }else {
        errorMessage.textContent = "Password Length should be more than 3";
    }
   
}
