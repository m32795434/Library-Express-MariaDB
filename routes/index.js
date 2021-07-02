var express = require('express');
var router = express.Router();
const api = require('../api');//como es index.js a quien busco, no necesito especificarlo

/* GET home page. */
router.get('/', async (req, res,) =>{
  const books = await api.getBooks();
  console.log(books);
  //res.render('index', { title: 'gatitos' });
  res.send(books);
});

router.get ('/contacto', (req, res) => {
  res.render('pages/contacto');
});
router.get ('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

module.exports = router;
