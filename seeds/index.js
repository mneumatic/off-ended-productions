const mongoose = require('mongoose')
const Categories = require('../models/categories')

mongoose.connect('mongodb://localhost:27017/oep')

mongoose.connection.on("error", console.error.bind(console, "connection error:"))

const data = [
    {
        image:  "oep-podcast-logo.webp",
        title:  "The Off Ended Podcast",
        url:    "/podcast"
    },
    {
        image:  "twojz-red-white-logo.webp",
        title:  "2Jz Music",
        url:    "/twojz-music"
    },
    {
        image:  "platinum-signatures.webp",
        title:  "Platinum Signatures",
        url:    "/platinum-signatures"
    },
    {
        image:  "mneumatic-designs.webp",
        title:  "MNEUMATIC Designs",
        url:    "/mneumatic-designs"
    }
]

const seedDB = async () => {
    await Categories.deleteMany({});
    for (const category of data) {
        const cat = new Categories({
            image: category.image,
            title: category.title,
            url: category.url
        })
        await cat.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})

console.log("Categories Seeded.")
