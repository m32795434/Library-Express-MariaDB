var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'gatitos' });
});

router.get ('/contacto', (req, res) => {
  res.render('pages/contacto');
});
router.get ('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

module.exports = router;
