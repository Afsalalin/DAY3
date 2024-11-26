
const predefinedUsername = "admin";
const predefinedPassword = "password123";


document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    
    if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
        
        window.location.href="loginsuccess.html"; 
    } else 
    {
        
        alert("Invalid username or password. Please try again.");
    }
});

