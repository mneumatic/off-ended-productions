const sh = document.getElementById('sh');
const shMenu = document.querySelector('.sh-menu');
const shOpenMenuBtn = document.querySelector('.sh-controls')
const shCloseMenuBtn = document.querySelector('.sh-menu .sh-controls')

// Opens Site Header Menu
function openMenu() {
  shMenu.classList.add('sh-open-menu');
}

// Closes Site Header Menu
function closeMenu() {
  shMenu.classList.remove('sh-open-menu');
}

shOpenMenuBtn.addEventListener('click', openMenu);
shCloseMenuBtn.addEventListener('click', closeMenu);
