function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    e.preventDefault();
                    lastFocusableEl.focus();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    e.preventDefault();
                    firstFocusableEl.focus();
                }
            }
        }
    });
}

// Suppression de l'ancienne gestion via le bouton "open-menu"
// (Assurez-vous de retirer ou de masquer le bouton d'ouverture dans index.html)

var offcanvasMenu = document.getElementById('offcanvas-menu');
var autoOpenTimer = null;
var autoOpenThreshold = 20;     // distance en pixels depuis le bord gauche
var autoOpenDelay = 500;        // délai (ms) avant ouverture automatique

// Ouvre le menu grâce à l'attribut aria-expanded
function openMenuAutomatically() {
    offcanvasMenu.setAttribute('aria-expanded', 'true');
    trapFocus(offcanvasMenu);
    var focusableEls = offcanvasMenu.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (focusableEls.length > 0) {
        focusableEls[0].focus();
    }
}

// Ferme le menu en réinitialisant aria-expanded
function closeMenuAutomatically() {
    offcanvasMenu.setAttribute('aria-expanded', 'false');
}

// Détection de la proximité du curseur sur le bord gauche
document.addEventListener('mousemove', function(e) {
    // S'il est dans la zone de déclenchement et que le menu n'est pas déjà ouvert
    if(e.clientX <= autoOpenThreshold && offcanvasMenu.getAttribute('aria-expanded') !== 'true') {
        if (!autoOpenTimer) {
            autoOpenTimer = setTimeout(function() {
                openMenuAutomatically();
                autoOpenTimer = null;
            }, autoOpenDelay);
        }
    } else {
        if (autoOpenTimer) {
            clearTimeout(autoOpenTimer);
            autoOpenTimer = null;
        }
        // Si le menu est ouvert et que le curseur s'éloigne de la zone du menu, on le ferme
        if(offcanvasMenu.getAttribute('aria-expanded') === 'true') {
            var menuRect = offcanvasMenu.getBoundingClientRect();
            // Si le curseur est à plus de 50px du bord droit du menu
            if(e.clientX > (menuRect.right + 50)) {
                closeMenuAutomatically();
            }
        }
    }
});

// Gestion de la fermeture avec la touche ESC
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && offcanvasMenu.getAttribute('aria-expanded') === 'true') {
        closeMenuAutomatically();
    }
});

// La gestion du bouton de fermeture reste inchangée
document.getElementById('close-menu').addEventListener('click', function() {
    closeMenuAutomatically();
});

document.getElementById('chat-button').addEventListener('click', function () {
    var modal = document.getElementById('chat-modal');
    document.getElementById('chat-image').src = 'https://cataas.com/cat?time=' + new Date().getTime();
    modal.style.display = 'block';
    modal.style.opacity = 1;
    setTimeout(function () {
        modal.style.transition = 'opacity 1s';
        modal.style.opacity = 0;
    }, 4000);
    setTimeout(function () {
        modal.style.display = 'none';
        modal.style.transition = '';
        modal.style.opacity = 1;
    }, 5000);
});
