document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const message = document.getElementById("message");

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const coeSelect = document.getElementById("coeSelect").value;
        const feedback = document.getElementById("feedback").value;

        if (coeSelect === "" || feedback.trim() === "") {
            message.textContent = "Please select a COE and enter your feedback.";
            message.style.color = "red";
            message.style.display = "block";
            return;
        }

        // Display success message
        message.textContent = "Thank you for your feedback!";
        message.style.color = "green";
        message.style.display = "block";

        // Reset form fields
        feedbackForm.reset();
    });
});
