const express = require('express');
const passport = require("passport");
const { isLoggedIn, validateMusicEvents } = require("../../middleware");
const router = express.Router();
const catchAsync = require('../../utils/catchAsync');
const Music = require("../../models/music");
const Events = require('../../models/events');
const Businesses = require('../../models/businesses');


router.get('/', async (req, res) => {
  res.render('admin/login', {
    title: "Login | OEP",
    authenticated: res.locals.currentUser,
  });
})

router.post('/', passport.authenticate('local', { failureFlash: true, failureRedirect: '/admin' }), (req, res) => {
  req.flash('success', 'Welcome Back!');
  const redirectUrl = req.session.returnTo || '/admin/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

router.get('/dashboard', isLoggedIn, async (req, res) => {
  const music = await Music.find({});
  const events = await Events.find({})
  const businesses = await Businesses.find({});
  res.render('admin/dashboard', {
    title: "Dashboard | OEP",
    music,
    events,
    businesses,
    authenticated: res.locals.currentUser
  });
})

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success', "Goodbye!");
    res.redirect('/admin');
  });
})

module.exports = router;
