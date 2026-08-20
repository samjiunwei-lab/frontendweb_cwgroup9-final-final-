document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------
  // Rebuild every hover-preview badge row from the SAME esportsData
  // used by team-detail.html (js/esports-data.js), instead of any
  // hand-typed badges baked into the HTML — those drift out of sync
  // with the real roster count every time a team is added/removed on
  // the detail page. Always shows up to 3 real teams, plus a "+N more"
  // badge if the game has more than 3.
  // ------------------------------------------------------------------
  function renderTeamPreviews() {
    if (typeof esportsData === 'undefined') return; // esports-data.js didn't load

    document.querySelectorAll('.featured-card').forEach(card => {
      const preview = card.querySelector('.team-preview');
      if (!preview) return;

      // Pull the game key straight from this card's own link, e.g.
      // "team-detail.html?game=valorant" -> "valorant" — guarantees the
      // badges always match whichever game the card actually links to
      const href = card.getAttribute('href') || '';
      const match = href.match(/[?&]game=([^&]+)/);
      const gameKey = match ? decodeURIComponent(match[1]) : null;
      const game = gameKey ? esportsData[gameKey] : null;

      if (!game || !Array.isArray(game.teams) || game.teams.length === 0) {
        return; // leave whatever was already there rather than showing nothing
      }

      const teams = game.teams;
      const shown = teams.slice(0, 3);
      const remaining = teams.length - shown.length;

      preview.innerHTML = shown.map(t => `
        <div class="team-badge">
          <img src="${t.logo}" alt="${t.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/initials/svg?backgroundColor=0d1117&textColor=00f5d4&fontWeight=700&seed=${encodeURIComponent(t.name)}'">
          <span>${t.name}</span>
        </div>
      `).join('') + (remaining > 0 ? `
        <div class="team-badge">
          <div class="team-badge-more-icon">+${remaining}</div>
          <span>More teams</span>
        </div>
      ` : '');
    });
  }

  renderTeamPreviews();

  // ------------------------------------------------------------------
  const searchInput = document.getElementById('gameSearchInput');
  const sections = [
    { section: document.getElementById('popularGamesSection'), heading: document.getElementById('popularGamesHeading'), defaultTitle: 'Popular Games' },
    { section: document.getElementById('otherGamesSection'), heading: document.getElementById('otherGamesHeading'), defaultTitle: 'Mobile Games' }
  ];
  const ctaBanner = document.getElementById('ctaBanner');
  const infoText = document.getElementById('infoText');
  const noResultsState = document.getElementById('noResultsState');

  function runSearch() {
    const query = searchInput.value.trim().toLowerCase();
    let totalVisible = 0;

    if (!query) {
      document.querySelectorAll('.featured-card').forEach(card => card.style.display = '');
      sections.forEach(s => {
        if (s.section) s.section.style.display = '';
        if (s.heading) {
          s.heading.style.display = '';
          s.heading.textContent = s.defaultTitle;
        }
      });
      if (ctaBanner) ctaBanner.style.display = '';
      if (infoText) infoText.style.display = '';
      if (noResultsState) noResultsState.style.display = 'none';
      return;
    }

    if (ctaBanner) ctaBanner.style.display = 'none';
    if (infoText) infoText.style.display = 'none';

    sections.forEach(s => {
      if (!s.section) return;
      const cards = s.section.querySelectorAll('.featured-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const isMatch = name.includes(query);
        card.style.display = isMatch ? '' : 'none';
        if (isMatch) visibleCount++;
      });

      totalVisible += visibleCount;

      if (visibleCount > 0) {
        s.section.style.display = '';
        if (s.heading) {
          s.heading.style.display = '';
          s.heading.textContent = s.defaultTitle;
        }
      } else {
        s.section.style.display = 'none';
      }
    });

    if (noResultsState) {
      noResultsState.style.display = totalVisible === 0 ? 'flex' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', runSearch);
  }

  let selectedGameKey = 'valorant';
  let selectedGameTitle = 'Valorant';

  const track = document.getElementById('gameSliderTrack');
  const slideLeftBtn = document.getElementById('slideLeft');
  const slideRightBtn = document.getElementById('slideRight');
  const selectedGameLabel = document.getElementById('selectedGameLabel');
  const btnGameName = document.getElementById('btnGameName');
  const registerSquadActionBtn = document.getElementById('registerSquadActionBtn');

  if (slideLeftBtn && track) {
    slideLeftBtn.addEventListener('click', () => {
      track.scrollBy({ left: -288, behavior: 'smooth' });
    });
  }

  if (slideRightBtn && track) {
    slideRightBtn.addEventListener('click', () => {
      track.scrollBy({ left: 288, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.slider-game-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.slider-game-item').forEach(el => el.classList.remove('active'));
      this.classList.add('active');

      selectedGameKey = this.dataset.gameKey;
      selectedGameTitle = this.dataset.gameTitle;

      if (selectedGameLabel) selectedGameLabel.textContent = selectedGameTitle;
      if (btnGameName) btnGameName.textContent = selectedGameTitle;
    });
  });

  function checkCookieAuth() {
    return document.cookie.includes("gamerName=");
  }

  if (registerSquadActionBtn) {
    registerSquadActionBtn.addEventListener('click', function() {
      const targetUrl = `register-squad.html?game=${encodeURIComponent(selectedGameKey)}`;

      if (!checkCookieAuth()) {
        sessionStorage.setItem('returnAfterLogin', targetUrl);
        alert(`Please log in to register your squad for ${selectedGameTitle}. Redirecting...`);
        window.location.href = 'login.html';
      } else {
        window.location.href = targetUrl;
      }
    });
  }
});