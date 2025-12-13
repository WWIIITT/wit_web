// Navbar background change on scroll with smooth opacity transition
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Maximum scroll for full opacity
    
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
        
        // Calculate opacity based on scroll position
        const opacity = Math.min(0.3 + (scrollPosition / maxScroll) * 0.6, 0.9);
        navbar.style.background = `rgba(0, 0, 0, ${opacity})`;
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(0, 0, 0, 0.3)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
let isDark = false;

if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        isDark = !isDark;
        document.body.style.transition = 'background-color 0.3s ease';
        
        if (isDark) {
            this.querySelector('.icon').textContent = '🌙';
        } else {
            this.querySelector('.icon').textContent = '☀️';
        }
    });
}

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('.about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// AI Engineer typing and deleting animation
const roleTitle = document.getElementById('roleTitle');
if (roleTitle) {
    const text = 'AI Engineer';
    let currentText = text;
    let isDeleting = false;
    let charIndex = text.length;
    
    function animateText() {
        if (!isDeleting) {
            // Wait 4 seconds before starting to delete
            setTimeout(() => {
                isDeleting = true;
                deleteText();
            }, 2000);
        }
    }
    
    function deleteText() {
        if (charIndex > 0) {
            charIndex--;
            roleTitle.textContent = text.substring(0, charIndex);
            setTimeout(deleteText, 100);
        } else {
            // Start typing again
            isDeleting = false;
            setTimeout(typeText, 500);
        }
    }
    
    function typeText() {
        if (charIndex < text.length) {
            charIndex++;
            roleTitle.textContent = text.substring(0, charIndex);
            setTimeout(typeText, 150);
        } else {
            // Wait and start deleting again
            setTimeout(() => {
                isDeleting = true;
                deleteText();
            }, 2000);
        }
    }
    
    // Start the animation
    animateText();
}
