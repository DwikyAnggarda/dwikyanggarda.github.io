// =========================================
// Dwiky Anggarda - Jasa Pembuatan Aplikasi Web
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
        "nav.services": "Layanan",
        "nav.skills": "Teknologi",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Kontak",
        "nav.whatsapp": "WhatsApp",

        // Hero Section
        "hero.badge": "✅ Tersedia untuk proyek baru",
        "hero.headline": "Saya Bantu Bisnis Kamu <span class=\"hero-highlight\">Tumbuh</span> dengan Sistem yang Tepat",
        "hero.description": "Sudah membangun 8+ sistem untuk UMKM, sekolah, klinik, dan startup Indonesia. Dari sistem ekspedisi, pembayaran digital, absensi karyawan, LMS, hingga aplikasi bisnis custom — saya kerjakan dari awal sampai jalan.",
        "hero.stat1": "Sistem Terbangun",
        "hero.stat2": "Tahun Pengalaman",
        "hero.stat3": "Sektor Industri",
        "hero.stat4": "On-Time Delivery",
        "hero.ctaWa": "Konsultasi Gratis via WhatsApp",
        "hero.ctaPortfolio": "Lihat Portfolio",
        "hero.trust": "🔒 Konsultasi gratis, sepuasnya",
        "hero.card1": "Payment Gateway Terintegrasi",
        "hero.card2": "Sistem Absensi & Payroll",

        // About Section
        "about.title": "Tentang Saya",
        "about.subtitle": "Konsultan teknologi yang membantu bisnis tumbuh dengan sistem yang tepat",
        "about.heading": "Hai, saya Dwiky 👋",
        "about.paragraph1": "Saya adalah programmer yang fokus membantu UMKM, sekolah, klinik, dan bisnis jasa di Indonesia mendapatkan sistem yang benar-benar <strong>sesuai kebutuhan mereka</strong>.",
        "about.paragraph2": "Keahlian saya ada di membangun sistem yang kuat: sistem pembayaran yang otomatis sinkron tanpa perlu input manual, pengelolaan karyawan yang rapi dari absensi sampai slip gaji, dan integrasi antar platform yang membuat operasional bisnis jauh lebih efisien.",
        "about.h1title": "Payment Gateway & Fintech",
        "about.h1desc": "QRIS, Virtual Account, E-wallet terintegrasi otomatis",
        "about.h2title": "Sistem Karyawan & Penggajian",
        "about.h2desc": "Absensi, cuti, payroll otomatis untuk ratusan karyawan",
        "about.h3title": "Integrasi & Otomasi Sistem",
        "about.h3desc": "Menghubungkan platform yang sudah ada agar sinkron otomatis",
        "about.h4title": "Aplikasi Web & Mobile-Friendly",
        "about.h4desc": "Bisa diakses dari HP, tablet, dan komputer tanpa masalah",
        "about.ctaWa": "Chat WhatsApp Sekarang",
        "about.downloadPortfolio": "Download Portfolio",

        // Services Section
        "services.title": "Layanan Saya",
        "services.subtitle": "Pilih solusi yang sesuai dengan kebutuhan bisnis kamu",
        "services.popular": "Paling Diminati",
        "services.fitLabel": "Cocok untuk:",
        "services.priceFrom": "Mulai dari",
        "services.priceFree": "Konsultasi Gratis",
        "services.cta": "Tanya & Konsultasi",
        "services.note": "Semua harga adalah estimasi awal. Harga final ditentukan setelah diskusi kebutuhan. <strong>Konsultasi gratis!</strong>",
        "services.s1.title": "Sistem Manajemen Karyawan",
        "services.s1.desc": "Absensi, cuti, lembur, dan penggajian otomatis dalam satu sistem. Cocok untuk perusahaan dengan 10–500+ karyawan.",
        "services.s1.f1": "Absensi via scan QR / GPS",
        "services.s1.f2": "Perhitungan gaji & tunjangan otomatis",
        "services.s1.f3": "Slip gaji digital & laporan bulanan",
        "services.s1.f4": "Dashboard manajemen real-time",
        "services.s1.fit": "Sekolah, Pesantren, Koperasi, Pabrik, Klinik",
        "services.s1.price": "Harga sesuai kebutuhan",
        "services.s2.title": "Sistem Kasir & Pembayaran Digital",
        "services.s2.desc": "Terima pembayaran QRIS, Virtual Account, dan E-wallet. Rekonsiliasi otomatis tanpa input manual. Cocok untuk toko, warung, hingga marketplace.",
        "services.s2.f1": "Integrasi QRIS, VA, E-wallet",
        "services.s2.f2": "Rekonsiliasi transaksi otomatis",
        "services.s2.f3": "Laporan penjualan harian/bulanan",
        "services.s2.f4": "Notifikasi pembayaran real-time",
        "services.s2.fit": "Toko Online, Ekspedisi, Marketplace, UMKM",
        "services.s2.price": "Harga sesuai kebutuhan",
        "services.s3.title": "Aplikasi Custom Sesuai Kebutuhan",
        "services.s3.desc": "Punya ide sistem atau masalah bisnis yang unik? Saya bantu wujudkan dari nol — mulai dari desain alur, pengembangan, hingga deployment dan maintenance.",
        "services.s3.f1": "Analisis kebutuhan bisnis gratis",
        "services.s3.f2": "Pengembangan web app full-stack",
        "services.s3.f3": "Mobile-friendly & responsive",
        "services.s3.f4": "Support & maintenance pasca-launch",
        "services.s3.fit": "Startup, Klinik, Bisnis Jasa, Rental, Properti",
        "services.s3.price": "Harga sesuai kebutuhan",
        "services.s4.title": "Integrasi & Koneksi Antar Sistem",
        "services.s4.desc": "Sudah punya sistem tapi tidak sinkron satu sama lain? Saya sambungkan sistem lama kamu dengan platform baru tanpa perlu buang sistem yang ada.",
        "services.s4.f1": "Integrasi API antar platform",
        "services.s4.f2": "Sinkronisasi data otomatis",
        "services.s4.f3": "Migrasi data yang aman",
        "services.s4.f4": "Optimasi performa sistem existing",
        "services.s4.fit": "Bisnis dengan 2+ sistem terpisah, Retail, Logistik",
        "services.s4.price": "Harga sesuai kebutuhan",

        // Skills Section
        "skills.title": "Teknologi yang Digunakan",
        "skills.subtitle": "Stack teknologi proven yang saya gunakan untuk membangun sistem bisnis kamu",
        "skills.backend": "Backend & Framework",
        "skills.database": "Database & Cloud",
        "skills.frontend": "Frontend & UI",
        "skills.tools": "Integrasi & DevOps",

        // Portfolio Section
        "portfolio.title": "Proyek yang Sudah Dikerjakan",
        "portfolio.subtitle": "Sistem nyata yang sudah berjalan dan membantu bisnis klien",
        "portfolio.problemLabel": "Masalah:",
        "portfolio.fitLabel": "Cocok untuk:",
        "portfolio.techStack": "Tech Stack",
        "portfolio.downloadPortfolio": "Download Portfolio Lengkap",
        "portfolio.ctaText": "Ingin lihat detail lengkap setiap proyek?",
        "portfolio.ctaWa": "Tanya Langsung",
        "portfolio.boscod.title": "BOSCOD Platform",
        "portfolio.boscod.category": "Fintech & Logistik",
        "portfolio.boscod.problem": "<strong>Masalah:</strong> Rekonsiliasi pembayaran COD manual yang rawan error dan memakan waktu berjam-jam setiap hari.",
        "portfolio.boscod.result": "50.000+ transaksi/bulan berjalan otomatis. Kesalahan rekonsiliasi turun 60–75%.",
        "portfolio.boscod.fit": "Ekspedisi, Marketplace COD, Bisnis Online",
        "portfolio.esika.title": "E-SIKA Lomanis",
        "portfolio.esika.category": "Manajemen Izin Kerja",
        "portfolio.esika.problem": "<strong>Masalah:</strong> Proses pengajuan izin kerja masih manual via dokumen fisik, lambat, dan sulit dilacak statusnya.",
        "portfolio.esika.result": "Waktu persetujuan izin turun 50–70% untuk 100+ pengguna aktif.",
        "portfolio.esika.fit": "Perusahaan Manufaktur, Konstruksi, HR Digital",
        "portfolio.attendance.title": "Sistem Absensi & Penggajian – PKBM Permata Sunnah",
        "portfolio.attendance.category": "Absensi & Penggajian",
        "portfolio.attendance.problem": "<strong>Masalah:</strong> Pencatatan kehadiran dan penggajian 85 karyawan dilakukan manual di spreadsheet, rawan salah hitung dan memakan waktu tiap akhir bulan.",
        "portfolio.attendance.result": "Perhitungan payroll 85 karyawan selesai hanya dalam beberapa detik. Tidak ada lagi salah hitung manual.",
        "portfolio.attendance.fit": "Sekolah, Pesantren, Koperasi, Lembaga Pendidikan",

        // Testimonials Section
        "testimonials.title": "Dipercaya Klien",
        "testimonials.subtitle": "Apa kata mereka yang sudah bekerja sama",
        "testimonials.t1.quote": "\"Sistem absensi dan penggajian yang dibangun sangat membantu operasional kami. Proses yang biasanya butuh setengah hari kini selesai dalam hitungan menit.\"",
        "testimonials.t1.name": "Pimpinan PKBM Permata Sunnah",
        "testimonials.t1.role": "Lembaga Pendidikan, Jawa Timur",
        "testimonials.t2.quote": "\"Integrasi payment gateway yang dibangun sangat stabil. Rekonsiliasi yang dulu manual dan error-prone sekarang berjalan otomatis tanpa perlu campur tangan manual.\"",
        "testimonials.t2.name": "Tim Operasional BOSCOD",
        "testimonials.t2.role": "Platform Logistik & COD",
        "testimonials.t3.quote": "\"Proses pengajuan izin yang dulu butuh berlembar-lembar dokumen kini bisa diselesaikan lewat sistem. Approval yang bisa selesai dengan cepat dan tidak ribet.\"",
        "testimonials.t3.name": "Supervisor E-SIKA Lomanis",
        "testimonials.t3.role": "Perusahaan Enterprise",
        "trust.b1": "Kode Rapi & Terdokumentasi",
        "trust.b2": "Support Pasca-Launch",
        "trust.b3": "Estimasi Waktu Transparan",
        "trust.b4": "Keamanan Data Terjamin",

        // CTA Section
        "cta.title": "Punya Ide Sistem atau Masalah Bisnis yang Ingin Diselesaikan?",
        "cta.desc": "Konsultasi gratis, tidak ada kewajiban. Ceritakan kebutuhan kamu dan saya akan kasih gambaran solusi yang tepat.",
        "cta.f1": "Respons dalam 1 jam",
        "cta.f2": "Estimasi harga gratis",
        "cta.f3": "Tanpa ikatan kontrak awal",
        "cta.btn": "Mulai Konsultasi Gratis Sekarang",
        "cta.altDivider": "atau pilih cara lain yang lebih santai",
        "cta.emailLabel": "Kirim Email Langsung",
        "cta.responseNote": "Biasanya dibalas dalam 1–3 jam di hari kerja",

        // Contact Section
        "contact.title": "Hubungi Saya",
        "contact.subtitle": "Ada proyek atau pertanyaan? Saya siap bantu",
        "contact.area": "Area Layanan",
        "contact.remote": "(Remote untuk seluruh Indonesia)",
        "contact.followMe": "Temukan Saya di",
        "contact.form.name": "Nama Lengkap",
        "contact.form.email": "Email",
        "contact.form.business": "Nama Bisnis / Usaha",
        "contact.form.message": "Ceritakan Kebutuhanmu",
        "contact.form.send": "Kirim Pesan",
        "contact.form.note": "Atau langsung <a href=\"https://wa.me/6283832525360\" target=\"_blank\">chat WhatsApp</a> untuk respons lebih cepat",

        // Footer
        "footer.tagline": "Jasa Pembuatan Aplikasi Web & Sistem Bisnis",
        "footer.quickLinks": "Link Cepat",
        "footer.connect": "Terhubung",
        "footer.rights": "Hak Cipta Dilindungi.",
        "footer.ctaWa": "Konsultasi Gratis",

        // Floating WA
        "floatWa.tooltip": "Konsultasi Gratis!"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.skills": "Technology",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "nav.whatsapp": "WhatsApp",

        // Hero Section
        "hero.badge": "✅ Available for new projects",
        "hero.headline": "I Help Your Business <span class=\"hero-highlight\">Grow</span> with the Right System",
        "hero.description": "Built 5+ systems for SMEs, schools, and Indonesian startups. From digital payment systems, employee attendance, to custom business apps — I handle everything from start to finish.",
        "hero.stat1": "Systems Built",
        "hero.stat2": "Years Experience",
        "hero.stat3": "Industries Served",
        "hero.stat4": "On-Time Delivery",
        "hero.ctaWa": "Free Consultation via WhatsApp",
        "hero.ctaPortfolio": "View Portfolio",
        "hero.trust": "🔒 Free consultation, as much as you want",
        "hero.card1": "Payment Gateway Integrated",
        "hero.card2": "Attendance & Payroll System",

        // About Section
        "about.title": "About Me",
        "about.subtitle": "A technology consultant helping businesses grow with the right systems",
        "about.heading": "Hi, I'm Dwiky 👋",
        "about.paragraph1": "I'm a fullstack developer focused on helping SMEs, schools, clinics, and service businesses in Indonesia get systems that truly <strong>fit their needs</strong> — not off-the-shelf templates forced to fit.",
        "about.paragraph2": "My expertise is in building strong systems: payment systems that auto-sync without manual input, clean employee management from attendance to payslips, and platform integrations that make business operations far more efficient.",
        "about.h1title": "Payment Gateway & Fintech",
        "about.h1desc": "QRIS, Virtual Account, E-wallet automated integration",
        "about.h2title": "Employee & Payroll System",
        "about.h2desc": "Attendance, leave, automated payroll for hundreds of employees",
        "about.h3title": "System Integration & Automation",
        "about.h3desc": "Connecting existing platforms to sync automatically",
        "about.h4title": "Web App & Mobile-Friendly",
        "about.h4desc": "Accessible from phone, tablet, and computer seamlessly",
        "about.ctaWa": "Chat on WhatsApp Now",
        "about.downloadPortfolio": "Download Portfolio",

        // Services Section
        "services.title": "My Services",
        "services.subtitle": "Choose the solution that fits your business needs",
        "services.popular": "Most Popular",
        "services.fitLabel": "Best for:",
        "services.priceFrom": "Starting from",
        "services.priceFree": "Free Consultation",
        "services.cta": "Ask & Consult",
        "services.note": "All prices are initial estimates. Final price determined after discussing requirements. <strong>Consultation is free!</strong>",
        "services.s1.title": "Employee Management System",
        "services.s1.desc": "Attendance, leave, overtime, and automated payroll in one system. Perfect for companies with 10–500+ employees.",
        "services.s1.f1": "Attendance via QR scan / GPS",
        "services.s1.f2": "Automated salary & allowance calculation",
        "services.s1.f3": "Digital payslips & monthly reports",
        "services.s1.f4": "Real-time management dashboard",
        "services.s1.fit": "Schools, Islamic Boarding Schools, Cooperatives, Factories, Clinics",
        "services.s1.price": "Price based on requirements",
        "services.s2.title": "POS & Digital Payment System",
        "services.s2.desc": "Accept QRIS, Virtual Account, and E-wallet payments. Automatic reconciliation without manual input. For shops, stalls, and marketplaces.",
        "services.s2.f1": "QRIS, VA, E-wallet integration",
        "services.s2.f2": "Automatic transaction reconciliation",
        "services.s2.f3": "Daily/monthly sales reports",
        "services.s2.f4": "Real-time payment notifications",
        "services.s2.fit": "Online Stores, Courier Services, Marketplaces, COD Businesses",
        "services.s2.price": "Price based on requirements",
        "services.s3.title": "Custom Application",
        "services.s3.desc": "Have a unique system idea or business problem? I'll build it from scratch — from flow design, development, to deployment and maintenance.",
        "services.s3.f1": "Free business requirements analysis",
        "services.s3.f2": "Full-stack web app development",
        "services.s3.f3": "Mobile-friendly & responsive",
        "services.s3.f4": "Post-launch support & maintenance",
        "services.s3.fit": "Startups, Clinics, Service Businesses, Rentals, Property",
        "services.s3.price": "Price based on requirements",
        "services.s4.title": "System Integration & Connection",
        "services.s4.desc": "Already have systems that don't sync with each other? I'll connect your existing system with new platforms without discarding what you have.",
        "services.s4.f1": "API integration between platforms",
        "services.s4.f2": "Automatic data synchronization",
        "services.s4.f3": "Safe data migration",
        "services.s4.f4": "Performance optimization for existing systems",
        "services.s4.fit": "Businesses with 2+ separate systems, Retail, Logistics",
        "services.s4.price": "Price based on requirements",

        // Skills Section
        "skills.title": "Technologies Used",
        "skills.subtitle": "Proven tech stack I use to build your business systems",
        "skills.backend": "Backend & Framework",
        "skills.database": "Database & Cloud",
        "skills.frontend": "Frontend & UI",
        "skills.tools": "Integration & DevOps",

        // Portfolio Section
        "portfolio.title": "Projects I've Built",
        "portfolio.subtitle": "Real systems that are running and helping client businesses",
        "portfolio.problemLabel": "Problem:",
        "portfolio.fitLabel": "Best for:",
        "portfolio.techStack": "Tech Stack",
        "portfolio.downloadPortfolio": "Download Full Portfolio",
        "portfolio.ctaText": "Want to see the full details of each project?",
        "portfolio.ctaWa": "Ask Directly",
        "portfolio.boscod.title": "BOSCOD Platform",
        "portfolio.boscod.category": "Fintech & Logistics",
        "portfolio.boscod.problem": "<strong>Problem:</strong> Manual COD payment reconciliation was error-prone and took hours every day.",
        "portfolio.boscod.result": "50,000+ monthly transactions running automatically. Reconciliation errors reduced by 60–75%.",
        "portfolio.boscod.fit": "Courier Services, COD Marketplace, Online Businesses",
        "portfolio.esika.title": "E-SIKA Lomanis",
        "portfolio.esika.category": "Work Permit Management",
        "portfolio.esika.problem": "<strong>Problem:</strong> Work permit applications were still manual via physical documents, slow and hard to track.",
        "portfolio.esika.result": "Permit approval time reduced by 50–70% for 100+ active users.",
        "portfolio.esika.fit": "Manufacturing, Construction, Digital HR",
        "portfolio.attendance.title": "Attendance & Payroll System – PKBM Permata Sunnah",
        "portfolio.attendance.category": "Attendance & Payroll",
        "portfolio.attendance.problem": "<strong>Problem:</strong> Attendance and payroll tracking for 85 employees was done manually in spreadsheets, prone to miscalculation every month.",
        "portfolio.attendance.result": "Payroll calculation for 85 employees completed in 4.22 seconds. No more manual miscalculations.",
        "portfolio.attendance.fit": "Schools, Islamic Boarding Schools, Cooperatives, Educational Institutions",

        // Testimonials Section
        "testimonials.title": "Trusted by Clients",
        "testimonials.subtitle": "What those who have worked with me say",
        "testimonials.t1.quote": "\"The attendance and payroll system built is very helpful for our operations. A process that used to take half a day is now done in minutes.\"",
        "testimonials.t1.name": "Head of PKBM Permata Sunnah",
        "testimonials.t1.role": "Educational Institution, East Java",
        "testimonials.t2.quote": "\"The payment gateway integration built is very stable. Reconciliation that used to be manual and error-prone now runs automatically without manual intervention.\"",
        "testimonials.t2.name": "BOSCOD Operations Team",
        "testimonials.t2.role": "Logistics & COD Platform",
        "testimonials.t3.quote": "\"The permit application process that used to require stacks of documents can now be completed through the system. Approvals that took 3 days can now be done in hours.\"",
        "testimonials.t3.name": "Supervisor E-SIKA Lomanis",
        "testimonials.t3.role": "Enterprise Company",
        "trust.b1": "Clean & Documented Code",
        "trust.b2": "Post-Launch Support",
        "trust.b3": "Transparent Timeline Estimates",
        "trust.b4": "Data Security Guaranteed",

        // CTA Section
        "cta.title": "Have a System Idea or Business Problem to Solve?",
        "cta.desc": "Free consultation, no obligation. Tell me your needs and I'll outline the right solution.",
        "cta.f1": "Response within 1 hour",
        "cta.f2": "Free price estimate",
        "cta.f3": "No upfront contract",
        "cta.btn": "Start Free Consultation Now",
        "cta.altDivider": "or choose a more relaxed way to reach me",
        "cta.emailLabel": "Send Email Directly",
        "cta.responseNote": "Usually replied within 1–3 hours on working days",

        // Contact Section
        "contact.title": "Contact Me",
        "contact.subtitle": "Have a project or question? I'm ready to help",
        "contact.area": "Service Area",
        "contact.remote": "(Remote for all of Indonesia)",
        "contact.followMe": "Find Me On",
        "contact.form.name": "Full Name",
        "contact.form.email": "Email",
        "contact.form.business": "Business / Company Name",
        "contact.form.message": "Tell Me Your Needs",
        "contact.form.send": "Send Message",
        "contact.form.note": "Or directly <a href=\"https://wa.me/6283832525360\" target=\"_blank\">chat on WhatsApp</a> for faster response",

        // Footer
        "footer.tagline": "Web Application & Business System Services",
        "footer.quickLinks": "Quick Links",
        "footer.connect": "Connect",
        "footer.rights": "All Rights Reserved.",
        "footer.ctaWa": "Free Consultation",

        // Floating WA
        "floatWa.tooltip": "Free Consultation!"
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
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML for elements that contain HTML
            const htmlKeys = [
                'about.paragraph1', 'about.paragraph2',
                'portfolio.boscod.problem', 'portfolio.esika.problem', 'portfolio.attendance.problem',
                'services.note', 'contact.form.note', 'hero.headline', 'cta.responseNote'
            ];
            if (htmlKeys.includes(key)) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
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
            business: "Contoh: Toko Maju Jaya, Sekolah ABC",
            message: "Contoh: Saya butuh sistem absensi untuk 50 karyawan..."
        },
        en: {
            name: "Enter your name",
            email: "Enter your email",
            business: "E.g.: ABC School, Maju Jaya Store",
            message: "E.g.: I need an attendance system for 50 employees..."
        }
    };

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const businessInput = document.getElementById('business');
    const messageInput = document.getElementById('message');

    if (nameInput) nameInput.placeholder = placeholders[lang].name;
    if (emailInput) emailInput.placeholder = placeholders[lang].email;
    if (businessInput) businessInput.placeholder = placeholders[lang].business;
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
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert(currentLang === 'id' ? 'Mohon lengkapi nama, email, dan pesan Anda.' : 'Please fill in your name, email, and message.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert(currentLang === 'id' ? 'Mohon masukkan email yang valid.' : 'Please enter a valid email address.');
            return;
        }

        // Build WhatsApp message and redirect
        const waMessage = encodeURIComponent(
            `Halo Dwiky, saya tertarik dengan jasa anda. Saya ${data.name}` +
            (data.business ? ` dari ${data.business}` : '') +
            `.\n\n${data.message}\n\nEmail: ${data.email}`
        );

        const submitBtn = document.getElementById('contactSubmitBtn');
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'id' ? 'Membuka WhatsApp...' : 'Opening WhatsApp...');
            submitBtn.disabled = true;

            setTimeout(() => {
                window.open(`https://wa.me/6283832525360?text=${waMessage}`, '_blank');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 800);
        }
    });
}

