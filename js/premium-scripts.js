// Premium JavaScript for ACONDICIONADOSPRO

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================
// LOADING SCREEN
// ============================================
const loader = document.getElementById('loader');
const loaderProgress = document.querySelector('.loader-progress');

let progress = 0;
const loadingInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
            loader.classList.add('hidden');
            initAnimations();
        }, 500);
    }
    if (loaderProgress) {
        loaderProgress.style.width = progress + '%';
    }
}, 100);

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(cursorFollower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
    });
    
    // Cursor hover effects
    document.querySelectorAll('a, button, input, select, textarea, label, .hover-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-follower-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-follower-hover');
        });
    });
}

// ============================================
// SCROLL PROGRESS
// ============================================
const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ============================================
// DARK MODE TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check saved preference
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    if (themeToggle) {
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        if (sunIcon) sunIcon.classList.toggle('hidden', isDark);
        if (moonIcon) moonIcon.classList.toggle('hidden', !isDark);
    });
}

// ============================================
// MOBILE MENU
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.style.pointerEvents = menuOpen ? 'auto' : 'none';
        mobileMenu.style.opacity = menuOpen ? '1' : '0';
    });
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.style.pointerEvents = 'none';
            mobileMenu.style.opacity = '0';
        });
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, { scrollTo: { y: target, offsetY: 100 }, duration: 1, ease: 'power3.inOut' });
        }
    });
});

// ============================================
// BTU CALCULATOR
// ============================================
const m2Slider = document.getElementById('m2Slider');
const m2Display = document.getElementById('m2Display');
const btuResult = document.getElementById('btuResult');
const btuDescription = document.getElementById('btuDescription');

function calculateBTU() {
    if (!m2Slider || !m2Display || !btuResult || !btuDescription) return;
    
    const m2 = parseInt(m2Slider.value);
    const usage = document.querySelector('input[name="usage"]:checked')?.value || 'residencial';
    const sunExposure = document.getElementById('sunExposure')?.checked || false;
    const highCeiling = document.getElementById('highCeiling')?.checked || false;
    const manyPeople = document.getElementById('manyPeople')?.checked || false;
    
    let baseBTU = m2 * 600;
    
    // Adjustments
    if (usage === 'comercial') baseBTU *= 1.2;
    if (usage === 'industrial') baseBTU *= 1.5;
    if (sunExposure) baseBTU *= 1.15;
    if (highCeiling) baseBTU *= 1.2;
    if (manyPeople) baseBTU *= 1.1;
    
    // Round to standard sizes
    const standardSizes = [9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000];
    const finalBTU = standardSizes.find(size => size >= baseBTU) || standardSizes[standardSizes.length - 1];
    
    // Update display
    m2Display.textContent = m2 + ' m²';
    
    // Animate counter
    gsap.to(btuResult, {
        textContent: finalBTU.toLocaleString(),
        duration: 0.5,
        snap: { textContent: 1 },
        ease: 'power2.out'
    });
    
    // Update slider gradient
    const percentage = ((m2 - 10) / (200 - 10)) * 100;
    m2Slider.style.background = `linear-gradient(90deg, var(--primary) ${percentage}%, #e5e7eb ${percentage}%)`;
    
    // Update description
    const descriptions = {
        9000: 'Perfecto para dormitorios pequeños y oficinas individuales.',
        12000: 'Ideal para dormitorios grandes y salas de estar estándar.',
        18000: 'Adecuado para espacios medianos y oficinas compartidas.',
        24000: 'Excelente para salas amplias y locales comerciales pequeños.',
        30000: 'Recomendado para espacios comerciales medianos.',
        36000: 'Ideal para oficinas grandes y restaurantes.',
        48000: 'Sistema de alta capacidad para espacios comerciales amplios.',
        60000: 'Solución industrial para grandes instalaciones.'
    };
    btuDescription.textContent = descriptions[finalBTU] || descriptions[60000];
}

if (m2Slider) {
    m2Slider.addEventListener('input', calculateBTU);
}

document.querySelectorAll('input[name="usage"]').forEach(radio => {
    radio.addEventListener('change', calculateBTU);
});

document.querySelectorAll('#sunExposure, #highCeiling, #manyPeople').forEach(checkbox => {
    checkbox.addEventListener('change', calculateBTU);
});

// Initialize calculator
calculateBTU();

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span><span>Enviando...</span>';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span><span>¡Mensaje Enviado!</span>';
            btn.classList.remove('from-primary', 'to-primary-700');
            btn.classList.add('from-green-500', 'to-green-600');
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                btn.classList.remove('from-green-500', 'to-green-600');
                btn.classList.add('from-primary', 'to-primary-700');
                this.reset();
            }, 3000);
        }, 2000);
    });
}

// ============================================
// GSAP ANIMATIONS
// ============================================
function initAnimations() {
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.8 })
        .from('.hero-title', { opacity: 0, y: 50, duration: 1 }, '-=0.4')
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
        .from('.hero-stats > div', { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');
    
    // Stats counter animation
    document.querySelectorAll('.counter-value[data-target]').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    textContent: target,
                    duration: 2,
                    snap: { textContent: 1 },
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
    
    // Stat cards
    gsap.from('.stat-card', {
        scrollTrigger: {
            trigger: '.stat-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Service cards
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.service-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Process steps
    gsap.from('.process-step', {
        scrollTrigger: {
            trigger: '.process-step',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Testimonial cards
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Brand logos
    gsap.from('.brand-logo', {
        scrollTrigger: {
            trigger: '.brand-logo',
            start: 'top 85%'
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)'
    });
}

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
}

createParticles();

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
const header = document.querySelector('header');
let lastScroll = 0;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            const nav = header.querySelector('nav > div');
            if (nav) nav.classList.add('shadow-lg');
        } else {
            const nav = header.querySelector('nav > div');
            if (nav) nav.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
}
