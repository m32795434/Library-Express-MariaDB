var express = require('express');
var router = express.Router();
const api = require('../api');//como es index.js a quien busco, no necesito especificarlo

/* GET home page. */
router.get('/', (req, res,) =>{
  //const books = await api.getBooks();
  res.render('index', { title: 'gatitos'});
  //res.send(books); //muestro los books en navegador
});
router.get('/autores', async (req, res,) =>{
  const autores = await api.getAutores();
  const libros = await api.getLibros();
  const titulo = 'Listado de Autores con sus libros'
  res.render('pages/autores', {titulo, autores, libros})
});
router.get('/libros', async (req, res,) =>{
  const libros = await api.getLibros();
  res.send(libros);
});

router.get ('/contacto', (req, res) => {
  res.render('pages/contacto');
});

router.get ('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});


module.exports = router;
