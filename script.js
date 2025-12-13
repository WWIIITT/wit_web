// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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

// Animate cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const contentSection = document.querySelector('.content-section');
        contentSection.scrollIntoView({ behavior: 'smooth' });
    });
}
