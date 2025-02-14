import * as Observer from '../utils/observers.js'

const hero = document.querySelectorAll(".container__animated-flex")
const captions = document.querySelectorAll(".caption")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

hero.forEach(element => {
  observer.observe(element)
})

captions.forEach(caption => {
  observerCaptions.observe(caption)
})
