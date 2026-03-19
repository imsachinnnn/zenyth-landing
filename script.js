// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : ''; // Prevent scroll when overlay is active
    });
}

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav) {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.observer-section');
sections.forEach(section => {
    observer.observe(section);
});

