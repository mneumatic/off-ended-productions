const mongoose = require('mongoose')
const Events = require('../models/events')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))

const data = [
    {
        title: "Demo Event 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "https://1drv.ms/u/c/e25ec7064419b6a1/IQTlhlXuEI6PQL857dQSuw3HAXQk_et6gGww1AEIRcQ3gkI?width=1024",
        date: "1/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "https://1drv.ms/u/c/e25ec7064419b6a1/IQTlhlXuEI6PQL857dQSuw3HAXQk_et6gGww1AEIRcQ3gkI?width=1024",
        date: "3/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "https://1drv.ms/u/c/e25ec7064419b6a1/IQTlhlXuEI6PQL857dQSuw3HAXQk_et6gGww1AEIRcQ3gkI?width=1024",
        date: "4/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "https://1drv.ms/u/c/e25ec7064419b6a1/IQTlhlXuEI6PQL857dQSuw3HAXQk_et6gGww1AEIRcQ3gkI?width=1024",
        date: "5/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
]

const seedDB = async () => {
    await Events.deleteMany({});
    for (const communityEvent of data) {
        const communityEventInfo = new Events({
            title: communityEvent.title,
            description: communityEvent.description,
            imagePath: communityEvent.imagePath,
            date: communityEvent.date,
            location: communityEvent.location,
            hours: communityEvent.hours,
        })
        await communityEventInfo.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})

console.log("Community Events Seeded.")
