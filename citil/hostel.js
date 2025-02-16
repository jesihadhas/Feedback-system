function showSection(section) {
    const sections = document.querySelectorAll('.feedback-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function proceedToFeedback() {
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('submitFeedbackBtn').style.display = 'none'; // Hide submit initially
}

function nextPage() {
    document.getElementById('rating').style.display = 'block';
    document.getElementById('anonymousOption').style.display = 'block';
}

let rating = 0;

function rate(value) {
    rating = value;
    document.getElementById('star-rating').textContent = rating;
    const stars = document.querySelectorAll('.stars span');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function toggleInputFields() {
    if (document.getElementById('anonymous').checked) {
        document.getElementById('userInfo').style.display = 'none';
        document.getElementById('submitFeedbackBtn').style.display = 'block'; // Show submit when anonymousity selected
    } else {
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('submitFeedbackBtn').style.display = 'block'; // Show submit when non-anonymousity selected
    }
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value;
    const hotelName = document.getElementById('hotel-name').value;
    const roomNumber = document.getElementById('room-number').value;

    // Validation
    if (!feedbackText || (!document.getElementById('anonymous').checked && (!hotelName || !roomNumber))) {
        alert('Please fill all required fields.');
        return;
    }

    // Simulate feedback submission
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
        location.reload(); // Optionally reset the form
    }, 3000);
}

function goBack() {
    window.history.back();
}
