function toggleAnonymous() {
    let isAnonymous = document.getElementById("anonymous").checked;
    let userDetails = document.getElementById("user-details");
    if (isAnonymous) {
        userDetails.style.display = "none";
    } else {
        userDetails.style.display = "block";
    }
}

function submitComplaint() {
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let section = document.getElementById("section").value;
    let complaint = document.getElementById("complaint").value;
    let isAnonymous = document.getElementById("anonymous").checked;

    let name = isAnonymous ? "Anonymous" : document.getElementById("name").value;
    let regNumber = isAnonymous ? "Anonymous" : document.getElementById("regNumber").value;

    if (!department || !year || !section || !complaint || (!isAnonymous && (!name || !regNumber))) {
        alert("Please fill all fields before submitting.");
        return;
    }

    alert("Complaint Submitted Successfully!\nDepartment: " + department + "\nYear: " + year + "\nSection: " + section + "\nName: " + name + "\nReg Number: " + regNumber + "\nComplaint: " + complaint);
}
