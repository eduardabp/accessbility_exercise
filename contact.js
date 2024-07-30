document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!name || !email || !message || !emailPattern.test(email)) {
            document.querySelector('.form-error').style.display = 'block';
        } else {
            document.querySelector('.form-error').style.display = 'none';
            document.querySelector('.form-success').style.display = 'block';
            document.getElementById('contact-form').style.display = 'none';
        }
    });
});
