// GSAP Animations and Interactive Functionality
gsap.registerPlugin(ScrollTrigger);

// Hide loader when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// Hero animations
gsap.timeline()
    .from('.hero-badge', { opacity: 0, y: -20, duration: 0.8 })
    .from('.hero-title', { opacity: 0, y: 30, duration: 1 }, '-=0.4')
    .from('.hero-subtitle', { opacity: 0, y: 30, duration: 1 }, '-=0.4')
    .from('.hero-cta', { opacity: 0, y: 30, duration: 1 }, '-=0.4');

// Parallax hero background
gsap.to('.parallax-bg', {
    y: 300,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Stats counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    gsap.to(counter, {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            once: true
        }
    });
});

// Service cards animation
gsap.from('.service-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
    }
});

// Timeline animation
gsap.to('.timeline-path', {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1
    }
});

// Timeline items animation
gsap.from('.timeline-item', {
    opacity: 0,
    x: (index) => index % 2 === 0 ? -50 : 50,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 70%'
    }
});

// Brands animation
gsap.from('.brand-item', {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.brands-carousel',
        start: 'top 80%'
    }
});

// Testimonials animation
gsap.from('.testimonial-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 80%'
    }
});

// BTU Calculator functionality
const m2Slider = document.getElementById('m2-slider');
const btuValue = document.querySelector('.btu-value');
const btuRecommendation = document.querySelector('.btu-recommendation');
const btuDescription = document.querySelector('.btu-description');

function calculateBTU(m2, type) {
    let baseBTU = m2 * 600; // Base calculation
    
    // Adjust for type
    if (type === 'comercial') baseBTU *= 1.2;
    if (type === 'industrial') baseBTU *= 1.5;
    
    // Round to nearest standard BTU size
    const standardSizes = [9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000];
    return standardSizes.find(size => size >= baseBTU) || standardSizes[standardSizes.length - 1];
}

function getBTUDescription(btu, m2) {
    if (btu <= 12000) return 'Ideal para dormitorios y oficinas pequeñas.';
    if (btu <= 18000) return 'Perfecto para salas de estar y dormitorios grandes.';
    if (btu <= 24000) return 'Adecuado para espacios comerciales medianos.';
    if (btu <= 36000) return 'Excelente para oficinas grandes y departamentos amplios.';
    return 'Sistema de alta capacidad para espacios industriales y comerciales grandes.';
}

if (m2Slider) {
    m2Slider.addEventListener('input', (e) => {
        const m2 = parseInt(e.target.value);
        const selectedType = document.querySelector('input[name="usage-type"]:checked').value;
        const btu = calculateBTU(m2, selectedType);
        
        btuValue.textContent = `${m2} m²`;
        btuRecommendation.textContent = `${btu.toLocaleString()} BTU`;
        btuDescription.textContent = getBTUDescription(btu, m2);
    });
}

// Update BTU when type changes
document.querySelectorAll('input[name="usage-type"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const m2 = parseInt(m2Slider.value);
        const selectedType = radio.value;
        const btu = calculateBTU(m2, selectedType);
        
        btuRecommendation.textContent = `${btu.toLocaleString()} BTU`;
        btuDescription.textContent = getBTUDescription(btu, m2);
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would normally send the form data to your backend
        // For now, we'll show a success message
        const button = e.target.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<span class="material-symbols-outlined">check_circle</span> ¡Mensaje Enviado!';
        button.classList.add('bg-green-500');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-green-500');
            e.target.reset();
        }, 3000);
    });
}

// Magnetic button effect
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});
