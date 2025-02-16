document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the form from reloading the page

    // Get the selected sector from the dropdown
    const selectedSector = document.getElementById("sector").value;
    
    // Get the complaint details
    const complaintDetails = document.getElementById("complaintDetails").value;
    
    // Log the data (you can send this to Firebase or another backend)
    console.log("Complaint Sector:", selectedSector);
    console.log("Complaint Details:", complaintDetails);

    // Clear the form or provide feedback
    alert("Complaint submitted successfully for " + selectedSector);
});
