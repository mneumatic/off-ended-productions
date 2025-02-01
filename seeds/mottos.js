const mongoose = require('mongoose')
const Mottos = require('../models/mottos')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

const data = [
    ["Don't Sweat ", 'The ', 'Small Stuff.'],
    ["Off Ended, ", "Don't Get Offended, ", "No Pun Intended."],
    ["Trust The Process, ", "Finesse The Hustle."],
    ["Take The Bitter ", "With The Sweet."],
    ["Ain't Nowhere to ", "Go To But Starting ", "From Rock Bottom."],
    ["Why Put Off ", "Tomorrow What Can ", "Be Done Today."]
]

const seedDB = async () => {
    await Mottos.deleteMany({});
    for (const motto of data) {
        const mot = new Mottos({
            motto: motto
        })
        await mot.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})