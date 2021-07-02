// Traemos los modelos
const db = require('../models');

const getBooks = async () => {
    const books = await db.libro.findAll()
        .then(result => {
            return result;
        });

    return books;
}

module.exports = {
    getBooks
}
