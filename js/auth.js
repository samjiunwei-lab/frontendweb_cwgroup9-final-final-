$(document).ready(function() {
    // 1. Initialization Check - Always run on every page
    checkLoginStatus();

    // 2. Login Form Logic - Only runs if loginForm exists on the page
    if ($('#loginForm').length) {
        $('#loginForm').on('submit', function(event) {
            event.preventDefault();
            const username = $('#username').val().trim();
            const password = $('#password').val();

            if (password.length < 8) {
                alert("Error: Password must be at least 8 characters long!");
                return;
            }

            // Check account database: Check if the username exists and if the password is correct
            const account = getAccount(username);
            if (!account) {
                alert("Error: No account found with that username. Please sign up first.");
                return;
            }
            if (account.password !== password) {
                alert("Error: Incorrect password. Please try again.");
                return;
            }

            setCookie("gamerName", username, 7);
            alert("Welcome, " + username + "!");
            redirectAfterAuth();
        });
    }

    // 3. Registration Form Logic - Only runs if signupForm exists
    if ($('#signupForm').length) {
        $('#signupForm').on('submit', function(event) {
            event.preventDefault();
            const password = $('#password').val();
            const confirmPassword = $('#confirmPassword').val();
            const username = $('#username').val().trim();

            if (!username) {
                alert("Error: Please enter a username.");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Error: Passwords do not match. Please check again!");
                return false;
            }

            if (getAccount(username)) {
                alert("Error: This username is already taken. Please choose another one.");
                return false;
            }

            // Save account information (including password and personal details) into localStorage as an account database,
            // used for checking password during login and displaying details on userinfo.html
            saveAccount(username, {
                password: password,
                name: $('#name').val() || '',
                surname: $('#surname').val() || '',
                birthDay: $('#birthDay').val() || '',
                birthMonth: $('#birthMonth').val() || '',
                birthYear: $('#birthYear').val() || '',
                country: $('#country').val() || ''
            });

            setCookie("gamerName", username, 7);
            alert("Registration successful! Welcome to the UTAR E-Sports Club, " + username);
            redirectAfterAuth();
            return false;
        });
    }

    // 4. Toggle Password Visibility
    if ($('#togglePassword').length) {
        $('#togglePassword').on('click', function() {
            const passwordField = $('#password');
            const newType = passwordField.attr('type') === 'password' ? 'text' : 'password';
            passwordField.attr('type', newType);
            $(this).toggleClass('fa-eye fa-eye-slash');
        });
    }

    // 5. Logout Functionality - Always present in navbar
    $('#nav-logout-btn').on('click', function(e) {
        e.preventDefault();
        document.cookie = "gamerName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        alert("You have been logged out.");
        window.location.href = "index.html";
    });

    // 6. UI Interactions (Real-time monitoring)
    $('#password').on('input', function() {
        const passwordLength = $(this).val().length;
        const loginBtn = $('#loginBtn');
        if (loginBtn.length) {
            loginBtn.css('background-color', passwordLength >= 8 ? '#dc3545' : '#e5e5e5');
        }
    });

    $('#confirmPassword').on('input', function() {
        const password = $('#password').val();
        const confirm = $(this).val();
        if (confirm.length > 0) {
            $(this).css('border', (password !== confirm) ? '2px solid #dc3545' : '2px solid #198754');
        } else {
            $(this).css('border', 'none');
        }
    });
});

// --- Helper Functions ---
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}

function checkLoginStatus() {
    const cookies = document.cookie;
    if (cookies.includes("gamerName=")) {
        const name = cookies.split('gamerName=')[1].split(';')[0];
        // Ensure elements exist before updating text
        if ($('#nav-login-btn').length) {
            $('#nav-login-btn').text("Hello, " + decodeURIComponent(name));
            $('#nav-login-btn').removeClass('btn-cyber').addClass('btn-success');
            // When logged in, clicking this button should navigate to the user profile page, instead of the login form
            $('#nav-login-btn').attr('href', 'userinfo.html');
        }
        if ($('#nav-logout-btn').length) {
            $('#nav-logout-btn').show();
        }
    }
}

// ==========================================
// Account database: Save registration information (including password and personal details) in localStorage
// { "username": { password, name, surname, birthDay, birthMonth, birthYear, country }, ... }
// ==========================================
const ACCOUNTS_STORAGE_KEY = 'utarEsportsAccounts';

function getAccounts() {
    try {
        return JSON.parse(localStorage.getItem(ACCOUNTS_STORAGE_KEY)) || {};
    } catch (e) {
        return {};
    }
}

function getAccount(username) {
    const accounts = getAccounts();
    return accounts[username] || null;
}

function saveAccount(username, accountData) {
    const accounts = getAccounts();
    accounts[username] = accountData;
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

// ==========================================
// Session Storage: "Redirect back to original page" logic after login/registration (Redirect Intent)
// visitor clicks Join Tournament on tournament-details.html,
// System prompts to login first -> We first save the current page URL into sessionStorage as 'returnAfterLogin',
// then redirect to login.html. After successful login, read this URL and redirect back, instead of blindly redirecting to the homepage.
// Clear it after use (sessionStorage.removeItem), this acts as a temporary state "valid only within this session",
// ==========================================
function redirectAfterAuth() {
    const returnUrl = sessionStorage.getItem('returnAfterLogin');
    if (returnUrl) {
        sessionStorage.removeItem('returnAfterLogin');
        // Leave a "just redirected back after login" flag to help the target page highlight and guide the user to complete their intended action
        sessionStorage.setItem('justLoggedIn', '1');
        window.location.href = returnUrl;
    } else {
        window.location.href = "index.html";
    }
}