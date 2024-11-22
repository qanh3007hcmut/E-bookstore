const db = require('../db/database');

async function book(req, res, next) {
    const query = 'SELECT * FROM book';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Query error.', err);
            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json(results);
    });
}

async function image(req, res, next) {

}

module.exports = {
    book
};