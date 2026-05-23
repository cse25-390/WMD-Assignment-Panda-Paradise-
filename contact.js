document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    event.preventDefault();
    document.getElementById('message');
    message.textContent = 'Message sent successfully! We will get back to you soon.';

    setTimeout(function() {
        window.location.href = 'home.html';
    }, 2000);
});
