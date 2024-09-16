// retrieve.js

// Mock JSON data
const mockData = [
    {
        "name": "Alice Johnson",
        "date": "2024-09-15",
        "time": "10:30",
        "purpose": "Business Meeting",
        "vehicle": "Tesla Model 3",
        "plate": "EV-2024",
        "address": "456 Elm Street, Springfield",
        "reminders": "Bring presentation materials.",
        "passcode": "123456"
    },
    {
        "name": "Bob Smith",
        "date": "2024-09-16",
        "time": "14:00",
        "purpose": "Project Collaboration",
        "vehicle": "Ford F-150",
        "plate": "TRK-7890",
        "address": "789 Oak Avenue, Metropolis",
        "reminders": "Don't forget the NDA documents.",
        "passcode": "654321"
    },
    {
        "name": "Carol Williams",
        "date": "2024-09-17",
        "time": "09:00",
        "purpose": "Interview",
        "vehicle": "",
        "plate": "",
        "address": "https://waze.com/ul/h6f5g7",
        "reminders": "Prepare for technical questions.",
        "passcode": "112233"
    },
    {
        "name": "David Brown",
        "date": "2024-09-18",
        "time": "11:15",
        "purpose": "Site Inspection",
        "vehicle": "Chevrolet Silverado",
        "plate": "INSP-456",
        "address": "123 Industrial Road, Gotham City",
        "reminders": "Safety gear is mandatory.",
        "passcode": "445566"
    },
    {
        "name": "Emma Davis",
        "date": "2024-09-19",
        "time": "13:45",
        "purpose": "Client Lunch",
        "vehicle": "BMW X5",
        "plate": "CLT-999",
        "address": "https://waze.com/ul/k3l2m1",
        "reminders": "Discuss contract renewal.",
        "passcode": "778899"
    }
];

document.getElementById("retrieveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const passcodeInput = document.getElementById("passcodeInput").value.trim();

    // Search the mock data for a matching passcode
    const visitorData = mockData.find(visitor => visitor.passcode === passcodeInput);

// In case of an invalid passcode
const errorMessage = document.getElementById("errorMessage");

if (visitorData) {
    // Hide error message if previously shown
    errorMessage.classList.add('hidden');
    // Display visitor info
    // ...
} else {
    // Show error message
    errorMessage.textContent = "Invalid passcode. Please try again.";
    errorMessage.classList.remove('hidden');
    // Hide visitor info if visible
    document.getElementById("visitorInfo").classList.add("hidden");
}

    

// Display the Address
const addressElement = document.getElementById("infoAddress");
const address = visitorData.address || 'N/A';

if (address.startsWith('http://') || address.startsWith('https://')) {
    addressElement.innerHTML = `<a href="${address}" target="_blank">View Location</a>`;
} else {
    addressElement.textContent = address;
}
    
    if (visitorData) {
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

// Close mobile menu after clicking a link (if applicable)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});
