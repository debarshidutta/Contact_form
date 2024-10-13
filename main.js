// Select the form and add a submit event listener
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Contact_form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone-number').value.trim();

        // Basic validation
        if (!name || !email || !address || !phone) {
            alert('Please fill out all required fields.');
            return;
        }

        // Redirect to the 405 Not Allowed page
        window.location.href = '405.html';
    });
});

