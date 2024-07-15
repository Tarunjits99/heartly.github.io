// scripts.js
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.navbar-item a[href^="#"]');
const closeButtons = document.querySelectorAll('.close');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
        event.preventDefault();
        const targetModal = document.querySelector(trigger.getAttribute('href'));
        if (targetModal) {
            targetModal.style.display = 'block';
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => modal.style.display = 'none');
    });
});

window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        modals.forEach(modal => modal.style.display = 'none');
    }
});
