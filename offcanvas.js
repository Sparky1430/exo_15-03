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
  
  // Offcanvas Menu (avec animation)
  document.getElementById('open-menu').addEventListener('click', function () {
    document.getElementById('offcanvas-menu').classList.add('open');
  });
  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('offcanvas-menu').classList.remove('open');
  });
  
  // Chat Modal
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
  