const express = require('express');
const router = express.Router();
const Businesses = require("../../models/businesses");
const catchAsync = require('../../utils/catchAsync');
const { isLoggedIn } = require("../../middleware");

// GET:
router.get('/', isLoggedIn, catchAsync(async (req, res) => {
  res.render('admin/new/business', {
    title: "New Business | OEP",
    authenticated: res.locals.currentUser,
  })
}))

// POST:
router.post('/', isLoggedIn, catchAsync(async (req, res, next) => {
  const event = new Businesses(req.body.event)
  await event.save();
  req.flash('success', `Successfully made a new Business!`);
  res.redirect(`/admin/dashboard`)
}))

// GET:
router.get('/edit/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Businesses.findById(id)

  if (!item) {
    req.flash('error', 'Cannot find that!');
    return res.redirect('/admin/dashboard');
  }

  res.render('admin/edit/business', {
    title: 'Edit | OEP',
    item,
    authenticated: res.locals.currentUser
  });
}))

// POST:
router.put('/edit/:id', isLoggedIn, catchAsync(async (req, res) => {
  const { id } = req.params;
  let item = await Businesses.findByIdAndUpdate(id, { ...req.body.item })

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
  await Businesses.findByIdAndDelete(id);

  req.flash('success', 'Successfully deleted.')
  res.redirect('/admin/dashboard');
}));

module.exports = router
