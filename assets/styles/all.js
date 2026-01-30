// =========================================
// Dwiky Anggarda - Professional Portfolio
// JavaScript Functionality
// =========================================

// =========================================
// Translations
// =========================================
const translations = {
    id: {
        // Navigation
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.skills": "Keahlian",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Kontak",
        
        // Hero Section
        "hero.greeting": "Halo, saya",
        "hero.description": "Seorang Backend Developer yang berpengalaman dalam membangun sistem yang handal dan skalabel. Meskipun fokus utama saya adalah backend, saya juga memiliki kemampuan fullstack untuk mengembangkan solusi end-to-end yang komprehensif.",
        "hero.viewWork": "Lihat Portfolio",
        "hero.contactMe": "Hubungi Saya",
        
        // About Section
        "about.title": "Tentang Saya",
        "about.subtitle": "Backend Developer & Fullstack Enthusiast",
        "about.paragraph1": "Saya adalah seorang Backend Developer dengan passion yang kuat dalam membangun arsitektur sistem yang robust dan efisien. Dengan pengalaman dalam berbagai teknologi backend, saya mampu mendesain dan mengimplementasikan API, database, serta layanan server-side yang optimal.",
        "about.paragraph2": "Meskipun spesialisasi saya ada di backend, saya juga memiliki kemampuan fullstack yang memungkinkan saya untuk memahami dan berkontribusi pada pengembangan frontend ketika diperlukan. Hal ini memberikan saya perspektif menyeluruh dalam pengembangan aplikasi.",
        "about.name": "Nama",
        "about.location": "Lokasi",
        "about.phone": "Telepon",
        "about.downloadCV": "Download CV",
        
        // Skills Section
        "skills.title": "Keahlian Teknis",
        "skills.subtitle": "Teknologi dan tools yang saya kuasai",
        "skills.backend": "Backend Development",
        "skills.database": "Database",
        "skills.frontend": "Frontend Development",
        "skills.tools": "Tools & DevOps",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.subtitle": "Proyek-proyek terbaik yang telah saya kerjakan",
        "portfolio.boscod.title": "BOSCOD Platform",
        "portfolio.boscod.desc": "Mengembangkan platform pengiriman aman yang mendukung 50K+ transaksi bulanan (COD & Non-COD). Mengintegrasikan 5-9 PPOB/Payment Gateway, menurunkan 60-75% kesalahan rekonsiliasi pembayaran manual melalui automasi penuh.",
        "portfolio.musicplayer.desc": "Aplikasi pemutar musik berbasis HTML5 dengan integrasi LINE LIFF API.",
        "portfolio.esika.title": "E-SIKA Lomanis – Backend REST API",
        "portfolio.esika.desc": "Mengembangkan core Laravel REST API yang mendukung 8-12 modul utama untuk manajemen izin kerja digital (pengajuan, persetujuan, pelacakan). Modernisasi ini mempercepat 50-70% waktu persetujuan izin untuk 100+ pengguna.",
        "portfolio.attendance.title": "Attendance & Payroll Application – PKBM Permata Sunnah",
        "portfolio.attendance.desc": "Membangun sistem manajemen karyawan (absensi, cuti, payroll) untuk 85 pegawai. Fokus pada tuning performa backend untuk latensi minimal pada query absensi dan perhitungan payroll bulanan stabil di 4,22 detik.",
        "portfolio.techStack": "Tech Stack",
        "portfolio.downloadPortfolio": "Download Portfolio Lengkap",
        
        // Contact Section
        "contact.title": "Hubungi Saya",
        "contact.subtitle": "Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya",
        "contact.address": "Alamat",
        "contact.followMe": "Ikuti Saya",
        "contact.form.name": "Nama Lengkap",
        "contact.form.email": "Email",
        "contact.form.subject": "Subjek",
        "contact.form.message": "Pesan",
        "contact.form.send": "Kirim Pesan",
        
        // Footer
        "footer.tagline": "Backend Developer dengan kemampuan Fullstack",
        "footer.quickLinks": "Link Cepat",
        "footer.connect": "Terhubung",
        "footer.rights": "Hak Cipta Dilindungi."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Hello, I'm",
        "hero.description": "An experienced Backend Developer specializing in building reliable and scalable systems. While my primary focus is on backend development, I also have fullstack capabilities to develop comprehensive end-to-end solutions.",
        "hero.viewWork": "View Portfolio",
        "hero.contactMe": "Contact Me",
        
        // About Section
        "about.title": "About Me",
        "about.subtitle": "Backend Developer & Fullstack Enthusiast",
        "about.paragraph1": "I am a Backend Developer with a strong passion for building robust and efficient system architectures. With experience in various backend technologies, I am capable of designing and implementing APIs, databases, and optimal server-side services.",
        "about.paragraph2": "Although my specialization is in backend, I also have fullstack capabilities that allow me to understand and contribute to frontend development when needed. This gives me a comprehensive perspective in application development.",
        "about.name": "Name",
        "about.location": "Location",
        "about.phone": "Phone",
        "about.downloadCV": "Download CV",
        
        // Skills Section
        "skills.title": "Technical Skills",
        "skills.subtitle": "Technologies and tools I master",
        "skills.backend": "Backend Development",
        "skills.database": "Database",
        "skills.frontend": "Frontend Development",
        "skills.tools": "Tools & DevOps",
        
        // Portfolio Section
        "portfolio.title": "Portfolio",
        "portfolio.subtitle": "Best projects I have worked on",
        "portfolio.boscod.title": "BOSCOD Platform",
        "portfolio.boscod.desc": "Engineered a secure delivery platform supporting 50K+ monthly transactions (COD & Non-COD). Integrated 5-9 PPOB/payment gateways, reducing manual payment reconciliation errors by 60-75% through full automation.",
        "portfolio.musicplayer.desc": "HTML5-based music player application with LINE LIFF API integration.",
        "portfolio.esika.title": "E-SIKA Lomanis – Backend REST API",
        "portfolio.esika.desc": "Developed the core Laravel REST API supporting 8-12 key modules for digital work permit management (submission, approval, tracking). This modernization resulted in 50-70% faster permit approval times for 100+ end-users.",
        "portfolio.attendance.title": "Attendance & Payroll Application – PKBM Permata Sunnah",
        "portfolio.attendance.desc": "Engineered an Employee Management System (attendance, leave, payroll) for 85 employees. Tuned backend performance for minimal attendance query latency and stabilized complex monthly payroll calculations at 4.22 seconds.",
        "portfolio.techStack": "Tech Stack",
        "portfolio.downloadPortfolio": "Download Complete Portfolio",
        
        // Contact Section
        "contact.title": "Contact Me",
        "contact.subtitle": "Interested in working together? Don't hesitate to reach out",
        "contact.address": "Address",
        "contact.followMe": "Follow Me",
        "contact.form.name": "Full Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        
        // Footer
        "footer.tagline": "Backend Developer with Fullstack Capabilities",
        "footer.quickLinks": "Quick Links",
        "footer.connect": "Connect",
        "footer.rights": "All Rights Reserved."
    }
};

