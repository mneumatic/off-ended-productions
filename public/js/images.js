const options = {
  root: null,
  threshold: 0,
  rootMargin: '-150px'
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      const elements = entry.target.children
      let array = []
      let multiplier = []
      multiplier = loadArray(multiplier)

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

function loadArray(array) {
  for (let i = 0; i <= 10; i++) {
    array.push(i * 4);
  }
  return array.map(element => {
    return element * 100;
  });
}

const loadImage = (img) => {
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(img); // Resolve immediately if the image is already loaded
    } else {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${img.src}`));
    }
  })
}

