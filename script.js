document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form inputs
        const email = document.querySelector('.input-email').value;
        const username = document.querySelector('.input').value;
        const password = document.querySelectorAll('.input')[1].value;

        // You can perform validation here if needed
        
        // Example validation for email
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Example validation for password
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        // If all validations pass, you can proceed to submit the form or handle data
        // For now, let's just log the data
        console.log("Email:", email);
        console.log("Username:", username);
        console.log("Password:", password);

        // Clear the form fields after submission
        form.reset();
    });

    // Function to validate email address
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
