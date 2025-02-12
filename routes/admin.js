const express = require('express');
const passport = require("passport");
const { isLoggedIn, validateMusicEvents } = require("../middleware");
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Music = require("../models/music");
const CommunityEvents = require('../models/events');
const CommunityBusinesses = require('../models/businesses');


router.get('/login', async (req, res) => {
  res.render('admin/login', {
    title: "Login | OEP",
    authenticated: res.locals.currentUser,
  });
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
  req.flash('success', 'Welcome Back!');
  const redirectUrl = req.session.returnTo || '/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

router.get('/dashboard', isLoggedIn, async (req, res) => {
  const music = await Music.find({});
  const events = await CommunityEvents.find({})
  const businesses = await CommunityBusinesses.find({});
  res.render('admin/dashboard', {
    title: "Dashboard | OEP",
    music,
    events,
    businesses,
    authenticated: res.locals.currentUser
  });
})

router.get('/new', isLoggedIn, (req, res) => {
  res.render('admin/new', {
    title: "New Music Event | OEP",
    genre: req.query.genre,
    authenticated: res.locals.currentUser,
  });
})

router.post('/new', isLoggedIn, catchAsync(async (req, res, next) => {
  let event
  let genre = req.query.genre
  if (genre === 'music') {
    event = new Music(req.body.event);
    genre = "Music Event"
  }
  if (genre === 'event') {
    event = new CommunityEvents(req.body.event);
    genre = "Local Event"
  }
  if (genre === 'business') {
    event = new CommunityBusinesses(req.body.event)
    genre = "Local Business"
  }
  await event.save();

  req.flash('success', `Successfully made a new ${genre}!`);
  res.redirect(`/dashboard`)
}))

router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Music.findById(id) || await CommunityEvents.findById(id) || await CommunityBusinesses.findById(id)

  if (!item) {
    req.flash('error', 'Cannot find that!');
    return res.redirect('/dashboard');
  }

  res.render('admin/edit', {
    title: 'Edit | OEP',
    item,
    authenticated: res.locals.currentUser
  });
}))

router.put('/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  let item = await Music.findByIdAndUpdate(id, { ...req.body.item }) ||
    await CommunityEvents.findByIdAndUpdate(id, { ...req.body.item }) ||
    await CommunityBusinesses.findByIdAndUpdate(id, { ...req.body.item })

  if (!item) {
    req.flash('error', 'Update Failed!');
    return res.redirect('/dashboard');
  }

  req.flash('success', 'Successfully updated!');
  res.redirect(`/dashboard`);
}));

router.delete('/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  await Music.findByIdAndDelete(id);
  await CommunityEvents.findByIdAndDelete(id);
  await CommunityBusinesses.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted.')
  res.redirect('/dashboard');
}));

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success', "Goodbye!");
    res.redirect('/login');
  });
})

module.exports = router;
