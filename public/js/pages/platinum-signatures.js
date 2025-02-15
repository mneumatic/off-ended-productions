import * as Observer from '../utils/observers.js'

const contentImages = document.querySelectorAll(".content-images")
const captions = document.querySelectorAll(".content-header, .content-more")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

contentImages.forEach(element => {
  observer.observe(element)
})

captions.forEach(element => {
  observerCaptions.observe(element)
})
