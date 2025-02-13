const sh = document.getElementById('sh');
const shMenu = document.querySelector('.sh-menu');
const shDialog = document.querySelector('.sh-dialog');
const shOpenMenuBtn = document.querySelector('.sh-controls button');
const shCloseMenuBtn = document.querySelector('.sh-menu .sh-controls');

// Opens Site Header Menu
function openMenu() {
  shMenu.classList.add('sh-open-menu');
  shDialog.showModal();
}

// Closes Site Header Menu
function closeMenu() {
  shMenu.classList.remove('sh-open-menu');
  shDialog.close();
}

function closeMenuIf() {
  if (shDialog.open) {
    shMenu.classList.remove('sh-open-menu');
    shDialog.close();
  }
}

shOpenMenuBtn.addEventListener('click', openMenu);
shCloseMenuBtn.addEventListener('click', closeMenu);
shDialog.addEventListener('click', closeMenuIf);
