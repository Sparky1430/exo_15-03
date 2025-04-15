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

document.getElementById('open-menu').addEventListener('click', function() {
    var menu = document.getElementById('offcanvas-menu');
    menu.setAttribute('aria-expanded', 'true');
    this.setAttribute('aria-expanded', 'true');
    
    trapFocus(menu);
    var focusableEls = menu.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (focusableEls.length > 0) {
        focusableEls[0].focus();
    }
});

document.getElementById('close-menu').addEventListener('click', function() {
    var menu = document.getElementById('offcanvas-menu');
    menu.setAttribute('aria-expanded', 'false');
    document.getElementById('open-menu').setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        var menu = document.getElementById('offcanvas-menu');
        if (menu.getAttribute('aria-expanded') === 'true') {
            menu.setAttribute('aria-expanded', 'false');
            document.getElementById('open-menu').setAttribute('aria-expanded', 'false');
        }
    }
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
