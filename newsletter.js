document.addEventListener("DOMContentLoaded", function() {
    // Get the newsletter form element
    const newsletterForm = document.getElementById("newsletterForm");

    // Add event listener for form submission
    newsletterForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the email input element
        const emailInput = document.getElementById("email");

        // Trim the input value to remove whitespace
        const email = emailInput.value.trim();

        // Check if the email is not empty
        if (email) {
            // Get existing emails from local storage or initialize an empty array
            let storedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

            // Check if the email is already subscribed
            if (!storedEmails.includes(email)) {
                // Add the new email to the array
                storedEmails.push(email);

                // Save the updated array back to local storage
                localStorage.setItem("newsletterEmails", JSON.stringify(storedEmails));

                // Display a success message
                alert("Thank you for subscribing to our newsletter!");
            } else {
                // Display a message if the email is already subscribed
                alert("You are already subscribed to our newsletter.");
            }

            // Clear the email input field after submission
            emailInput.value = "";
        } else {
            // Display an error message if the email input is empty
            alert("Please enter a valid email address.");
        }
    });
});