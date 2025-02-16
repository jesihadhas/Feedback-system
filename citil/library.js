function toggleIdentityFields() {
    const identity = document.getElementById("identity").value;
    const identityFields = document.getElementById("identityFields");
    if (identity === "non_anonymous") {
        identityFields.classList.remove("hidden");
    } else {
        identityFields.classList.add("hidden");
    }
}

function showFields() {
    const category = document.getElementById("category").value;
    const urgencyDiv = document.getElementById("urgencyDiv");
    if (category === "book_availability") {
        urgencyDiv.classList.remove("hidden");
    } else {
        urgencyDiv.classList.add("hidden");
    }
}

function rate(stars) {
    const starElements = document.querySelectorAll(".stars span");
    starElements.forEach((star, index) => {
        if (index < stars) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}

function submitFeedback() {
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 3000);
}
