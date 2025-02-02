const mongoose = require('mongoose')
const MusicEvents = require('../models/music')

mongoose.connect('mongodb://localhost:27017/oep')

mongoose.connection.on("error", console.error.bind(console, "connection error:"))

const data = [
    {
        title: "Demo Event 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/twojz-music-logo.webp",
        date: "1/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/twojz-music-logo.webp",
        date: "4/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/twojz-music-logo.webp",
        date: "6/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
  {
    title: "Demo Event 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    imagePath: "/img/twojz-music-logo.webp",
    date: "7/01/2025",
    location: "1111 Silver Spruce Dr. Running Springs CA 92382",
    hours: "6pm - 10pm",
  },
  {
    title: "Demo Event 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    imagePath: "/img/twojz-music-logo.webp",
    date: "8/01/2025",
    location: "1111 Silver Spruce Dr. Running Springs CA 92382",
    hours: "6pm - 10pm",
  },
]

const seedDB = async () => {
    await MusicEvents.deleteMany({});
    for (const musicEvent of data) {
        const musicEventInfo = new MusicEvents({
            title: musicEvent.title,
            description: musicEvent.description,
            imagePath: musicEvent.imagePath,
            date: musicEvent.date,
            location: musicEvent.location,
            hours: musicEvent.hours,
        })
        await musicEventInfo.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})

console.log("Music Events Seeded.")
