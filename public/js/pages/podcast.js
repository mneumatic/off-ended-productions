import * as Observer from '../utils/observers.js'

const observeImgs = document.querySelectorAll(".hero-images")
const observeYT = document.querySelectorAll(".content-youtube")
const observeSpotify = document.querySelectorAll(".content-spotify")
const observeLabels = document.querySelectorAll(".content-header, .content-more")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

observeImgs.forEach(element => {
  observer.observe(element)
})

observeYT.forEach(element => {
  observer.observe(element)
})

observeSpotify.forEach(element => {
  observer.observe(element)
})

observeLabels.forEach(element => {
  observerCaptions.observe(element)
})
