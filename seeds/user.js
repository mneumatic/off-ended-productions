require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))

const seedDB = async () => {
  await User.deleteMany({});
  const user = new User({username: process.env.USER,})
  const register = await User.register(user, process.env.USER_PASS);
  await register.save()
}

seedDB().then(() => {
  mongoose.connection.close()
})

console.log("User Seeded.")
