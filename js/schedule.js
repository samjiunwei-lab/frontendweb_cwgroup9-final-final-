/* ==========================================================================
   UTAR E-Sports Club - Schedule Page Logic (schedule.js)
   Features: Front-end table filtering + Cookie-based preference memory
   ========================================================================== */

$(document).ready(function () {
    
    // 1. Set Cookie function (name, value, expiration days)
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // 2. Read Cookie function
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // 3. Table filtering execution function
    function filterSchedule(gameName) {
        $('table tbody tr').each(function () {
            let gameCell = $(this).find('td:nth-child(2)').text().trim();
            
            if (gameName === "All Games" || gameName === "" || gameCell.includes(gameName)) {
                $(this).fadeIn(200);
            } else {
                $(this).fadeOut(200);
            }
        });
    }

    // 4. Listen for filter button click events
    $('.btn-cyber, .btn-cyber-cyan').click(function () {
        // Ensure click originates from the filter container
        if ($(this).parent().hasClass('col-12')) {
            // Toggle button highlight styles
            $(this).siblings().removeClass('btn-cyber-cyan active').addClass('btn-cyber');
            $(this).removeClass('btn-cyber').addClass('btn-cyber-cyan active');

            let selectedGame = $(this).text().trim();

            // Filter schedule table
            filterSchedule(selectedGame);

            // Save preference to Cookie (expires in 7 days)
            setCookie("preferred_game", selectedGame, 7);
        }
    });

    // 5. On initial page load: Read Cookie and restore previous filter selection
    let savedGame = getCookie("preferred_game");
    if (savedGame) {
        // Find matching button and trigger click
        $(`.col-12 button`).each(function () {
            if ($(this).text().trim() === savedGame) {
                $(this).click();
            }
        });
    }
});