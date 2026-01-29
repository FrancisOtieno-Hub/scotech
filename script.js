// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== Mobile Menu Toggle ====================
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileToggle.querySelectorAll('span');
        if (mobileToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe stat cards
document.querySelectorAll('.stat').forEach((stat, index) => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(30px)';
    stat.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(stat);
});

// Observe contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
});

// ==================== Animated Counter for Stats ====================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            
            // Only animate numbers (not symbols like ∞)
            if (text.includes('+')) {
                const number = parseInt(text);
                statNumber.textContent = '0+';
                animateCounter(statNumber, number);
            } else if (text.includes('%')) {
                const number = parseInt(text);
                statNumber.textContent = '0%';
                setTimeout(() => {
                    let current = 0;
                    const interval = setInterval(() => {
                        current += 5;
                        if (current >= number) {
                            statNumber.textContent = number + '%';
                            clearInterval(interval);
                        } else {
                            statNumber.textContent = current + '%';
                        }
                    }, 30);
                }, 300);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== Parallax Effect for Hero ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==================== Dynamic Gradient Effect on Product Cards ====================
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px) perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Reset transform when not hovering
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
    });
});

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
    // Add loaded class to body for any additional animations
    document.body.classList.add('loaded');
    
    // Fade in hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--color-text-primary)';
                navLink.style.fontWeight = '600';
            } else {
                navLink.style.color = 'var(--color-text-secondary)';
                navLink.style.fontWeight = '500';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==================== Performance Optimization ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 100);
window.addEventListener('scroll', debouncedHighlight);

// ==================== Console Easter Egg ====================
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%cWelcome to Scotech - Building Digital Solutions for Tomorrow', 'font-size: 14px; color: #a0a0b8;');
console.log('%cInterested in joining our team? Reach out at info@scotech.co.ke', 'font-size: 12px; color: #6b6b7f;');

// ==================== Accessibility Enhancements ====================
// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#products';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-accent-1);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation improvements
document.querySelectorAll('.product-card, .contact-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('a');
            if (link) link.click();
        }
    });
});

// ==================== Dynamic Year in Footer ====================
const copyrightElement = document.querySelector('.footer-copyright');
if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Scotech. All rights reserved.`;
}

console.log('%c✨ Landing page loaded successfully!', 'font-size: 12px; color: #4facfe;');
