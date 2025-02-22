import * as Observer from '../utils/observers.js'
import { loading } from "../utils/loading.js";
import { rippleEffect } from "../partials/notification.js";

const hero = document.querySelectorAll(".content-images")
const content = document.querySelectorAll(".github, .repos, .gists")
const captions = document.querySelectorAll(".content-header, .content-more")
const images = document.querySelectorAll("img")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

rippleEffect()

let spinner = document.querySelectorAll('.spinner');
for (let element of spinner) {
  element.style.display = 'block';
}

const promises = Array.from(images).map(img => loading(img))

hero.forEach(element => {
  observer.observe(element)
})

captions.forEach(element => {
  observerCaptions.observe(element)
})

Promise.all(promises).then(() => {
  content.forEach(element => {
    observer.observe(element)
  })
  for (let element of spinner) {
    element.style.display = 'none';
  }
})
