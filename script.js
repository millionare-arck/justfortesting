// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');
    const contactForm = document.getElementById('contact-form');
    const formMessageBox = document.getElementById('form-message-box');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Toggle mobile menu visibility
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server.
        // For this example, we'll just log the data and show a success message.
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Submitted:', data);

        contactForm.reset(); // Reset the form
        formMessageBox.classList.remove('hidden'); // Show the message box
        
        // Hide the message box after a few seconds
        setTimeout(() => {
            formMessageBox.classList.add('hidden');
        }, 5000);
    });
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
