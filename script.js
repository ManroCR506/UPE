// Set alert off
document.querySelector(".alert").style.display = "none";
document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Initialize Supabase client with your URL and Anon Key
    //const supabaseUrl = 'https://obbfxpengnphcmjvycbf.supabase.co'; 
    //const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iYmZ4cGVuZ25waGNtanZ5Y2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTk5NjMsImV4cCI6MjA0MjI3NTk2M30.nvyrjJw0AjjcIoVykuNPLbV65-RZ3pYEDB8EQDNaMZY';  // Replace with your Supabase Anon Key
    //const supabase = supabase.createClient(supabaseUrl, supabaseKey);
    
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
  
  //enable alert (after the submit buttom)
document.querySelector(".alert").style.display = "block";

//remove alert after 3 seconds
setTimeout(() => {
document.querySelector(".alert").style.display = "none";
}, 5000);


//reset the form
document.getElementById("visitorForm").reset();
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});
