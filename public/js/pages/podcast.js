import * as Observer from '../utils/observers.js'
import { loading } from "../utils/loading.js";

const observeImgs = document.querySelectorAll(".content-images")
const observeYT = document.querySelectorAll(".content-youtube")
const observeSpotify = document.querySelectorAll(".content-spotify")
const observeLabels = document.querySelectorAll(".content-header, .content-more")

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

const content = document.querySelectorAll('img, iframe')
const spinner = document.querySelector('.spinner');

spinner.style.display = 'block';

const promises = Array.from(content).map(item => loading(item))

observeImgs.forEach(element => {
  observer.observe(element)
})

Promise.all(promises).then(() => {
  observeYT.forEach(element => {
    observer.observe(element)
  })

  observeSpotify.forEach(element => {
    observer.observe(element)
  })

  observeLabels.forEach(element => {
    observerCaptions.observe(element)
  })
  spinner.style.display = 'none';
})


