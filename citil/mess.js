document.addEventListener("DOMContentLoaded", function () {
    initializeRatings();
});

function initializeRatings() {
    const ratingCells = document.querySelectorAll(".rating");
    ratingCells.forEach(cell => {
        cell.innerHTML = createStars(5);
        addStarListeners(cell);
    });
}

function createStars(count) {
    return Array(count).fill('☆').map((star, index) => 
        `<span class="star" data-value="${index + 1}">☆</span>`).join('');
}

function addStarListeners(cell) {
    let stars = cell.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            let value = parseInt(this.getAttribute("data-value"));
            updateStars(stars, value);
            cell.setAttribute("data-rating", value);
        });
    });
}

function updateStars(stars, value) {
    stars.forEach((star, index) => {
        star.textContent = index < value ? "★" : "☆";
        star.classList.toggle("selected", index < value);
    });
}

document.getElementById("analyze").addEventListener("click", function () {
    document.getElementById('feedback-system').style.display = 'none';
    document.getElementById('feedback-analysis').style.display = 'block';
    renderChart();
});

document.getElementById("back").addEventListener("click", function () {
    document.getElementById('feedback-analysis').style.display = 'none';
    document.getElementById('feedback-system').style.display = 'block';
});

function renderChart() {
    const ctx = document.getElementById("feedbackChart").getContext("2d");

    // Get selected ratings
    let ratings = [];
    document.querySelectorAll(".rating").forEach(cell => {
        ratings.push(parseInt(cell.getAttribute("data-rating")) || 0);
    });

    if (window.feedbackChartInstance) {
        window.feedbackChartInstance.destroy();
    }

    window.feedbackChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Breakfast", "Lunch", "Snacks", "Dinner"],
            datasets: [{
                label: "Feedback Ratings",
                data: ratings,
                backgroundColor: ["#ffcc00", "#ff5733", "#33b5e5", "#8e44ad"],
                borderColor: ["#d4a000", "#b53b23", "#2274a5", "#6a1b9a"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5
                }
            }
        }
    });
}
