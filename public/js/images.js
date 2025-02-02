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
      let multiplier = [0, 400, 800, 1200, 1600]

      for (let i = 0; i < elements.length; i++) {
          array.push(elements[i])
      }

      array.forEach((element, index) => {
        setTimeout(function () {
          if (element.classList.contains('y-translate')) {
            element.classList.add("slide-element")
          } else {
            element.classList.add("show-element")
          }
        }, multiplier[index]);
      })

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
      setTimeout(() => {
        elements.classList.add('show-caption')
      }, 1200)

      // Optionally stop observing the element
      observer.unobserve(entry.target)
    }
  })
}

function showImages (elements) {
  let multipliers = [0, 400, 800]

  elements.forEach((element, index) => {
    setTimeout(function () {
      if (element.classList.contains('y-translate')) {
        element.classList.add("slide-img")
      } else {
        element.classList.add("show-img")
      }

    }, multipliers[index]);
  })
}
