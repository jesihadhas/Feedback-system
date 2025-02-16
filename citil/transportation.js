let selectedRating = 0;
let isAnonymous = null;

document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        document.querySelectorAll(".star").forEach(s => s.classList.remove("selected"));
        for (let i = 0; i < selectedRating; i++) {
            document.querySelectorAll(".star")[i].classList.add("selected");
        }
    });
});

document.getElementById("anonymous").addEventListener("click", function () {
    isAnonymous = true;
    this.classList.add("selected");
    document.getElementById("nonAnonymous").classList.remove("selected");
    document.getElementById("nonAnonymousFields").style.display = "none";
});

document.getElementById("nonAnonymous").addEventListener("click", function () {
    isAnonymous = false;
    this.classList.add("selected");
    document.getElementById("anonymous").classList.remove("selected");
    document.getElementById("nonAnonymousFields").style.display = "block";
});

document.getElementById("submitFeedback").addEventListener("click", function () {
    const feedbackText = document.getElementById("feedback").value;
    const travelTime = document.getElementById("travelTime").value;

    if (!travelTime) {
        alert("Please select travel time.");
        return;
    }
    if (!feedbackText.trim()) {
        alert("Please enter your feedback.");
        return;
    }
    if (selectedRating === 0) {
        alert("Please select a rating.");
        return;
    }
    if (isAnonymous === null) {
        alert("Please select Anonymous or Non-Anonymous.");
        return;
    }
    
    if (!isAnonymous) {
        const name = document.getElementById("name").value.trim();
        const busNumber = document.getElementById("busNumber").value.trim();
        const registerNumber = document.getElementById("registerNumber").value.trim();

        if (!name || !busNumber || !registerNumber) {
            alert("Please fill in all fields for Non-Anonymous feedback.");
            return;
        }
    }

    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        location.reload(); 
    }, 2000);
});
