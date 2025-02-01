const mongoose = require('mongoose')
const CommunityBusinesses = require('../models/communityBusinesses')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

const data = [
    {
        title: "Demo Business 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "1/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
        Phone:       "+19999999999",
    },
    {
        title: "Demo Business 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "3/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
        Phone:       "+19999999999",
    },
    {
        title: "Demo Business 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "4/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
        Phone:       "+19999999999",
    },
    {
        title: "Demo Business 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae distinctio doloremque, harum incidunt ipsam ipsum magnam maxime odit officia perferendis quas quisquam quos tempore, tenetur unde voluptatem voluptates?",
        imagePath: "/img/oep-podcast-logo.webp",
        date: "5/01/2025",
        location: "1111 Silver Spruce Dr. Running Springs CA 92382",
        hours: "6pm - 10pm",
        Phone:       "+19999999999",
    },
]

const seedDB = async () => {
    await CommunityBusinesses.deleteMany({});
    for (const communityBusiness of data) {
        const communityBusinessInfo = new CommunityBusinesses({
            title: communityBusiness.title,
            description: communityBusiness.description,
            imagePath: communityBusiness.imagePath,
            date: communityBusiness.date,
            location: communityBusiness.location,
            hours: communityBusiness.hours,
        })
        await communityBusinessInfo.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})