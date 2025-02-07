const express = require('express');
const router = express.Router();
const Categories = require('../models/categories');
const Mottos = require('../models/mottos');
const MusicEvents = require('../models/music');
const CommunityEvents = require('../models/communityEvents');
const CommunityBusinesses = require('../models/communityBusinesses');
const GitBadges = require('../models/gitbadges');
const gitUser = require('../data/gituser.json');
const gitRepos = require('../data/gitrepos.json');
const rssFeed = require('../data/rss.json');

/* GET home page. */
router.get('/', async (req, res) => {
  const categories = await Categories.find({});
  const mottos = await Mottos.find({});
  const motto = mottos[Math.floor(Math.random() * mottos.length)];
  console.log(motto);
  res.render('index', {
    title: 'Off Ended Productions',
    categories,
    motto
  });
});

router.get('/podcast', async (req, res) => {
  const recentItems = rssFeed.items.slice(0, 3);
  res.render('podcast', {
    title: 'Podcast | OEP',
    rssFeed: recentItems
  });
});

router.get('/twojz-music', async (req, res) => {
  const musicEvents = await MusicEvents.find({});
  res.render('twojz-music', {
    title: '2Jz Music | OEP',
    musicEvents
  });
});

router.get('/platinum-signatures', async (req, res) => {
  res.render('platinum-signatures', { title: 'Platinum Signatures | OEP' });
});

router.get('/mneumatic-designs', async (req, res) => {
  const gitBadges = await GitBadges.find({});
  const recentItems = gitRepos.slice(0, 9);
  res.render('mneumatic-designs', {
    title: 'MNEUMATIC Designs | OEP',
    gitUser,
    gitRepos: recentItems,
    gitBadges
  });
});

router.get('/community', async (req, res) => {
  res.render('community', { title: 'Community | OEP' });
});

router.get('/community/events', async (req, res) => {
  const events = await CommunityEvents.find({})
  res.render('community-events', {
    title: 'Community Events | OEP',
    events
  });
});

router.get('/community/businesses', async (req, res) => {
  const businesses = await CommunityBusinesses.find({});
  res.render('community-businesses', {
    title: 'Community Businesses | OEP',
    businesses
  });
});

router.get('/about', async (req, res) => {
  res.render('about', { title: 'The Crew | OEP' });
});

module.exports = router;
