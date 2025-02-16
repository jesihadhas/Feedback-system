// Function to show/hide name and register number based on selection
function toggleIdentityFields() {
    const identity = document.getElementById('identity').value;
    const identityFields = document.getElementById('identityFields');

    if (identity === "anonymous") {
        identityFields.classList.add("hidden");
    } else {
        identityFields.classList.remove("hidden");
    }
}

// Function to handle feedback submission
function submitFeedback() {
    const identity = document.getElementById('identity').value;
    const name = document.getElementById('name').value.trim();
    const registerNumber = document.getElementById('registerNumber').value.trim();
    const sport = document.getElementById('sport').value;
    const gender = document.getElementById('gender').value;
    const description = document.getElementById('description').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : "No Rating";

    if (!description) {
        alert("Please enter a description.");
        return;
    }

    if (identity === "non-anonymous" && (!name || !registerNumber)) {
        alert("Please enter your Name and Register Number.");
        return;
    }

    console.log("Identity:", identity);
    console.log("Name:", name || "Anonymous");
    console.log("Register Number:", registerNumber || "N/A");
    console.log("Sport:", sport);
    console.log("Gender:", gender);
    console.log("Description:", description);
    console.log("Rating:", rating);

    document.getElementById('successMessage').style.display = "block";
    setTimeout(() => {
        document.getElementById('successMessage').style.display = "none";
    }, 3000);
}
