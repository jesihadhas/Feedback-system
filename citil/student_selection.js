// Wait for DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // Ensure the button exists before adding event listeners
    const dayScholarBtn = document.getElementById("dayScholarBtn");
    const hostellerBtn = document.getElementById("hostellerBtn");

    if (dayScholarBtn) {
        dayScholarBtn.addEventListener("click", function() {
            window.location.href = "dayscholar.html"; // Navigates to Day Scholar Page
        });
    }

    if (hostellerBtn) {
        hostellerBtn.addEventListener("click", function() {
            window.location.href = "hosteller.html"; // Navigates to Hosteller Page
        });
    }

});
