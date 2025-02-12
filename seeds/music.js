const mongoose = require('mongoose')
const Music = require('../models/music')

mongoose.connect('mongodb://localhost:27017/oep')

mongoose.connection.on("error", console.error.bind(console, "connection error:"))

const data = [
  {
      title: "Music Event 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
      imagePath: "https://1drv.ms/u/c/e25ec7064419b6a1/IQTNfUULGxPMTIomyM1kSQdeAQ-DNWY-CMdpbJds275v3Is?width=1024",
      date: "1/01/2025",
      location: "1111 Silver Spruce Dr. Running Springs CA 92382",
      hours: "6pm - 10pm",
  },
  {
      title: "Music Event 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
      imagePath: "https://static.vecteezy.com/system/resources/previews/029/332/148/large_2x/ai-generative-dj-playing-and-mixing-music-in-nightclub-party-at-night-edm-dance-music-club-with-crowd-of-young-people-free-photo.jpg",
      date: "4/01/2025",
      location: "1111 Silver Spruce Dr. Running Springs CA 92382",
      hours: "6pm - 10pm",
  },
  {
      title: "Music Event 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
      imagePath: "https://as1.ftcdn.net/v2/jpg/01/23/23/28/1000_F_123232863_FycP6xrnJWDwEXvtlEZPOvxXzTnYWqOc.jpg",
      date: "6/01/2025",
      location: "1111 Silver Spruce Dr. Running Springs CA 92382",
      hours: "6pm - 10pm",
  },
  {
    title: "Music Event 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
    imagePath: "https://bestmitzvahs.com/wp-content/uploads/2018/04/dj.jpg",
    date: "7/01/2025",
    location: "1111 Silver Spruce Dr. Running Springs CA 92382",
    hours: "6pm - 10pm",
  },
]

const seedDB = async () => {
    await Music.deleteMany({});
    for (const musicEvent of data) {
        const musicEventInfo = new Music({
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
