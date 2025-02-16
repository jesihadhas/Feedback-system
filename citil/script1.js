document.addEventListener("DOMContentLoaded", function() {
    let studentBtn = document.getElementById("studentBtn");
    let staffBtn = document.getElementById("staffBtn");

    if (studentBtn) {
        studentBtn.addEventListener("click", function() {
            window.location.href = "student_selection.html";
        });
    }

    if (staffBtn) {
        staffBtn.addEventListener("click", function() {
            window.location.href = "staff_selection.html";
        });
    }
});
function navigateTo(page) {
    window.location.href = page;
}

    selectionButtons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.textContent.trim(); // Get button text
            navigateToStudentCategory(category);
        });
    });

