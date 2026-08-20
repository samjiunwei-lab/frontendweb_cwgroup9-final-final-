/* ==========================================================================
   UTAR E-Sports Club - Squad Directory Logic (squad.js)
   Page: squad.html
   Features:
   1. Display registered squads and current roster counts (Roster: squad.roster / squad.capacity).
   2. Display squad members (Captain + filled roster members).
   3. Instant join mode & Captain squad deletion functionality.
   ========================================================================== */

const SQUAD_STORAGE_KEY = 'utarEsportsSquads';
const SQUAD_REQUESTS_KEY = 'utarEsportsSquadRequests';

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

function saveAllSquads(squads) {
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

function renderAllSquads() {
    const username = getCurrentUsername();
    const squads = getAllSquads();
    const requests = getAllRequests();
    const listEl = document.getElementById('squadListContainer');
    const emptyEl = document.getElementById('squadEmptyState');

    listEl.innerHTML = '';

    if (squads.length === 0) {
        emptyEl.style.display = 'block';
        return;
    }
    emptyEl.style.display = 'none';

    squads.forEach(squad => {
        const isFull = squad.roster >= squad.capacity;
        const isOwner = username && squad.owner === username;
        const hasJoined = (!isOwner && username)
            ? requests.some(r => r.squadId === squad.id && r.username === username && r.status === 'accepted')
            : false;

        let buttonHtml;
        if (isOwner) {
            buttonHtml = 
                '<div class="d-flex gap-2">' +
                    '<button class="btn-join-owner flex-grow-1" disabled><i class="fa-solid fa-crown me-1"></i>YOUR SQUAD</button>' +
                    '<button class="btn btn-outline-danger delete-btn px-3" data-id="' + squad.id + '" title="Delete Squad" style="border-radius: 50rem;">' +
                        '<i class="fa-solid fa-trash-can"></i>' +
                    '</button>' +
                '</div>';
        } else if (hasJoined) {
            buttonHtml = '<button class="btn-join-joined" disabled><i class="fa-solid fa-circle-check me-1"></i>JOINED</button>';
        } else if (isFull) {
            buttonHtml = '<button class="btn-join-full" disabled>SQUAD MEMBER IS MAX</button>';
        } else {
            buttonHtml = '<button class="btn-join join-btn" data-id="' + squad.id + '">JOIN SQUAD</button>';
        }

        const squadDescription = squad.description ? squad.description : 'No description provided.';

        // Construct team member display string (Captain + Members)
        let memberListText = squad.owner + ' (Captain)';
        if (squad.members && squad.members.length > 0) {
            memberListText += ', ' + squad.members.join(', ');
        }

        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML =
            '<div class="squad-card d-flex flex-column">' +
                '<div class="squad-name">' + squad.name + '</div>' +
                '<div class="squad-owner">Captain: ' + squad.owner + '</div>' +
                '<div><span class="squad-game-badge">' + squad.game + '</span></div>' +
                '<div class="squad-desc">' + squadDescription + '</div>' +
                '<div class="small mb-3 text-muted" style="font-size:0.78rem; word-break:break-word;">' +
                    '<i class="fa-solid fa-users me-1" style="color:var(--neon-cyan, #00f0ff);"></i> ' +
                    '<strong class="text-white">Members:</strong> ' + memberListText +
                '</div>' +
                '<div class="squad-roster-label">Roster: <span class="roster-count">' + squad.roster + '/' + squad.capacity + '</span></div>' +
                '<div class="mt-auto">' + buttonHtml + '</div>' +
            '</div>';
        listEl.appendChild(col);
    });
}

function joinSquad(squadId) {
    const username = getCurrentUsername();

    if (!username) {
        sessionStorage.setItem('returnAfterLogin', window.location.pathname + window.location.search);
        window.location.href = 'login.html';
        return;
    }

    const squads = getAllSquads();
    const squad = squads.find(s => s.id === squadId);
    if (!squad) return;

    if (squad.owner === username) {
        alert("You are already the captain of this squad.");
        return;
    }

    if (squad.roster >= squad.capacity) {
        alert("Sorry, this squad's roster is already full.");
        renderAllSquads();
        return;
    }

    const requests = getAllRequests();
    const existing = requests.find(r => r.squadId === squadId && r.username === username);

    if (existing && existing.status === 'accepted') {
        alert("You have already joined this squad.");
        return;
    }

    squad.roster += 1;
    if (!squad.members) squad.members = [];
    squad.members.push(username);
    saveAllSquads(squads);

    if (existing) {
        existing.status = 'accepted';
    } else {
        requests.push({
            id: 'req_' + Date.now(),
            squadId: squadId,
            username: username,
            status: 'accepted',
            requestedAt: new Date().toISOString()
        });
    }
    saveAllRequests(requests);

    alert("You have successfully joined \"" + squad.name + "\"! (" + squad.roster + "/" + squad.capacity + ")");
    renderAllSquads();
}

function deleteSquad(squadId) {
    const username = getCurrentUsername();
    if (!username) return;

    const squads = getAllSquads();
    const squad = squads.find(s => s.id === squadId);
    if (!squad) return;

    if (squad.owner !== username) {
        alert("Unauthorized: Only the captain can delete this squad.");
        return;
    }

    if (!confirm("Are you sure you want to delete squad \"" + squad.name + "\"? This action cannot be undone.")) {
        return;
    }

    const updatedSquads = squads.filter(s => s.id !== squadId);
    saveAllSquads(updatedSquads);

    const requests = getAllRequests();
    const updatedRequests = requests.filter(r => r.squadId !== squadId);
    saveAllRequests(updatedRequests);

    alert("Squad \"" + squad.name + "\" has been deleted.");
    renderAllSquads();
}

$(document).ready(function () {
    renderAllSquads();

    $(document).on('click', '.join-btn', function () {
        joinSquad($(this).data('id'));
    });

    $(document).on('click', '.delete-btn', function () {
        deleteSquad($(this).data('id'));
    });
});