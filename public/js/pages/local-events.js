import * as Observer from '../utils/observers.js'
import { loading } from "../utils/loading.js";

const contentImages = document.querySelectorAll(".content-images")
const eventCards = document.querySelectorAll('.events')
const captions = document.querySelectorAll(".content-header, .content-more")
const images = document.querySelectorAll('.content-card img')

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

let spinner = document.querySelector('.spinner');
spinner.style.display = 'block';

const promises = Array.from(images).map(img => loading(img))

contentImages.forEach(element => {
  observer.observe(element)
})

captions.forEach(element => {
  observerCaptions.observe(element)
})

Promise.all(promises).then(() => {
  eventCards.forEach(element => {
    observer.observe(element)
  })
  spinner.style.display = 'none';
})

const events = document.querySelectorAll('.content-card')
const date = new Date()

// TODO: Add an additional day to event so even appears on the day of said event.
events.forEach(element => {
  const tmp = moment(date).format()
  const eventDate = moment(element.querySelector('.date').innerText).format()
  if (tmp > eventDate) {
    element.remove()
  }
})
