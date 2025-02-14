import * as Observer from '../utils/observers.js'

const communityImages = document.querySelectorAll(".container__animated")
const communityDivs = document.querySelectorAll(".container__animated-flex")
const captions = document.querySelectorAll(".caption")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

communityImages.forEach(element => {
  observer.observe(element)
})

communityDivs.forEach(element => {
  observer.observe(element)
})

captions.forEach(element => {
  observerCaptions.observe(element)
})
