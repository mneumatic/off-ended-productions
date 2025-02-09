const express = require('express');
const passport = require("passport");
const {isLoggedIn} = require("../middleware");
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Music = require("../models/music");
const CommunityEvents = require('../models/communityEvents');
const CommunityBusinesses = require('../models/communityBusinesses');


router.get('/login', async (req, res) => {
  res.render('user/login', {
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
  res.render('user/dashboard', {
    title: "Dashboard | OEP",
    music,
    events,
    businesses,
    authenticated: res.locals.currentUser
  });
})

router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Music.findById(id) || await CommunityEvents.findById(id) || await CommunityBusinesses.findById(id)

  if (!item) {
    req.flash('error', 'Cannot find that!');
    return res.redirect('/dashboard');
  }

  res.render('user/edit', {
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
  res.redirect(`/${item._id}/edit`)
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
