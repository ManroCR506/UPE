// visitors.js

// Mock JSON data for visitors
const visitorsData = [
    {
        name: "Alice Johnson",
        date: "2024-09-15",
        time: "10:30",
        purpose: "Business Meeting",
        vehicle: "Tesla Model 3",
        plate: "EV-2024",
        address: "456 Elm Street, Springfield",
        reminders: "Bring presentation materials.",
        passcode: "123456"
    },
    {
        name: "Bob Smith",
        date: "2024-09-16",
        time: "14:00",
        purpose: "Project Collaboration",
        vehicle: "Ford F-150",
        plate: "TRK-7890",
        address: "789 Oak Avenue, Metropolis",
        reminders: "Don't forget the NDA documents.",
        passcode: "654321"
    },
    {
        name: "Carol Williams",
        date: "2024-09-17",
        time: "09:00",
        purpose: "Interview",
        vehicle: "",
        plate: "",
        address: "https://waze.com/ul/h6f5g7",
        reminders: "Prepare for technical questions.",
        passcode: "112233"
    },
    {
        name: "David Brown",
        date: "2024-09-18",
        time: "11:15",
        purpose: "Site Inspection",
        vehicle: "Chevrolet Silverado",
        plate: "INSP-456",
        address: "123 Industrial Road, Gotham City",
        reminders: "Safety gear is mandatory.",
        passcode: "445566"
    },
    {
        name: "Emma Davis",
        date: "2024-09-19",
        time: "13:45",
        purpose: "Client Lunch",
        vehicle: "BMW X5",
        plate: "CLT-999",
        address: "https://waze.com/ul/k3l2m1",
        reminders: "Discuss contract renewal.",
        passcode: "778899"
    }
];

function displayVisitors() {
    // Display the visitor data in the table
    const visitorsList = document.getElementById('visitorsList');
    visitorsList.innerHTML = '';  // Clear the existing content

    visitorsData.forEach(visitor => {
        const row = document.createElement('tr');

        // Insert each visitor field into the table row
        row.innerHTML = `
            <td>${visitor.name || 'N/A'}</td>
            <td>${visitor.date || 'N/A'}</td>
            <td>${visitor.time || 'N/A'}</td>
            <td>${visitor.purpose || 'N/A'}</td>
            <td>${visitor.vehicle || 'N/A'}</td>
            <td>${visitor.plate || 'N/A'}</td>
            <td>${visitor.address || 'N/A'}</td>
            <td>${visitor.reminders || 'N/A'}</td>
            <td>${visitor.passcode || 'N/A'}</td>
        `;

        visitorsList.appendChild(row);
    });
}

// Display visitors data when the page loads
document.addEventListener('DOMContentLoaded', displayVisitors);
