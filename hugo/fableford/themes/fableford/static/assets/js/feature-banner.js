// Add a class to the body element when the banner is present
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.feature-banner')) {
        document.body.classList.add('has-feature-banner');
        
        // Adjust the main content padding to account for the banner
        const bannerHeight = document.querySelector('.feature-banner').offsetHeight;
        const navbar = document.querySelector('.navbar.fixed-top');
        
        if (navbar) {
            navbar.style.top = bannerHeight + 'px';
        }
    }
    
    // When the banner is dismissed, remove the body class and adjust layout
    document.querySelectorAll('.feature-banner .btn-close').forEach(button => {
        button.addEventListener('click', function() {
            document.body.classList.remove('has-feature-banner');
            
            // Reset navbar positioning
            const navbar = document.querySelector('.navbar.fixed-top');
            if (navbar) {
                navbar.style.top = '0';
            }
            
            // Store a flag in session storage to remember the banner was dismissed
            sessionStorage.setItem('bannerDismissed', 'true');
        });
    });
    
    // Check if the banner was previously dismissed in this session
    if (sessionStorage.getItem('bannerDismissed') === 'true') {
        // Hide the banner
        const banner = document.querySelector('.feature-banner');
        if (banner) {
            banner.style.display = 'none';
            document.body.classList.remove('has-feature-banner');
        }
    }
});