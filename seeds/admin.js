require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('../models/admin')

mongoose.connect('mongodb://localhost:27017/oep')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))

const seedDB = async () => {
  await Admin.deleteMany({});
  const user = new Admin({
    username: process.env.ADMIN_USER,
    name: process.env.ADMIN_NAME
  })
  const register = await Admin.register(user, process.env.ADMIN_USER_PASS);
  await register.save()
}

seedDB().then(() => {
  mongoose.connection.close()
})

console.log("User Seeded.")
