const db = require('../db/database');

async function find(username, password) {
    query = 'SELECT * FROM customer_account WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Query error.', err);
            return 0;
        }
        if (results.length === 0) {
            return 0;
        }
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) return 2;
            else return 1;
        });
    });
}

// 0 la error hoac sai username, 1 la sai pass, 2 la successful

module.exports = {
    find
}; 