// Current language
let currentLang = 'id';

// =========================================
// Language Switcher
// =========================================
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    updatePlaceholders(lang);
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

function updatePlaceholders(lang) {
    const placeholders = {
        id: {
            name: "Masukkan nama Anda",
            email: "Masukkan email Anda",
            subject: "Subjek pesan",
            message: "Tulis pesan Anda..."
        },
        en: {
            name: "Enter your name",
            email: "Enter your email",
            subject: "Message subject",
            message: "Write your message..."
        }
    };
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    if (nameInput) nameInput.placeholder = placeholders[lang].name;
    if (emailInput) emailInput.placeholder = placeholders[lang].email;
    if (subjectInput) subjectInput.placeholder = placeholders[lang].subject;
    if (messageInput) messageInput.placeholder = placeholders[lang].message;
}

// =========================================
// Navigation Toggle (Mobile)
// =========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

// =========================================
// Smooth Scrolling
// =========================================
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

// =========================================
// Back to Top Button
// =========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =========================================
// Navbar Scroll Effect
// =========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// =========================================
// Contact Form Handler
// =========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert(currentLang === 'id' ? 'Mohon lengkapi semua field yang diperlukan.' : 'Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert(currentLang === 'id' ? 'Mohon masukkan email yang valid.' : 'Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'id' ? 'Mengirim...' : 'Sending...');
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(currentLang === 'id' ? 'Terima kasih! Pesan Anda telah terkirim.' : 'Thank you! Your message has been sent.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// =========================================
// Animation on Scroll
// =========================================
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

// Apply animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Make hero visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// =========================================
// Initialize
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        // Default to Indonesian
        switchLanguage('id');
    }
});

// =========================================
// Legacy Functions (kept for compatibility)
// =========================================
function html5Music() {
    window.open("https://ngwota.herokuapp.com/");
}

function comingSoon() {
    alert(currentLang === 'id' ? 'Segera hadir!' : 'Coming soon!');
}

function tebakKoin() {
    alert(currentLang === 'id' ? 'Segera hadir!' : 'Coming soon!');
}