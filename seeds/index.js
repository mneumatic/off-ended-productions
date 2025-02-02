const mongoose = require('mongoose')
const Categories = require('../models/categories')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))

const data = [
    {
        imagePath:  "/img/oep-podcast-logo.webp",
        title:  "The Off Ended Podcast",
        urlPath:    "/podcast"
    },
    {
        imagePath:  "/img/twojz-music-logo.webp",
        title:  "2Jz Music",
        urlPath:    "/twojz-music"
    },
    {
        imagePath:  "/img/platinum-signatures.webp",
        title:  "Platinum Signatures",
        urlPath:    "/platinum-signatures"
    },
    {
        imagePath:  "/img/mneumatic-designs.webp",
        title:  "MNEUMATIC Designs",
        urlPath:    "/mneumatic-designs"
    }
]

const seedDB = async () => {
    await Categories.deleteMany({});
    for (const category of data) {
        const cat = new Categories({
            imagePath: category.imagePath,
            title: category.title,
            urlPath: category.urlPath
        })
        await cat.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})

console.log("Categories Seeded.")
