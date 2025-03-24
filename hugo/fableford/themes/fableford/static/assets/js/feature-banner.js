// Add a class to the body element when the banner is present
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.feature-banner')) {
        document.body.classList.add('has-feature-banner');
    }
    
    // When the banner is dismissed, remove the body class and adjust layout
    document.querySelectorAll('.feature-banner .btn-close').forEach(button => {
        button.addEventListener('click', function() {
            document.body.classList.remove('has-feature-banner');
        });
    });
});