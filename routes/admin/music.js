const express = require('express');
const router = express.Router();
const Music = require("../../models/music");
const catchAsync = require('../../utils/catchAsync');
const { isLoggedIn } = require("../../middleware");

// GET:
router.get('/', catchAsync(async (req, res) => {
  res.render('admin/new/music', {
    title: "New Music Event | OEP",
    authenticated: res.locals.currentUser,
  })
}))

// POST:
router.post('/', catchAsync(async (req, res, next) => {
  const event = new Music(req.body.event)
  await event.save();
  req.flash('success', `Successfully made a new Music Event!`);
  res.redirect(`/admin/dashboard`)
}))

// GET: TODO: isLoggedIn
router.get('/edit/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Music.findById(id)

  if (!item) {
    req.flash('error', 'Cannot find that!');
    return res.redirect('/admin/dashboard');
  }

  res.render('admin/edit/music', {
    title: 'Edit | OEP',
    item,
    authenticated: res.locals.currentUser
  });
}))

// POST: TODO: isLoggedIn
router.put('/edit/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  let item = await Music.findByIdAndUpdate(id, { ...req.body.event })

  if (!item) {
    req.flash('error', 'Update Failed!');
    return res.redirect('/admin/dashboard');
  }

  req.flash('success', 'Successfully updated!');
  res.redirect(`/admin/dashboard`);
}));

//
// DELETE TODO: isLoggedIn
router.delete('/delete/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  await Music.findByIdAndDelete(id);

  req.flash('success', 'Successfully deleted.')
  res.redirect('/admin/dashboard');
}));

module.exports = router
