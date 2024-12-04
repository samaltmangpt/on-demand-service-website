document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add email sending functionality here
    alert('Contact form submitted!');
});

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate and send email with form details
    alert('Book services form submitted!');
});
