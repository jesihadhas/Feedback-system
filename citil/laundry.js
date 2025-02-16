document.addEventListener("DOMContentLoaded", function () {
    const anonymousCheckbox = document.getElementById("anonymous");
    const contactSection = document.getElementById("contactSection");
    const stars = document.querySelectorAll(".star");
    const form = document.getElementById("laundryForm");
    const successMessage = document.getElementById("successMessage");

    // Hide contact details when anonymous is checked
    anonymousCheckbox.addEventListener("change", function () {
        contactSection.style.display = this.checked ? "none" : "block";
    });

    // Star Rating Functionality
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            stars.forEach((s, i) => {
                s.classList.toggle("active", i <= index); // Highlights all selected stars
            });
        });
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Hide form and show success message
        form.style.display = "none";
        successMessage.style.display = "block";
    });
});
