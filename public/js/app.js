const navbar = document.getElementById('site-navigation-navbar')
const toggle = document.getElementById('site-navigation-navbar-toggle')
const links = document.querySelectorAll('#site-navigation-navbar-nav-links a')
let last = 0

function onScroll() {
  window.scrollY > 0
    ? navbar.classList.add('navbar-shadow')
    : navbar.classList.remove('navbar-shadow')
}

function closeMenuOnScroll () {
  const top = window.scrollY

  toggle.checked === true && top < last
    ? toggle.checked = true
    : toggle.checked = false

  last = top
}

function closeMenuOnResize () {
  if (toggle.checked === true && window.innerWidth >= 768) toggle.checked = false
}

function markLinkActive () {
  const mainElement = document.querySelector('main')
  links.forEach((li) => {
    if (li.classList.contains(mainElement.id)) li.classList.add('active')
  })
}
markLinkActive()

// Remove Login in link in Admin pages
if (document.getElementById('dashboard')) document.getElementById('login').remove()

window.addEventListener('scroll', onScroll)
window.addEventListener('scroll', closeMenuOnScroll)
window.addEventListener('resize', closeMenuOnResize)
