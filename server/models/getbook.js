const database = require('../db/database');
const db = require('../db/database');

async function book() {
    const [result] = await database.query('SELECT * FROM book');
    return result;
}

const bookByID = (id) => {
    return new Promise((resolve, reject) => {
        const placeholders = id.map(() => '?').join(',');
        const query = `SELECT book_id, image_name FROM book WHERE book_id IN (${placeholders})`;
        database.query(query, id, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    book,
    bookByID,
};