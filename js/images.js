function showGroupImages(section, array) {
  window.addEventListener('scroll', () => {
    if (isInViewport(section) && !array[0].classList.contains('show-image')) {
      showPodImages(array)
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showPodImages (element) {
  element[0].classList.add("show-image")

  setTimeout(function () {
    element[1].classList.add("show-image")
  }, 300);

  setTimeout(function () {
    element[2].classList.add("show-image")
  }, 600);
}
