var express = require('express');
var router = express.Router();

//como es index.js a quien busco, no necesito especificarlo
// Traemos todas las funciones de DB en "api"
const api = require('../api');

/* GET home page. */
router.get('/', (req, res) =>{
  res.render('index', { title: 'Librería'});
});

router.get('/add', async (req, res) =>{
const titulo = 'Add'
//conseguir el listado de autores para el Form
const autores = await api.getAutores();
res.render('pages/add', { titulo, autores,});    
});

//utilizo POST para que el formulario envie los datos
//cargo un libro y muestro la librería completa
router.post('/add_process', async (req, res) =>{
  // Data MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const {title, price, author, cover} = await req.body; 
  await api.addBook(title, price, author, cover);
  const libros = await api.getLibros();
  const titulo = 'List of books and their authors'
  //renderiza, reutilizando la pagina pages/books
  res.render('pages/books', { libros, titulo });  
});

//en esta ruta, tomo los datos ingresados en el buscador del nav. Renderizo sobre la misma pagina books.
router.get('/search', async (req, res) =>{
// Los datos de la URL vienen en req.query
const libros = await api.findBookByTitle(req.query.q);
const titulo = 'Your Search'
res.render('pages/books', { libros, titulo });    
});

router.get('/books', async (req, res) =>{
  const libros = await api.getLibros();
  const titulo = 'List of books and their authors'
  res.render('pages/books', { libros, titulo });
});
//seguimos con SELECT, así que seguimos en confianza con GET.
//recupero la info que me brinda el link en las listas de "book.ejs"; (id del libro)
router.get('/book/:id', async (req, res) => {
  //":" PARAMS
  // Los datos de la URL vienen en req.params, por lo que tomamos el parámetro ID del request
  const libro = await api.getBookById(req.params.id);
  res.render('pages/book', { libro });
});


router.get('/delete-book/:id', async (req, res) => {
  //":" PARAMS
  // Los datos de la URL vienen en req.params, por lo que tomamos el parámetro ID del request
  const affectedRows = await api.deleteBookByID(req.params.id);
  // La respuesta de la query de SQL es la cantidad de filas afectadas
  if (affectedRows > 0){
//hago un redirect al listado de libros completos así funciona el F5, y no trata de volver a ingresar a la ruta ejemplo:"/delete-book/15"
//http://expressjs.com/en/5x/api.html#res.redirect    
    res.redirect('/books');
      }else{
    res.send(`Something went rong`)
      }
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
