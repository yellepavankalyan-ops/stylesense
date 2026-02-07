// ============================================
// GRADIO CONFIGURATION
// ============================================
// PASTE YOUR GRADIO LINK HERE after running your Google Colab notebook
const GRADIO_LINK = 'https://60a960ceb0d774353e.gradio.live';
// ============================================

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const body = document.documentElement;

// Check for saved theme or set default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add subtle animation feedback
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => themeToggle.style.transform = '', 100);
    });
}

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    }

    lastScroll = currentScroll;
});

// Generate Outfit Button - Redirect to Gradio
const generateOutfitBtn = document.getElementById('generateOutfitBtn');

if (generateOutfitBtn) {
    generateOutfitBtn.addEventListener('click', () => {
        // Check if Gradio link is configured
        if (!GRADIO_LINK || GRADIO_LINK === 'PASTE_YOUR_GRADIO_LINK_HERE') {
            alert('⚠️ Gradio link not configured!\n\nPlease update the GRADIO_LINK variable in script.js with your live Gradio link from Google Colab.');
            return;
        }

        // Validate URL format
        try {
            new URL(GRADIO_LINK);
        } catch (error) {
            alert('⚠️ Invalid Gradio link!\n\nPlease make sure you pasted the complete Gradio URL (e.g., https://xxxxx.gradio.live)');
            return;
        }

        // Show loading state
        const originalText = generateOutfitBtn.innerHTML;
        generateOutfitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="50" stroke-dashoffset="25"/>
            </svg>
            Opening AI Stylist...
        `;
        generateOutfitBtn.disabled = true;

        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Redirect to Gradio after a short delay
        setTimeout(() => {
            window.open(GRADIO_LINK, '_blank');

            // Reset button
            setTimeout(() => {
                generateOutfitBtn.innerHTML = originalText;
                generateOutfitBtn.disabled = false;
            }, 1000);
        }, 500);
    });
}

// Add intersection observer for fade-in animations
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

// Observe feature cards and steps
document.querySelectorAll('.feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add particle effect to hero section (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        animation: particle-float 3s ease-out forwards;
    `;

    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    document.querySelector('.hero-background').appendChild(particle);

    setTimeout(() => particle.remove(), 3000);
}

// Add particle animation styles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) scale(1);
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Console message for developers
console.log('%c✨ StyleSense - AI Fashion Recommendations', 'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c🚀 Built for hackathon demo', 'font-size: 14px; color: #667eea;');
console.log('%c⚙️ Don\'t forget to update the GRADIO_LINK variable!', 'font-size: 12px; color: #f5576c; font-weight: bold;');
