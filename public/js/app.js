const scrollNote = document.querySelector('.hero-notification');

// TODO: Make the project code more streamlined.
if (scrollNote) {
  function removeNote() {
    window.scrollY > 0 ? scrollNote.style.display = 'none' : scrollNote.style.display = 'block'
  }

  window.addEventListener('scroll', removeNote);
}
