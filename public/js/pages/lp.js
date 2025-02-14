import * as Observer from '../utils/observers.js'

const observeImgs = document.querySelectorAll(".lp-category a")
const observeLabels = document.querySelectorAll(".lp-category label")
const mottoSpans = document.querySelectorAll(".lp-mottos span")

const imgObserver = new IntersectionObserver(Observer.images, Observer.options)
const labelObserver = new IntersectionObserver(Observer.opacity, Observer.options)

let multiplier = [1500, 1900, 2300]
let currentIndex = 0

function displayMotto() {
  return new Promise((resolve, reject) => {
    mottoSpans.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show")
      }, multiplier[index])
    })
    currentIndex++
    resolve()
  })
}

function displayContent() {
  setTimeout(() => {
    observeImgs.forEach(link => {
      imgObserver.observe(link)
    })

    observeLabels.forEach(caption => {
      labelObserver.observe(caption)
    })
  }, multiplier[currentIndex] + 500)
}

displayMotto().then(displayContent)
