document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (name && email && checkin && checkout && guests) {
        alert(`Thank you ${name}! Your booking for ${guests} guest(s) from ${checkin} to ${checkout} has been confirmed.`);
    } else {
        alert("Please fill in all fields.");
    }
});
