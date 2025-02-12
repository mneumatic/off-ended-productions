require('dotenv').config()
const express = require('express');
const router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const Categories = require('../models/categories');
const Mottos = require('../models/mottos');
const MusicEvents = require('../models/music');
const Events = require('../models/events');
const Businesses = require('../models/businesses');
const GitBadges = require('../models/gitbadges');
const gitUser = require('../data/gituser.json');
const gitRepos = require('../data/gitrepos.json');
const rssFeed = require('../data/rss.json');
const nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2')

/* GET home page. */
router.get('/', async (req, res) => {
  const categories = await Categories.find({});
  const mottos = await Mottos.find({});
  const motto = mottos[Math.floor(Math.random() * mottos.length)];
  console.log(motto);
  res.render('index', {
    title: 'Off Ended Productions',
    categories,
    motto,
    authenticated: res.locals.currentUser,
  });
});

router.get('/podcast', async (req, res) => {
  const recentItems = rssFeed.items.slice(0, 3);
  res.render('podcast', {
    title: 'Podcast | OEP',
    rssFeed: recentItems,
    authenticated: res.locals.currentUser,
  });
});

router.get('/twojz-music', async (req, res) => {
  const musicEvents = await MusicEvents.find({});
  res.render('twojz-music', {
    title: '2Jz Music | OEP',
    musicEvents,
    authenticated: res.locals.currentUser,
  });
});

router.get('/platinum-signatures', async (req, res) => {
  res.render('platinum-signatures', {
    title: 'Platinum Signatures | OEP',
    authenticated: res.locals.currentUser,
  });
});

router.get('/mneumatic-designs', async (req, res) => {
  const gitBadges = await GitBadges.find({});
  const recentItems = gitRepos.slice(0, 9);
  res.render('mneumatic-designs', {
    title: 'MNEUMATIC Designs | OEP',
    gitUser,
    gitRepos: recentItems,
    gitBadges,
    authenticated: res.locals.currentUser,
  });
});

router.get('/community', async (req, res) => {
  res.render('community', {
    title: 'Community | OEP',
    authenticated: res.locals.currentUser,
  });
});

router.get('/community/events', async (req, res) => {
  const events = await Events.find({})
  res.render('community-events', {
    title: 'Community Events | OEP',
    events,
    authenticated: res.locals.currentUser,
  });
});

router.get('/community/businesses', async (req, res) => {
  const businesses = await Businesses.find({});
  res.render('community-businesses', {
    title: 'Community Businesses | OEP',
    businesses,
    authenticated: res.locals.currentUser,
  });
});

router.get('/about', async (req, res) => {
  res.render('about', {
    title: 'The Crew | OEP',
    authenticated: res.locals.currentUser,
  });
});

router.get('/contact', csrfProtection, async (req, res) => {
  res.render('contact', {
    title: 'Contact Us | OEP',
    email: req.query.valid,
    authenticated: res.locals.currentUser,
    csrfToken: req.csrfToken()
  })
})

router.post('/contact', async (req, res) => {
  let transport
  if (process.env.MODE === 'production') {
    transport = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: process.env.MAIL_TO,
          clientId: process.env.MAIL_ID,
          clientSecret: process.env.MAIL_SECRET,
          refreshToken: process.env.MAIL_REFRESH_TOKEN,
        })
      }
    })
  } else {
    transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.DEV_MAIL_TO,
        pass: process.env.DEV_MAIL_PASS,
      }
    })
  }

  const mailOptions = {
    from: req.body.name + ' ' + req.body.email,
    to: process.env.MAIL_ID,
    subject: req.body.subject,
    text: req.body.message
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      req.flash('error', 'Oops, something went wrong!');
      res.redirect('/contact?valid=' + encodeURIComponent('false'))
    } else {
      req.flash('success', 'Successfully sent!');
      res.redirect('/contact?valid=' + encodeURIComponent('true'))
    }
  })
})

module.exports = router;
