// script.js

// Function to display an alert
function showAlert(message) {
    alert(message);
  }
// script.js

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Display an alert with the submitted information
    alert(`Thank you for your message, ${name}!\n\nEmail: ${email}\n\nMessage: ${message}`);
  
    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    // Prevent the form from actually submitting (we handle it with JavaScript)
    return false;
  }
    