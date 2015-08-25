var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next) {
  res.redirect('success').json("Success!");
});

router.get('/success', function(req, res, next) {
  res.render('success');
});

module.exports = router;
