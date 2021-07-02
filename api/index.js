// Traemos los modelos
const db = require('../models');

const getBooks = async () => {
    const books = await db.libro.findAll({include: db.autor.id})//exporto solo adicional el "id del autor", no todos los datos
        .then(result => {
            return result;
        });

    return books;
}
const getAutores = async () => {
    const autores = await db.autor.findAll({include: db.libro})
         .then(result => {
             return result;
         });

    return autores;
}

module.exports = {
    getBooks, getAutores
}


