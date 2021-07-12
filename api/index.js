//traigo los operadores de sequelize
const {Op} = require('sequelize');
// Traemos los modelos
const db = require('../models');
//findAll a través de sequalize se convierte en un SELECT *
const getLibros = async () => {
    const libros = await db.libro.findAll({include: db.autor})
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
const deleteBookByID = async (Id) => {
// es muy probable exista una funcion llamada deleteByPK, buscar en sequelize
// book: nos devulve la cantidad de filas eliminadas. NO UN JSON CON DATA DEL LIBRO
        const book = await db.libro.destroy({
            where: {
                id:Id
            }
        }).then(result => {
            return result;
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

//recibo lo que el usuario cargó en la busqueda.Es la query de la URL.
const findBookByTitle = async (qq) => {
const books = await db.libro.findAll({
    where:{
        titulo:{
//[Op.substring] = LIKE '%dato%' 
            [Op.substring]: qq
        }
    }, include:db.autor
}).then(result =>{
    return result;
});
    return books;
}

const addBook = async (titulo, precio, autorId, portada) => {
const book = await db.libro.create({
    titulo,
    precio,
    portada,
    autorId
}).then(result =>{
    return result;
});
return book;
}
module.exports = {
    getLibros, getAutores,getBookById,findBookByTitle,addBook,deleteBookByID
}


