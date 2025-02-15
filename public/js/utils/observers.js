export const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px'
}

export function images(entries, observer) {
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
          element.classList.add('show')
        }, multiplier[index]);
      })

      // Optionally stop observing the element
      observer.unobserve(entry.target)
    }
  })
}

export function opacity(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is in view, do something
      const elements = entry.target
      setTimeout(() => {
        elements.classList.add('show')
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
