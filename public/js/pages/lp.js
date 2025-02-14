const content = document.querySelectorAll(".container__animated")
const captions = document.querySelectorAll(".caption")
const mottoSpans = document.querySelectorAll(".lp-mottos span")

const observer = new IntersectionObserver(handleIntersection, options)
const observerCaptions = new IntersectionObserver(handleCaptions, options)

let multiplier = [1500, 1900, 2300]
let currentIndex = 0

function displayMotto() {
  return new Promise((resolve, reject) => {
    mottoSpans.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show-element")
      }, multiplier[index])
    })
    currentIndex++
    resolve()
  })
}

function displayContent() {
  setTimeout(() => {
    content.forEach(link => {
      observer.observe(link)
    })

    captions.forEach(caption => {
      observerCaptions.observe(caption)
    })
  }, multiplier[currentIndex])
}

displayMotto().then(displayContent)
