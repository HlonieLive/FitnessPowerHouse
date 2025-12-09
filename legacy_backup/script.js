document.getElementById("login-form").addEventListener("submit", function(event) { event.preventDefault();
    
    // Prevent form from submitting
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Authentication check
    if (username === "admin" && password === "password123") { alert("Login successful!");
        window.location.href = "index.html";
        // Redirect to homepage 
        } else { alert("Invalid credentials. Please try again.");
        } });