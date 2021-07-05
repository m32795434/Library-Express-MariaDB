// Traemos los modelos
const db = require('../models');
//findAll a través de sequalize se convierte en un SELECT *
const getLibros = async () => {
    const libros = await db.libro.findAll({include: db.autor.id})//exporto solo adicional el "id del autor", no todos los datos
        .then(result => {
            return result;
        });

    return libros;
}
const getBookById = async (id) => {
    // SELECT * FROM libro WHERE id = Numeroid
    // findByPk: find by primary key
    const book = await db.libro.findByPk(id, {include: db.autor})
        .then(result => {
            return result
        });

    return book;
}
const getAutores = async () => {
    const autores = await db.autor.findAll({include: db.libro})
         .then(result => {
             return result;
         });

    return autores;
}

module.exports = {
    getLibros, getAutores,getBookById
}


