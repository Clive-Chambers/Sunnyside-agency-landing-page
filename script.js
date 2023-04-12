(() => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.menu-section');
  const mediaSize = 768;

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);

  function resizeFix() {
    // if mobileMenu is open, close it
    if (mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  }

  window.addEventListener('resize', function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();
