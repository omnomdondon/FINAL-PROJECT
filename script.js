function validateLoginForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    return true;
}

function validateRegistrationForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;

    if (username == "") {
        alert("Please enter a username.");
        return false;
    }
    if (password == "") {
        alert("Please enter a password.");
        return false;
    }
    if (confirmPassword == "") {
        alert("Please confirm your password.");
        return false;
    }
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function validateWelcomePage() {
    var isLoggedIn = true; /* Your logic to check if user is logged in */
    if (!isLoggedIn) {
        alert("Please login first.");
        // Redirect the user to the login page if not logged in
        window.location.href = "SignIN\index.html";
        return false;
    }
    return true;
}

// Function to display a message popup
function showMessage(message) {
    var popup = document.getElementById("messagePopup");
    var messageText = document.getElementById("messageText");

    // Set the message text
    messageText.innerHTML = message;

    // Show the popup
    popup.style.display = "block";

    // Close the popup after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);
}

// Function to handle successful login
function handleSuccessfulLogin() {
    showMessage("Login successful!");
    // Redirect the user to the welcome page or another page
    window.location.href = "indexs.html";
}

// Function to handle successful registration
function handleSuccessfulRegistration() {
    showMessage("Registration successful!");
    // Redirect the user to the login page after 3 seconds
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
}

// Function to handle incorrect credentials or missing fields
function handleIncorrectCredentials() {
    showMessage("Incorrect credentials. Please try again.");
}

// After successful login
handleSuccessfulLogin();

// After successfull registration
handleSuccessfulRegistration();

// After incorrect credentials or missing fields 
handleIncorrectCredentials();
