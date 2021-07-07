var express = require('express');
var router = express.Router();
const api = require('../api');//como es index.js a quien busco, no necesito especificarlo

/* GET home page. */
router.get('/', (req, res) =>{
  //const books = await api.getBooks();
  res.render('index', { title: 'gatitos'});
  //res.send(books); //muestro los books en navegador
});

router.get('/add', async (req, res) =>{
const titulo = 'Add'
//conseguir el listado de autores y pasarlo al render
const autores = await api.getAutores();
res.render('pages/add', { titulo, autores });    
});

router.post('/add_process', async (req, res) =>{
  const {title, price, author, cover} = await req.body;
  const book = await api.addBook(title, price, author, cover);
  res.send(book);  
});

router.get('/search', async (req, res) =>{
// Los datos de la URL vienen en req.query
const libros = await api.findBookByTitle(req.query.q);
const titulo = 'Search your book'
res.render('pages/books', { libros, titulo });    
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
  const libros = await api.getLibros();
  const titulo = 'List of authors and their books'
    res.render('pages/authors', {autores,titulo, libros});
  });

router.get ('/contact', (req, res) => {
  res.render('pages/contact');
});

router.get ('/us', (req, res) => {
  res.render('pages/us');
});


module.exports = router;