// =========================================
// Animation on Scroll
// =========================================
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.dataset.seen = 'true'; // mark as seen so tab filter knows
            observer.unobserve(entry.target);   // stop observing once visible
        }
    });
}, observerOptions);

// Apply animation to sections and cards (exclude service-cards — tab filter handles them)
document.querySelectorAll('section, .portfolio-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Service cards: subtle initial state managed by CSS, not inline observer
document.querySelectorAll('.service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // Short delay so page load feels smooth
    setTimeout(() => {
        if (!el.classList.contains('hidden')) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.dataset.seen = 'true';
        }
    }, 100);
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
    // Set dynamic copyright year
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        switchLanguage('id');
    }
});

// =========================================
// Utility Functions
// =========================================
function comingSoon() {
    alert(currentLang === 'id' ? 'Detail proyek segera hadir!' : 'Project details coming soon!');
}

// =========================================
// Service Tab Filter
// =========================================
(function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab');
    const cards = document.querySelectorAll('#servicesGrid .service-card');
    const countEl = document.getElementById('serviceCount');

    if (!tabs.length || !cards.length) return;

    // Add empty state element to grid
    const grid = document.getElementById('servicesGrid');
    let emptyEl = document.querySelector('.services-empty');
    if (!emptyEl && grid) {
        emptyEl = document.createElement('div');
        emptyEl.className = 'services-empty';
        emptyEl.innerHTML = '<i class="fas fa-search"></i>Tidak ada layanan di kategori ini';
        grid.appendChild(emptyEl);
    }

    function updateCount(filter) {
        if (!countEl) return;
        const total = cards.length;
        if (filter === 'all') {
            countEl.textContent = `Menampilkan semua ${total} layanan`;
        } else {
            const visible = [...cards].filter(c => c.dataset.category === filter).length;
            const labelMap = {
                sistem: 'Sistem & Manajemen',
                website: 'Website & Landing Page',
                platform: 'Platform Khusus',
                integrasi: 'Integrasi & Custom'
            };
            countEl.textContent = `${visible} layanan ditemukan dalam kategori "${labelMap[filter] || filter}"`;
        }
    }

    function filterCards(filter) {
        let visibleCount = 0;

        cards.forEach((card) => {
            const match = filter === 'all' || card.dataset.category === filter;
            if (match) {
                card.classList.remove('hidden');
                // Clear inline observer styles so CSS animation takes over
                card.style.opacity = '';
                card.style.transform = '';
                card.style.transition = '';
                // Stagger animation
                card.style.animationDelay = (visibleCount * 40) + 'ms';
                card.classList.remove('fade-in');
                void card.offsetWidth; // trigger reflow
                card.classList.add('fade-in');
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('fade-in');
            }
        });

        // Show/hide empty state
        if (emptyEl) {
            emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        updateCount(filter);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            filterCards(filter);
        });
    });

    // Init count on page load
    updateCount('all');
})();