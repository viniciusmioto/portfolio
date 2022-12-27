// drop down menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// theme switcher
const themeSwitcher = document.getElementById('theme-btn');
const body = document.body;

themeSwitcher.addEventListener('click', function() {
  this.classList.toggle('bi-brightness-high-fill')

  if (this.classList.toggle('bi-moon')) {
    body.classList.replace('dark', 'light')
  } else {
    body.classList.replace('light', 'dark')
  }

});