import * as Observer from '../utils/observers.js'

const communityImages = document.querySelectorAll(".content-images")
const observer = new IntersectionObserver(Observer.images, Observer.options)

communityImages.forEach(element => {
  observer.observe(element)
})
