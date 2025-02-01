const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px'
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in view, do something
      const elements = entry.target.children
      let array = []

      if (elements.length > 2) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].tagName === 'IMG') {
            array.push(elements[i])
          } else {
            array.push(elements[i].querySelector('img'))
          }
        }
        showImages(array)
      } else {
        slideImage(elements[0])
      }

      // Optionally stop observing the element
      observer.unobserve(entry.target)
    }
  })
}
function handleCaptions(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in view, do something
      const elements = entry.target
      showCaptions(elements)

      // Optionally stop observing the element
      observer.unobserve(entry.target)
    }
  })
}

function showImages (elements) {
  let multipliers = [0, 400, 800]

  elements.forEach((entry, index) => {
    setTimeout(function () {
      entry.classList.add("show-img")
    }, multipliers[index]);
  })
}

function slideImage (element) {
  element.classList.add("slide-img")
}

function showCaptions (element) {
  setTimeout(() => {
    element.classList.add('show-caption')
  }, 1200)
}
