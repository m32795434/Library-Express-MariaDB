// Traemos los modelos
const db = require('../models');

const getLibros = async () => {
    const libros = await db.libro.findAll({include: db.autor.id})//exporto solo adicional el "id del autor", no todos los datos
        .then(result => {
            return result;
        });

    return libros;
}
const getAutores = async () => {
    const autores = await db.autor.findAll({include: db.libro})
         .then(result => {
             return result;
         });

    return autores;
}

module.exports = {
    getLibros, getAutores
}


