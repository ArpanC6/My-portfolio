// Image arrays for different projects
const bankImages = [
    'Bank/WhatsApp Image 2026-01-04 at 17.55.38 - Copy.jpeg',
    'Bank/Screenshot (760).png',
    'Bank/Screenshot (761).png'
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

// Global variables for lightbox state
let currentProject = '';
let currentImageIndex = 0;
let currentImages = [];

// Function to open lightbox
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateLightboxImage();
}

// Function to close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to change image in lightbox
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

// Function to update lightbox image
function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    const title = document.getElementById('lightbox-title');
    
    img.src = currentImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
    
    if (currentProject === 'bank') {
        title.textContent = 'Bank Management System - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'student') {
        title.textContent = 'Student Management System - Screenshot ' + (currentImageIndex + 1);
    } else if (currentProject === 'employee') {
        title.textContent = 'Employee Management System - Screenshot ' + (currentImageIndex + 1);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    // Setup thumbnail click events
    document.querySelectorAll('.thumbnail-item').forEach(item => {
        item.addEventListener('click', function() {
            currentProject = this.dataset.project;
            currentImageIndex = parseInt(this.dataset.index);
            
            if (currentProject === 'bank') {
                currentImages = bankImages;
            } else if (currentProject === 'student') {
                currentImages = studentImages;
            } else if (currentProject === 'employee') {
                currentImages = employeeImages;
            }
            
            openLightbox();
        });
    });

    // Also allow clicking hero image to open first thumbnail gallery
    document.querySelectorAll('.project-hero-image').forEach(hero => {
        hero.addEventListener('click', function() {
            const firstThumb = this.closest('.project-card').querySelector('.thumbnail-item');
            if (firstThumb) firstThumb.click();
        });
    });

    // Lightbox buttons
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => changeLightboxImage(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => changeLightboxImage(1));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('lightbox').style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') changeLightboxImage(-1);
            if (e.key === 'ArrowRight') changeLightboxImage(1);
        }
    });

    // Close on background click
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Preload images
    [...bankImages, ...studentImages, ...employeeImages].forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

console.log('%c Portfolio Website Loaded Successfully!', 'color: #00f0ff; font-size: 20px; font-weight: bold;');