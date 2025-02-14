import * as Observer from '../utils/observers.js'
import { loading } from "../utils/loading.js";

const hero = document.querySelectorAll(".container__animated")
const eventCards = document.querySelectorAll('.container__animated-flex')
const captions = document.querySelectorAll(".caption")
const images = document.querySelectorAll('img')

const observer = new IntersectionObserver(Observer.images, Observer.options)
const observerCaptions = new IntersectionObserver(Observer.opacity, Observer.options)

hero.forEach(element => {
  observer.observe(element)
})

let spinner = document.querySelector('.spinner');
spinner.style.display = 'block';

const promises = Array.from(images).map(img => loading(img))

Promise.all(promises).then(() => {
  eventCards.forEach(element => {
    observer.observe(element)
  })

  captions.forEach(element => {
    observerCaptions.observe(element)
  })
  spinner.style.display = 'none';
})

const events = document.querySelectorAll('.event')
const date = new Date()

// TODO: Add an additional day to event so even appears on the day of said event.
events.forEach(element => {
  const tmp = moment(date).format()
  const eventDate = moment(element.querySelector('.date').innerText).format()
  if (tmp > eventDate) {
    element.remove()
  }
})
