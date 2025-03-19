const openButton = document.querySelector('.open-modal');
const mobMenu = document.querySelector('.mob-modal-overlay');
const menuLinks = document.querySelectorAll('.mob-menu-link');
const googleBtn = document.querySelector('.mob-menu-btn');
const homeBtn = document.querySelector('.home-btn');

function openMenu() {
  mobMenu.classList.add('active');
}

function closeMenu() {
  mobMenu.classList.remove('active');
}

openButton.addEventListener('click', openMenu);

menuLinks.forEach(item => {
  item.addEventListener('click', closeMenu);
});

mobMenu.addEventListener('click', event => {
  if (event.target === mobMenu) {
    closeMenu();
  }
});

// ----take off blur from btn after focus-----

googleBtn.addEventListener('click', () => {
  setTimeout(() => {
    googleBtn.blur();
  }, 100);
});

homeBtn.addEventListener('click', () => {
  setTimeout(() => {
    homeBtn.blur();
  }, 100);
});

// ----- smooth scrolling and scroll to start of section -----

const headerHeight = document.querySelector('.header').offsetHeight;

menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  });
});
