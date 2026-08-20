/**
 * UTAR E-Sports Club - Index Page Script
 * File: js/index.js
 */

document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------------------
    // 1. Highlight Video Playlist Switcher
    // ----------------------------------------------------
    const videoIframe = document.getElementById('highlightVideo');
    const playlistItems = document.querySelectorAll('.playlist-group .list-group-item');

    if (playlistItems.length > 0 && videoIframe) {
        playlistItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                // Get bound video URL (from onclick or data-src attribute)
                let videoUrl = this.getAttribute('data-video-src');
                if (!videoUrl) return;

                // Convert YouTube Shorts or standard URL to Embed URL
                if (videoUrl.includes('shorts/')) {
                    videoUrl = videoUrl.replace('shorts/', 'embed/').split('?')[0];
                } else if (videoUrl.includes('watch?v=')) {
                    videoUrl = videoUrl.replace('watch?v=', 'embed/').split('&')[0];
                }

                // Add smooth fade-in / fade-out effect
                videoIframe.style.opacity = '0.3';
                setTimeout(() => {
                    videoIframe.src = videoUrl;
                    videoIframe.style.opacity = '1';
                }, 200);

                // Toggle active UI style
                playlistItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // ----------------------------------------------------
    // 2. EWC Style Stat Counter Animation
    // ----------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    const banner = document.querySelector('.stats-banner');

    // FIX: Extracted single number animation logic into a standalone function for easier IntersectionObserver invocation
    // FIX: Used requestAnimationFrame instead of setInterval to sync animation rhythm with browser refresh rate,
    //      preventing stuttering caused by main-thread competition from VANTA background animation on the same page
    function animateStat(stat) {
        const targetText = stat.innerText;
        const match = targetText.match(/[\d,]+/); // Extract numeric value
        if (!match) return;

        const targetNum = parseInt(match[0].replace(/,/g, ''), 10);
        const prefix = targetText.split(match[0])[0] || '';
        const suffix = targetText.split(match[0])[1] || '';

        const duration = 1500; // Animation duration set to 1.5s
        let startTime = null;

        // FIX: Calculate progress (0~1) using timestamps instead of fixed step increments;
        //      even if frames drop, the next frame automatically catches up to ensure smoother number growth
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentNum = Math.floor(progress * targetNum);
            stat.innerText = `${prefix}${currentNum.toLocaleString()}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                // FIX: Force assign precise target value at completion to avoid Math.floor rounding issues (e.g., stopping at 14999)
                stat.innerText = `${prefix}${targetNum.toLocaleString()}${suffix}`;
            }
        }

        requestAnimationFrame(step);
    }

    if (banner && statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(stat => animateStat(stat));
                    observer.unobserve(banner);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(banner);
    }
});