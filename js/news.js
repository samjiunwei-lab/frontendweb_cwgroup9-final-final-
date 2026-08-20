/* ==========================================================================
   UTAR E-Sports Club - News Page Logic (news.js)
   Feature: jQuery AJAX call to real esports API for fetching latest gaming news
   ========================================================================== */

$(document).ready(function () {

    // Core AJAX function: Fetch real esports and gaming news
    function fetchGamingNews() {
        $('#api-loading').show(); // Show loading animation

        $.ajax({
            // Using MMOBomb free esports/gaming news API
            url: 'https://www.mmobomb.com/api1/latestnews',
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                $('#api-loading').hide(); // Hide loading indicator

                // Get top 3 latest esports/gaming news items
                let newsItems = response.slice(0, 3);

                // Iterate through data and append to page
                newsItems.forEach(item => {
                    let cardHtml = `
                        <div class="cyber-card mb-4 dynamic-news" style="display:none;">
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <img src="${item.thumbnail}" class="img-fluid rounded" alt="Gaming News" style="height: 100%; object-fit: cover; min-height: 140px; width: 100%;">
                                </div>
                                <div class="col-md-8 d-flex flex-column justify-content-between">
                                    <div>
                                        <span class="text-muted small">
                                            <i class="fa-solid fa-gamepad me-1" style="color: var(--neon-cyan);"></i> ${item.main_game || 'Esports Update'}
                                        </span>
                                        <h4 class="cyber-card-title mt-1">${item.title}</h4>
                                        <p class="small text-light-50">${item.short_description}</p>
                                    </div>
                                    <div>
                                        <a href="${item.article_url}" target="_blank" class="btn btn-cyber-cyan btn-sm">Read Full Esports News</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    // Dynamically prepend to #news-container with a smooth fade-in effect
                    $('#news-container').prepend($(cardHtml).fadeIn(500));
                });
            },
            error: function (xhr, status, error) {
                $('#api-loading').hide();
                console.warn("API Failed!", error);
                // Fallback: If API request fails or is slow, the static news in news.html will display to keep the page populated
            }
        });
    }

    // Automatically trigger API fetch once DOM content is ready
    fetchGamingNews();
});