/**
 * UTAR E-Sports Club - About Us Page Script
 * File: js/about.js
 */

document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------------------
    // 1. Development History/Milestones – Scrolling Fade-in Display (Scroll Reveal Animation)
    // ----------------------------------------------------
    const timelineItems = document.querySelectorAll('.timeline-item, .about-card');

    function revealOnScroll() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.85;

            if (itemTop < triggerBottom) {
                item.classList.add('fade-in-active');
            }
        });
    }

    // Initialize styles and listeners
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
    });

    // Dynamically inject and activate CSS rules
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initialization check

    // ----------------------------------------------------
    // 2. Team member card interaction cues (Executive Committee Filter/Hover)
    // ----------------------------------------------------
    const memberCards = document.querySelectorAll('.committee-card');
    
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--neon-cyan, #00f0ff)';
            this.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(0, 240, 255, 0.2)';
            this.style.boxShadow = 'none';
        });
    });
});