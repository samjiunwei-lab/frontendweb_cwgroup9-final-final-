// esportsData now lives in js/esports-data.js (shared with teams.html).
// Make sure that script tag is included BEFORE this file in team-detail.html.

const GAME_PICKER = [
  { key: "valorant", label: "Valorant", icon: "images/logo-valorant.png" },
  { key: "lol", label: "League of Legends", icon: "images/logo-lol.png" },
  { key: "identity", label: "Identity V", icon: "images/logo-identity.jpg" },
  { key: "csgo", label: "Counter-Strike 2", icon: "images/logo-counter.png" },
  { key: "dota2", label: "Dota 2", icon: "images/logo-dota2.png" },
  { key: "minecraft", label: "Minecraft", icon: "images/logo-minecraft.png" },
  { key: "mobile", label: "Mobile Legends", icon: "images/logo-mobile.jpg" },
  { key: "pubg", label: "PUBG Mobile", icon: "images/logo-pubg.jpg" },
  { key: "brawl", label: "Brawl Stars", icon: "images/logo-brawl.png" },
  { key: "hok", label: "Honor of Kings", icon: "images/logo-hok.jpg" }
];

const GAME_HERO_BG = {
  valorant: "images/hero-bg/valorant.jpeg",
  lol: "images/hero-bg/lol.jpg",
  identity: "images/hero-bg/identity.jpg",
  csgo: "images/hero-bg/csgo.webp",
  dota2: "images/hero-bg/dota2.jpg",
  minecraft: "images/hero-bg/minecraft.png",
  mobile: "images/hero-bg/mobile.jpg",
  pubg: "images/hero-bg/pubg.jpg",
  brawl: "images/hero-bg/brawl.jpg",
  hok: "images/hero-bg/hok.jpg",
};

/**
 * Prompts an error modal/alert when a team's website link is broken, 
 * outdated, or set to placeholder '#'.
 */
