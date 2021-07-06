var express = require('express');
var router = express.Router();
const api = require('../api');//como es index.js a quien busco, no necesito especificarlo

/* GET home page. */
router.get('/', (req, res) =>{
  //const books = await api.getBooks();
  res.render('index', { title: 'gatitos'});
  //res.send(books); //muestro los books en navegador
});

router.get('/search', async (req, res) =>{
// Los datos de la URL vienen en req.query
const book = await api.findBookByTitle(req.query.zapato);   
res.send(book); 
});
router.get('/books', async (req, res) =>{
  const libros = await api.getLibros();
  const titulo = 'List of books'
  res.render('pages/books', { libros, titulo });
});
//seguimos con SELECT, así que seguimos en confianza con GET.
router.get('/book/:id', async (req, res) => {
  //":" PARAMS
  // Los datos de la URL vienen en req.params, por lo que tomamos el parámetro ID del request
  const libro = await api.getBookById(req.params.id);
  res.render('pages/book', { libro });
});

router.get('/authors', async (req, res) =>{
  const autores = await api.getAutores();
  const titulo = 'The list of authors'
  res.render('pages/authors', {autores,titulo});
  
  
});

router.get ('/contact', (req, res) => {
  res.render('pages/contact');
});

router.get ('/us', (req, res) => {
  res.render('pages/us');
});


module.exports = router;
