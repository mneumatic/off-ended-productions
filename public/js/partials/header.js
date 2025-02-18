const sh = document.getElementById('sh');
const shMenu = document.querySelector('.sh-menu');
const shDialog = document.querySelector('#sh dialog');
const shOpenMenuBtn = document.querySelector('.sh-controls button');
const shCloseMenuBtn = document.querySelector('.sh-menu .sh-controls');

// Add shadow on scroll
function onScroll() {
  window.scrollY > 0
    ? sh.classList.add('sh-shadow')
    : sh.classList.remove('sh-shadow')
}

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

window.addEventListener('scroll', onScroll)
shOpenMenuBtn.addEventListener('click', openMenu);
shCloseMenuBtn.addEventListener('click', closeMenu);
shDialog.addEventListener('click', closeMenuIf);
