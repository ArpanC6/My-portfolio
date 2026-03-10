const bankImages = [
    'Bank/WhatsApp Image 2026-01-04 at 17.55.38 - Copy.jpeg',
    'Bank/Screenshot (760).png',
    'Bank/Screenshot (761).png'
];

const bank1Images = [
    'Bank1/diagram-export-13-1-2026-11_32_50-am.png',
    'Bank1/Screenshot (1122).png',
    'Bank1/Screenshot (1123).png',
    'Bank1/Screenshot (1124).png',
    'Bank1/Screenshot (1104).png',
    'Bank1/Screenshot (1125).png',
    'Bank1/Screenshot (1126).png',
    'Bank1/Screenshot (906).png',
    'Bank1/Screenshot (907).png',
    'Bank1/Screenshot (908).png',
    'Bank1/Screenshot (910).png',
    'Bank1/Screenshot (1102).png',
    'Bank1/Screenshot (1103).png'
];

const studentImages = [
    'Student/1767539595151.jpg',
    'Student/1767513442402.jpg',
    'Student/1767513473592.jpg',
    'Student/1767513509833.jpg',
    'Student/1767513631572.jpg',
    'Student/1767513676870.jpg'
];

const employeeImages = [
    'Employee/diagram-export-1-6-2026-9_41_42-PM.png',
    'Employee/Screenshot (845).png',
    'Employee/Screenshot (846).png',
    'Employee/Screenshot (847).png',
    'Employee/Screenshot (848).png',
    'Employee/Screenshot (815).png',
    'Employee/Screenshot (816).png',
    'Employee/Screenshot (817).png',
    'Employee/Screenshot (832).png',
    'Employee/Screenshot (833).png'
];

const hackathonImages = [
    'Hackathon/WhatsApp Image 2026-02-11 at 10.29.29 AM.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 10.29.29 AM1.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 10.29.30 AM.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 10.29.31 AM.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 12.22.54 PM.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 12.22.54 PM1.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 12.22.55  PM.jpeg',
    'Hackathon/WhatsApp Image 2026-02-11 at 12.22.55 PM.jpeg'
];

const skillbridgeImages = [
    'SkillBridge/Screenshot (2230).png',
    'SkillBridge/Screenshot (2231).png',
    'SkillBridge/Screenshot (2232).png',
    'SkillBridge/Screenshot (2233).png',
    'SkillBridge/Screenshot (2234).png',
    'SkillBridge/Screenshot (2235).png',
    'SkillBridge/Screenshot (2236).png',
    'SkillBridge/Screenshot (2237).png',
    'SkillBridge/Screenshot (2238).png',
    'SkillBridge/Screenshot (2239).png',
    'SkillBridge/f1830fbe-6107-4fdb-b3d8-61c5592c8deb.png'
];

let currentProject = '';
let currentImageIndex = 0;
let currentImages = [];

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateLightboxImage();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeLightboxImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    const title = document.getElementById('lightbox-title');

    img.src = currentImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;

    if (currentProject === 'bank') {
        title.textContent = 'Bank Management System (Original) - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'bank1') {
        title.textContent = 'Bank Management System (Upgraded) - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'student') {
        title.textContent = 'Student Management System - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'employee') {
        title.textContent = 'Employee Management System - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'hackathon') {
        const titles = [
            'Participation Certificate',
            '2nd Position Certificate',
            'Prize Certificate (₹15,000)',
            'Trophy',
            'Team Celebration',
            'With Judges - Photo 1',
            'With Judges - Photo 2',
            'With Judges - Photo 3'
        ];
        title.textContent = 'HyperSpace Hackathon 2026 - ' + titles[currentImageIndex];
    } else if (currentProject === 'skillbridge') {
    const titles = [
    'Home Page',
    'Features Section',
    'Internship Finder',
    'Internship Cards',
    'More Platforms',
    'Sign In Page',
    'AI Roadmap Dashboard',
    'Skill Gap Analysis',
    'Progress Tracker',
    'Job Search',
    'Architecture Diagram'
];
        title.textContent = 'SkillBridge — ' + titles[currentImageIndex];
    }
}

window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.thumbnail-item, .hackathon-thumb-item').forEach(item => {
        item.addEventListener('click', function() {
            currentProject = this.dataset.project;
            currentImageIndex = parseInt(this.dataset.index);

            if (currentProject === 'bank') {
                currentImages = bankImages;
            } else if (currentProject === 'bank1') {
                currentImages = bank1Images;
            } else if (currentProject === 'student') {
                currentImages = studentImages;
            } else if (currentProject === 'employee') {
                currentImages = employeeImages;
            } else if (currentProject === 'hackathon') {
                currentImages = hackathonImages;
            } else if (currentProject === 'skillbridge') {
                currentImages = skillbridgeImages;
            }

            openLightbox();
        });
    });

    document.querySelectorAll('.project-hero-image').forEach(hero => {
        hero.addEventListener('click', function() {
            const firstThumb = this.closest('.project-card').querySelector('.thumbnail-item');
            if (firstThumb) firstThumb.click();
        });
    });

    document.querySelectorAll('.big-thumbnail-preview').forEach(item => {
        item.addEventListener('click', function() {
            currentProject = this.dataset.project;
            currentImageIndex = parseInt(this.dataset.index);
            if (currentProject === 'bank1') {
                currentImages = bank1Images;
            }
            openLightbox();
        });
    });

    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => changeLightboxImage(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeLightboxImage(1));

    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            if (e.key === 'Escape') { closeLightbox(); closeCertLightbox(); }
            if (e.key === 'ArrowLeft') changeLightboxImage(-1);
            if (e.key === 'ArrowRight') changeLightboxImage(1);
        }
    });

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    [...bankImages, ...bank1Images, ...studentImages, ...employeeImages, ...hackathonImages, ...skillbridgeImages].forEach(src => {
        const img = new Image();
        img.src = src;
    });

    console.log('%c Portfolio Website Loaded Successfully!', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
    console.log('%c SkillBridge: 12 screenshots added', 'color: #a78bfa; font-size: 14px;');
});
function openCertLightbox() {
    document.getElementById('cert-lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
    document.getElementById('cert-lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}