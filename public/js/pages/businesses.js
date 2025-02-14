import * as Observer from '../utils/observers.js'
import { loading } from "../utils/loading.js";

const hero = document.querySelectorAll(".container__animated")
const businesses = document.querySelectorAll(".container__animated-flex")
const captions = document.querySelectorAll(".caption")
const images = document.querySelectorAll("img")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

let spinner = document.querySelector('.spinner');
spinner.style.display = 'block';

hero.forEach(element => {
  observer.observe(element)
})

const promises = Array.from(images).map(img => loading(img))

Promise.all(promises).then(() => {
  businesses.forEach(element => {
    observer.observe(element)
  })

  captions.forEach(element => {
    observerCaptions.observe(element)
  })
  spinner.style.display = 'none';
})