function showOutdatedWebsiteModal(teamName) {
  let modalWrapper = document.getElementById('websiteErrorModalWrapper');
  if (!modalWrapper) {
    modalWrapper = document.createElement('div');
    modalWrapper.id = 'websiteErrorModalWrapper';
    modalWrapper.innerHTML = `
      <div class="modal fade" id="deadLinkModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light border-danger">
            <div class="modal-header border-secondary">
              <h5 class="modal-title text-danger">
                <i class="fa-solid fa-triangle-exclamation me-2"></i> Website Link Outdated
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center py-4">
              <i class="fa-solid fa-globe fa-3x text-warning mb-3"></i>
              <p class="mb-2 fw-bold fs-5 text-white" id="deadLinkTeamName">Team Website</p>
              <p class="text-muted small mb-0">
                The official website link for this team is currently outdated, broken, or unavailable.
              </p>
            </div>
            <div class="modal-footer border-secondary justify-content-center">
              <button type="button" class="btn btn-outline-light btn-sm px-4 rounded-pill" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalWrapper);
  }

  const teamNameSpan = document.getElementById('deadLinkTeamName');
  if (teamNameSpan) teamNameSpan.textContent = teamName ? `${teamName} Official Website` : 'Official Website';

  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    const bsModal = new bootstrap.Modal(document.getElementById('deadLinkModal'));
    bsModal.show();
  } else {
    alert(`The official website link for ${teamName || 'this team'} is currently outdated or unavailable.`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const gameKey = urlParams.get('game') || 'valorant';
  const currentGame = esportsData[gameKey] || esportsData['valorant'];
  const resolvedKey = esportsData[gameKey] ? gameKey : 'valorant';

  const gameTitleEl = document.getElementById('gameTitle');
  if (gameTitleEl) {
    gameTitleEl.textContent = currentGame.name;
  }

  document.title = `${currentGame.name} Teams | UTAR Esports`;

  const heroBgPath = GAME_HERO_BG[resolvedKey];
  if (heroBgPath) {
    document.documentElement.style.setProperty('--hero-bg-image', `url('${heroBgPath}')`);
  } else {
    document.documentElement.style.removeProperty('--hero-bg-image');
  }

  const gameSubtitleEl = document.getElementById('gameSubtitle');
  if (gameSubtitleEl) {
    gameSubtitleEl.textContent = `${currentGame.teams.length} professional teams competing in ${currentGame.name}.`;
  }

  // ------------------------------------------------------------------
  // Register Squad CTA
  // ------------------------------------------------------------------
  const btnGameNameEl = document.getElementById('btnGameName');
  if (btnGameNameEl) {
    btnGameNameEl.textContent = currentGame.name;
  }

  function checkCookieAuth() {
    return document.cookie.includes("gamerName=");
  }

  const registerSquadActionBtn = document.getElementById('registerSquadActionBtn');
  if (registerSquadActionBtn) {
    registerSquadActionBtn.addEventListener('click', function () {
      const targetUrl = `register-squad.html?game=${encodeURIComponent(resolvedKey)}`;

      if (!checkCookieAuth()) {
        sessionStorage.setItem('returnAfterLogin', targetUrl);
        alert(`Please log in to register your squad for ${currentGame.name}. Redirecting...`);
        window.location.href = 'login.html';
      } else {
        window.location.href = targetUrl;
      }
    });
  }

  const grid = document.getElementById('teamsGrid');
  const emptyStateEl = document.getElementById('teamsEmptyState');
  const nameInput = document.getElementById('teamNameSearch');
  const countryInput = document.getElementById('teamCountrySearch');

  const SOCIAL_PLATFORMS = [
    { key: "facebook", icon: "fa-brands fa-facebook-f", label: "Facebook" },
    { key: "twitter", icon: "fa-brands fa-x-twitter", label: "Twitter / X" },
    { key: "youtube", icon: "fa-brands fa-youtube", label: "YouTube" },
    { key: "discord", icon: "fa-brands fa-discord", label: "Discord" },
    { key: "instagram", icon: "fa-brands fa-instagram", label: "Instagram" }
  ];

  function renderSocialsRow(socials) {
    if (!socials) return '';
    const links = SOCIAL_PLATFORMS
      .filter(p => socials[p.key])
      .map(p => `<a href="${socials[p.key]}" target="_blank" rel="noopener noreferrer" class="pro-team-social-icon" aria-label="${p.label}" title="${p.label}"><i class="${p.icon}"></i></a>`)
      .join('');

    if (!links) return '';
    return `<div class="pro-team-socials"><span class="pro-team-socials-label">Social:</span>${links}</div>`;
  }

  function renderTeams(list) {
    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyStateEl) emptyStateEl.style.display = 'flex';
      return;
    }
    if (emptyStateEl) emptyStateEl.style.display = 'none';

    grid.innerHTML = list.map(t => `
      <div class="pro-team-card">
        <div>
          <div class="pro-team-header">
            <div class="pro-team-icon">
              <img src="${t.logo}" alt="${t.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/initials/svg?backgroundColor=0d1117&textColor=00f5d4&fontWeight=700&seed=${encodeURIComponent(t.name)}'">
            </div>
            <div>
              <div class="pro-team-name">${t.name}</div>
              <div class="pro-team-region">📍 ${t.region}</div>
            </div>
          </div>
          <p class="pro-team-desc">${t.desc}</p>
          <div class="pro-team-stats">
            <div class="pro-team-stat">
              <span class="pro-team-stat-label">Country</span>
              <span class="pro-team-stat-value">${t.country || '—'}</span>
            </div>
            <div class="pro-team-stat">
              <span class="pro-team-stat-label">Roster Size</span>
              <span class="pro-team-stat-value">${t.members ? t.members + ' players' : '—'}</span>
            </div>
            <div class="pro-team-stat pro-team-stat-wide">
              <span class="pro-team-stat-label">Highest Achievement</span>
              <span class="pro-team-stat-value">${t.achievement || '—'}</span>
            </div>
          </div>
          ${renderSocialsRow(t.socials)}
        </div>
        <div class="pro-team-actions">
          <a href="${t.site || '#'}" target="_blank" rel="noopener noreferrer" class="team-website-btn">
            Visit Official Website ↗
          </a>
          ${t.teamPageUrl ? `<a href="${t.teamPageUrl}" target="_blank" rel="noopener noreferrer" class="team-website-btn team-members-btn">Visit Team Members ↗</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Handle intercepting clicks on dead or broken website links
  if (grid) {
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.team-website-btn');
      if (!btn || btn.classList.contains('team-members-btn')) return;

      const href = btn.getAttribute('href');
      if (!href || href === '#' || href.trim() === '') {
        e.preventDefault();
        const card = btn.closest('.pro-team-card');
        const teamName = card ? card.querySelector('.pro-team-name')?.textContent : '';
        showOutdatedWebsiteModal(teamName);
      }
    });
  }

  function applyFilters() {
    const nameQuery = (nameInput ? nameInput.value : '').trim().toLowerCase();
    const countryQuery = (countryInput ? countryInput.value : '').trim().toLowerCase();

    const filtered = currentGame.teams.filter(t => {
      const nameMatch = !nameQuery || t.name.toLowerCase().includes(nameQuery);
      const countryMatch = !countryQuery || (t.country || '').toLowerCase().includes(countryQuery);
      return nameMatch && countryMatch;
    });

    renderTeams(filtered);
  }

  renderTeams(currentGame.teams);

  if (nameInput) nameInput.addEventListener('input', applyFilters);
  if (countryInput) countryInput.addEventListener('input', applyFilters);

  const pickerTrack = document.getElementById('gamePickerTrack');
  if (pickerTrack) {
    pickerTrack.innerHTML = GAME_PICKER.map(g => `
      <button type="button" class="game-picker-item${g.key === resolvedKey ? ' active' : ''}" data-game-key="${g.key}">
        <img src="${g.icon}" alt="${g.label}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/shapes/svg?backgroundColor=0d1117&seed=${encodeURIComponent(g.label)}'">
        <span>${g.label}</span>
      </button>
    `).join('');

    pickerTrack.addEventListener('click', (e) => {
      const btn = e.target.closest('.game-picker-item');
      if (!btn) return;
      const key = btn.getAttribute('data-game-key');
      if (key && key !== resolvedKey) {
        window.location.href = `team-detail.html?game=${encodeURIComponent(key)}`;
      }
    });
  }
});