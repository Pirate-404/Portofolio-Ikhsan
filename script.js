// ==================== Hamburger Menu Toggle ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== Smooth Scroll & Active Link ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Scroll Animation ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all boxes and sections
document.querySelectorAll('.about-box, .experience-box, .gallery-box').forEach(element => {
    element.style.animation = 'none';
    observer.observe(element);
});

// ==================== Interactive Effects ====================
// Add hover effect sound or visual feedback
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== Navbar Background on Scroll ====================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== Parallax Effect ====================
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY < hero.offsetHeight) {
        hero.style.backgroundPosition = `0 ${window.scrollY * 0.5}px`;
    }
});

// ==================== Counter Animation (Optional) ====================
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== Dark Mode Toggle (Optional) ====================
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.setAttribute('title', 'Toggle Dark Mode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ==================== Form Validation (if needed) ====================
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff7675';
            isValid = false;
        } else {
            input.style.borderColor = '#00b894';
        }
    });

    return isValid;
};

// ==================== Scroll to Top Button ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.animation = 'fadeInUp 1.2s ease forwards';
});

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== Active Link Update ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

console.log('Portfolio Loaded Successfully! 🎉');
