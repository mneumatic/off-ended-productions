import * as Observer from '../utils/observers.js'
import { rippleEffect } from "../partials/notification.js";

const observeImgs = document.querySelectorAll(".content-categories a")
const observeLabels = document.querySelectorAll(".content-card label")
const mottoSpans = document.querySelectorAll(".lp-mottos span")

const imgObserver = new IntersectionObserver(Observer.images, Observer.options)
const labelObserver = new IntersectionObserver(Observer.opacity, Observer.options)

rippleEffect()

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
