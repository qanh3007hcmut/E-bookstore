const { bookFilter } = require('../models/getbook')

const get_book = async (req, res) => {
    const { genre, author, publisher, isFavorite, username } = req.query;
    try {
        const rows = await bookFilter({ genre, author, publisher, isFavorite, username });
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    get_book,
};