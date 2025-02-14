const mongoose = require('mongoose')
const Tracks = require('../models/tracks')

mongoose.connect('mongodb://localhost:27017/oep')

mongoose.connection.on("error", console.error.bind(console, "connection error:"))

// TODO: Convert .m4a to mp3
const data = [
  {
    title: "Track 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    format: "mp3",
    url: "can-you-relate.mp3"
  },
  {
    title: "Track 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    format: "mp3",
    url: "thatz-my-word.mp3"
  },
  {
    title: "Track 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    format: "m4a",
    url: "things-changed.m4a",
  },
  {
    title: "Track 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    format: "m4a",
    url: "unda-tough-situations.m4a"
  },
]

const seedDB = async () => {
  await Tracks.deleteMany({});
  for (const track of data) {
    const trackInfo = new Tracks({
      title: track.title,
      description: track.description,
      format: track.format,
      url: track.url,
    })
    await trackInfo.save()
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})

console.log("Tracks Seeded.")
