const contactForm = document.getAnimationsById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    //if passess
    alert("Message Submitted");
    contactForm.reset();

});