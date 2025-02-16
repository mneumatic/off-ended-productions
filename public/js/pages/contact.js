import * as Observer from '../utils/observers.js'

const communityImages = document.querySelectorAll(".content-images")
const form = document.querySelectorAll('.content-form')
const captions = document.querySelectorAll(".content-header, .content-more")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

communityImages.forEach(element => {
  observer.observe(element)
})

form.forEach(element => {
  observer.observe(element)
})

captions.forEach(element => {
  observerCaptions.observe(element)
})
