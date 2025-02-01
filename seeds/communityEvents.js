const mongoose = require('mongoose')
const CommunityEvents = require('../models/communityEvents')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

const data = [
    {
        title: "Demo Event 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "1/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "3/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "4/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
    {
        title: "Demo Event 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "5/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
    },
]

const seedDB = async () => {
    await CommunityEvents.deleteMany({});
    for (const communityEvent of data) {
        const communityEventInfo = new CommunityEvents({
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