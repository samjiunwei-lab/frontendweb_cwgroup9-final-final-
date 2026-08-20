/* ==========================================================================
   UTAR E-Sports Club - Squad Registration Logic (Register-squad.js)
   Features:
   1. Sets Squad capacity limit based on selected game (e.g., VALORANT = 6, LoL = 5).
   2. Dynamically populates Team Member inputs excluding the captain (e.g., 5 rows for VALORANT, 4 rows for LoL).
   3. All member input fields are optional.
   4. When Squad is created, Initial Roster Size = 1 (Captain) + filled member fields count.
   ========================================================================== */

const SQUAD_STORAGE_KEY = 'utarEsportsSquads';
const SQUAD_REQUESTS_KEY = 'utarEsportsSquadRequests';

// Total squad capacity per game (including 1 Captain)
const GAME_CAPACITY = {
    "VALORANT": 6,                  // 1 Captain + 5 Members
    "League of Legends": 5,         // 1 Captain + 4 Members
    "Mobile Legends: Bang Bang": 5, // 1 Captain + 4 Members
    "PUBG Mobile": 4,               // 1 Captain + 3 Members
    "Identity V": 5,                // 1 Captain + 4 Members
    "Counter-Strike 2": 5,          // 1 Captain + 4 Members
    "Dota 2": 5,                    // 1 Captain + 4 Members
    "Minecraft": 4,                 // 1 Captain + 3 Members
    "Brawl Stars": 3,               // 1 Captain + 2 Members
    "Honor of Kings": 5             // 1 Captain + 4 Members
};

const GAME_KEY_TO_TITLE = {
    "valorant": "VALORANT",
    "lol": "League of Legends",
    "identity": "Identity V",
    "csgo": "Counter-Strike 2",
    "dota2": "Dota 2",
    "minecraft": "Minecraft",
    "mobile": "Mobile Legends: Bang Bang",
    "pubg": "PUBG Mobile",
    "brawl": "Brawl Stars",
    "hok": "Honor of Kings"
};

function getCurrentUsername() {
    if (!document.cookie.includes('gamerName=')) return null;
    return decodeURIComponent(document.cookie.split('gamerName=')[1].split(';')[0]);
}

function getAllSquads() {
    try {
        return JSON.parse(localStorage.getItem(SQUAD_STORAGE_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveSquad(squad) {
    const squads = getAllSquads();
    squads.push(squad);
    localStorage.setItem(SQUAD_STORAGE_KEY, JSON.stringify(squads));
}

function getAllRequests() {
    try {
        return JSON.parse(localStorage.getItem(SQUAD_REQUESTS_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveAllRequests(requests) {
    localStorage.setItem(SQUAD_REQUESTS_KEY, JSON.stringify(requests));
}

// Dynamically generate member input rows
function renderMemberInputs(selectedGame) {
    const container = $('#teamMembersContainer');
    const wrapper = $('#teamMembersWrapper');
    const badge = $('#capacityBadge');

    container.empty();

    if (!selectedGame || !GAME_CAPACITY[selectedGame]) {
        wrapper.hide();
        return;
    }

    const totalCapacity = GAME_CAPACITY[selectedGame];
    const fillableLines = totalCapacity - 1; // Number of member input rows excluding the captain

    badge.text('Total Capacity: ' + totalCapacity + ' (1 Captain + ' + fillableLines + ' Members)');

    for (let i = 1; i <= fillableLines; i++) {
        const inputHtml = 
            '<div class="member-input-group">' +
                '<span class="member-label-badge">Member ' + i + '</span>' +
                '<input type="text" class="form-control auth-input py-2 team-member-input" ' +
                       'placeholder="Username (Optional)" data-index="' + i + '">' +
            '</div>';
        container.append(inputHtml);
    }

    wrapper.slideDown(200);
}

$(document).ready(function () {
    const username = getCurrentUsername();

    if (username) {
        $('#squadFormPanel').show();
    } else {
        $('#loginRequiredPanel').show();
    }

    // Listen for Game selection change events
    $('#squadGame').on('change', function () {
        renderMemberInputs($(this).val());
    });

    // Support URL ?game= parameter for auto-selection
    const urlParams = new URLSearchParams(window.location.search);
    const rawGameParam = urlParams.get('game');

    if (rawGameParam) {
        let resolvedGame = null;

        if ($('#squadGame option[value="' + rawGameParam + '"]').length) {
            resolvedGame = rawGameParam;
        } else if (GAME_KEY_TO_TITLE[rawGameParam.toLowerCase()]) {
            resolvedGame = GAME_KEY_TO_TITLE[rawGameParam.toLowerCase()];
        }

        if (resolvedGame) {
            $('#squadGame').val(resolvedGame).trigger('change');
        }
    }

    // Form submission handling
    $('#squadForm').on('submit', function (event) {
        event.preventDefault();

        const currentUsername = getCurrentUsername();
        if (!currentUsername) {
            alert("Error: You must be logged in to register a squad.");
            window.location.href = 'login.html';
            return;
        }

        const squadName = $('#squadName').val().trim();
        const squadDescription = $('#squadDescription').val().trim();
        const game = $('#squadGame').val();

        if (!squadName || !squadDescription || !game) {
            alert("Error: Please fill in all required fields.");
            return;
        }

        const capacity = GAME_CAPACITY[game] || 5;

        // Collect entered team member usernames
        const initialMembers = [];
        $('.team-member-input').each(function () {
            const val = $(this).val().trim();
            if (val.length > 0) {
                initialMembers.push(val);
            }
        });

        // Calculate initial Roster size: 1 (Captain) + count of filled members
        const initialRoster = 1 + initialMembers.length;

        const squadId = 'squad_' + Date.now();

        const newSquad = {
            id: squadId,
            name: squadName,
            description: squadDescription,
            game: game,
            capacity: capacity,
            roster: initialRoster,
            members: initialMembers, // Contains initial members provided by captain
            owner: currentUsername,
            createdAt: new Date().toISOString()
        };

        saveSquad(newSquad);

        // Generate accepted join records for initially added members
        if (initialMembers.length > 0) {
            const requests = getAllRequests();
            initialMembers.forEach(mem => {
                requests.push({
                    id: 'req_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
                    squadId: squadId,
                    username: mem,
                    status: 'accepted',
                    requestedAt: new Date().toISOString()
                });
            });
            saveAllRequests(requests);
        }

        alert("Squad \"" + squadName + "\" registered successfully! Initial Roster: " + initialRoster + "/" + capacity);

        window.location.href = 'squad.html';
    });
});