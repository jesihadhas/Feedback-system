document.addEventListener("DOMContentLoaded", function () {
    const ratingInput = document.getElementById("rating");
    const ratingDisplay = document.getElementById("ratingValue");
    const descriptionInput = document.getElementById("description");
    const submitBtn = document.getElementById("submitBtn");
    const confirmationMsg = document.getElementById("confirmation");

    // Toggle additional fields based on category selection
    window.toggleOptions = function() {
        let category = document.getElementById("category").value;
        let foodCourtOptions = document.getElementById("foodCourtOptions");
        let foodCourtName = document.getElementById("foodCourtName");
        let clubOptions = document.getElementById("clubOptions");

        foodCourtOptions.classList.add("hidden");
        foodCourtName.classList.add("hidden");
        clubOptions.classList.add("hidden");

        if (category === "food_court") {
            foodCourtOptions.classList.remove("hidden");
        } else if (category === "clubs") {
            clubOptions.classList.remove("hidden");
        }
    };

    // Toggle food court name input
    window.toggleFoodCourtInput = function() {
        let anonymity = document.getElementById("food_anonymity").value;
        let foodCourtName = document.getElementById("foodCourtName");

        if (anonymity === "non_anonymous") {
            foodCourtName.classList.remove("hidden");
        } else {
            foodCourtName.classList.add("hidden");
        }
    };

    // Function to validate form inputs
    function validateForm() {
        if (descriptionInput.value.trim().length > 0) {
            submitBtn.removeAttribute("disabled");
            submitBtn.style.opacity = "1";
        } else {
            submitBtn.setAttribute("disabled", "true");
            submitBtn.style.opacity = "0.6";
        }
    }

    // Update rating display dynamically
    ratingInput.addEventListener("input", function () {
        const ratingValue = this.value;
        ratingDisplay.innerText = ratingValue + "/5";

        ratingDisplay.className = "";
        ratingDisplay.classList.add(`rating-${ratingValue}`);
    });

    // Enable submit button when description is entered
    descriptionInput.addEventListener("input", validateForm);

    // **Fix: Add event listener for submit button**
    submitBtn.addEventListener("click", function () {
        if (!submitBtn.disabled) {
            confirmationMsg.classList.remove("hidden");
            confirmationMsg.innerText = "Successfully Submitted!";
            confirmationMsg.classList.add("success");

            // Optionally, clear the form after submission
            document.getElementById("category").value = "";
            descriptionInput.value = "";
            ratingInput.value = 3;
            ratingDisplay.innerText = "3/5";
            submitBtn.setAttribute("disabled", "true");
            submitBtn.style.opacity = "0.6";

            // Hide additional fields
            document.getElementById("foodCourtOptions").classList.add("hidden");
            document.getElementById("foodCourtName").classList.add("hidden");
            document.getElementById("clubOptions").classList.add("hidden");
        }
    });
});
