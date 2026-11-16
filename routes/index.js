
var express = require('express');
var router = express.Router();

// Handles the routes for my portfolio pages

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

// Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Makes these routes available to app.js
module.exports = router;
