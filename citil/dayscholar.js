document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const timestamp = new Date().toLocaleString();

    db.collection("complaints").add({
        userType: "day-scholar",
        category: category,
        description: description,
        status: "Pending",
        timestamp: timestamp
    })
    .then(() => {
        alert("Complaint Submitted!");
        document.getElementById("complaintForm").reset();
        loadComplaints();
    })
    .catch(error => console.error("Error submitting complaint: ", error));
});

// Load complaints from Firebase
function loadComplaints() {
    db.collection("complaints").where("userType", "==", "day-scholar").get()
    .then(querySnapshot => {
        const table = document.getElementById("complaintTable");
        table.innerHTML = "";

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const row = `<tr>
                <td>${data.category}</td>
                <td>${data.description}</td>
                <td>${data.status}</td>
            </tr>`;
            table.innerHTML += row;
        });
    })
    .catch(error => console.error("Error loading complaints: ", error));
}

// Load complaints on page load
loadComplaints();
