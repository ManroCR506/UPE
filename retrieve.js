// retrieve.js

document.getElementById("retrieveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const passcodeInput = document.getElementById("passcodeInput").value.trim();

    // Retrieve data from localStorage
    const visitorDataString = localStorage.getItem(passcodeInput);

    if (visitorDataString) {
        const visitorData = JSON.parse(visitorDataString);

        // Display the data
        document.getElementById("infoName").innerText = visitorData.name || '';
        document.getElementById("infoDate").innerText = visitorData.date || '';
        document.getElementById("infoTime").innerText = visitorData.time || '';
        document.getElementById("infoPurpose").innerText = visitorData.purpose || '';
        document.getElementById("infoVehicle").innerText = visitorData.vehicle || 'N/A';
        document.getElementById("infoPlate").innerText = visitorData.plate || 'N/A';
        document.getElementById("infoAddress").innerText = visitorData.address || 'N/A';
        document.getElementById("infoReminders").innerText = visitorData.reminders || 'N/A';

        document.getElementById("visitorInfo").classList.remove("hidden");
    } else {
        alert("Invalid passcode. Please try again.");
    }
});
