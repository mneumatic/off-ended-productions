const express = require('express');
const router = express.Router();
const Events = require("../../models/events");
const catchAsync = require('../../utils/catchAsync');
const { isLoggedIn } = require("../../middleware");

// GET:
router.get('/', isLoggedIn, catchAsync(async (req, res) => {
  res.render('admin/new/event', {
    title: "New Events Event | OEP",
    authenticated: res.locals.currentUser,
  })
}))

// POST:
router.post('/', isLoggedIn, catchAsync(async (req, res, next) => {
  const event = new Events(req.body.event)
  await event.save();
  req.flash('success', `Successfully made a new Local Event!`);
  res.redirect(`/admin/dashboard`)
}))

// GET:
router.get('/edit/:id/', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Events.findById(id)

  if (!item) {
    req.flash('error', 'Cannot find that!');
    return res.redirect('/admin/dashboard');
  }

  res.render('admin/edit/event', {
    title: 'Edit | OEP',
    item,
    authenticated: res.locals.currentUser
  });
}))

// POST:
router.put('/edit/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  let item = await Events.findByIdAndUpdate(id, { ...req.body.event })

  if (!item) {
    req.flash('error', 'Update Failed!');
    return res.redirect('/admin/dashboard');
  }

  req.flash('success', 'Successfully updated!');
  res.redirect(`/admin/dashboard`);
}));

//
// DELETE
router.delete('/delete/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  await Events.findByIdAndDelete(id);

  req.flash('success', 'Successfully deleted.')
  res.redirect('/admin/dashboard');
}));

module.exports = router
