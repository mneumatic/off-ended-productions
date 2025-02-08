const express = require('express');
const passport = require("passport");
const {isLoggedIn} = require("../middleware");
const router = express.Router();
const Music = require("../models/music");
const CommunityEvents = require('../models/communityEvents');
const CommunityBusinesses = require('../models/communityBusinesses');


router.get('/', async (req, res) => {
  res.render('user/login', { title: "Login | OEP"});
})

router.post('/', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
  req.flash('success', 'Welcome Back!');
  const redirectUrl = req.session.returnTo || 'login/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

router.get('/dashboard', isLoggedIn, async (req, res) => {
  const music = await Music.find({});
  const events = await CommunityEvents.find({})
  const businesses = await CommunityBusinesses.find({});
  res.render('user/dashboard', {
    title: "Dashboard | OEP",
    music,
    events,
    businesses
  });
})

router.get('/logout', async (req, res) => {
  req.logout();
  req.flash('success', "Goodbye!");
  res.redirect('/');
})

module.exports = router;
