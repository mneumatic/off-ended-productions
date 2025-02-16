require('dotenv').config()
const express = require('express');
const passport = require("passport");
const { isLoggedIn, validateMusicEvents } = require("../../middleware");
const router = express.Router();
const catchAsync = require('../../utils/catchAsync');
const Music = require("../../models/music");
const Events = require('../../models/events');
const Businesses = require('../../models/businesses');
const fs = require("fs");


router.get('/', async (req, res) => {
  res.render('admin/login', {
    title: "Login | OEP",
    authenticated: res.locals.currentUser,
  });
})

router.post('/', passport.authenticate('local', { failureFlash: true, failureRedirect: '/admin' }), (req, res) => {
  req.flash('success', `Welcome Back, ${req.user.name}!`);
  const redirectUrl = req.session.returnTo || '/admin/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

// TODO: Enable isLoadedIn
router.get('/dashboard', async (req, res) => {
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

router.get('/update-rss', async (req, res) => {
  try {
    fetch(process.env.SPOTIFY_RSS_URL)
      .then(response => response.json())
      .then(data => {
        // Convert JSON object to string
        console.log(data);
        const jsonString = JSON.stringify(data, null, 2);

        // Write JSON string to a file
        fs.writeFile('./data/rss.json', jsonString, (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('File successfully written!');
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
    req.flash('success', `Updated RSS Feed!`);
  } catch (err) {
    console.log(err);
    req.flash('error', `Failed to update RSS Feed!`);
  }
  const redirectUrl = req.session.returnTo || '/admin/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

router.get('/update-github', async (req, res) => {
  try {
    fetch(`https://api.github.com/users/mneumatic`)
      .then(response => response.json())
      .then(data => {
        // Convert JSON object to string
        const jsonString = JSON.stringify(data, null, 2);

        // Write JSON string to a file
        fs.writeFile('./data/gituser.json', jsonString, (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('File successfully written!');
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));

    fetch(`https://api.github.com/users/mneumatic/repos`)
      .then(response => response.json())
      .then(data => {
        // Convert JSON object to string
        const jsonString = JSON.stringify(data, null, 2);

        // Write JSON string to a file
        fs.writeFile('./data/gitrepos.json', jsonString, (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('File successfully written!');
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
    req.flash('success', `Updated GitHub Information!`);
  } catch (err) {
    console.log(err);
    req.flash('error', `Failed to update GitHub Information!`);
  }
  const redirectUrl = req.session.returnTo || '/admin/dashboard';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
})

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success', "Goodbye!");
    res.redirect('/admin');
  });
})

module.exports = router;
