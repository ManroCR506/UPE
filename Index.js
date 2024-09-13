document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const purpose = document.getElementById("purpose").value.trim();

    // Capture vehicle and plate information
    const vehicle = document.getElementById("vehicle").value.trim();
    const plate = document.getElementById("plate").value.trim();

    // Capture the Address field
    const address = document.getElementById("address").value.trim();

    // Capture things to remember/bring
    const reminders = document.getElementById("reminders").value.trim();

    // Generate passcode
    const passcode = Math.floor(100000 + Math.random() * 900000).toString();

    // Display the passcode
    document.getElementById("passcode").innerText = passcode;
    document.getElementById("passcodeDisplay").classList.remove("hidden");

    // Show the WhatsApp link
    const whatsappLink = document.getElementById("whatsappLink");
    whatsappLink.classList.remove("hidden");

    // Build the WhatsApp message
    let message = `Visitor Name: ${name}\nVisit Date: ${date}\nVisit Time: ${time}\nPurpose: ${purpose}`;
    if (vehicle) {
        message += `\nVehicle: ${vehicle}`;
    }
    if (plate) {
        message += `\nPlate: ${plate}`;
    }
    if (address) {
        message += `\nAddress: ${address}`;
    }
    if (reminders) {
        message += `\nThings to Remember/Bring: ${reminders}`;
    }
    // Format the Passcode: bold and add extra space
    message += `\nPasscode: *${passcode}*  `;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Update WhatsApp link
    whatsappLink.href = `https://wa.me/?text=${encodedMessage}`;
    whatsappLink.innerText = "Share on WhatsApp";
});
