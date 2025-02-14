import * as Observer from '../utils/observers.js'

const PSImages = document.querySelector(".hero-images")
const observer = new IntersectionObserver(Observer.images, Observer.options)

observer.observe(PSImages)
