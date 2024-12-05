const database = require('../db/database');
const { pool } = require('../db/database');
const { book, bookByID } = require('../models/getbook')

const get_book = async (req, res) => {
    const { genre, author, publisher, isFavorite } = req.query;
    try {
        const filters = [];
        const params = [];
        if (genre) {
            const genres = genre.split(',');
            filters.push(
                `book_id IN (SELECT book_id FROM Genre WHERE AGenre IN (${genres
                    .map(() => '?')
                    .join(',')}))`
            );
            params.push(...genres);
        }
        if (author) {
            const authors = author.split(',');
            filters.push(
                `book_id IN (SELECT book_id FROM Write w JOIN Author a ON w.author_id = a.author_id WHERE a.author_name IN (${authors
                    .map(() => '?')
                    .join(',')}))`
            );
            params.push(...authors);
        }
        if (publisher) {
            const publishers = publisher.split(',');
            filters.push(
                `publisher_id IN (SELECT publisher_id FROM Publisher WHERE publisher_name IN (${publishers
                    .map(() => '?')
                    .join(',')}))`
            );
            params.push(...publishers);
        }
        if (isFavorite === 'true' && username) {
            filters.push(
                `book_id IN (SELECT fb.book_id FROM Favorited_book fb 
                     JOIN Favorite_list fl ON fb.favorite_list_id = fl.favorite_list_id
                     WHERE fl.username = ?)`
            );
            params.push(username);
        }
        const whereClause = filters.length > 0 ? `WHERE ${filters.join(' AND ')}` : '';
        const [rows] = await database.query(
            `SELECT b.book_id, b.book_name, b.book_description, b.book_price, b.publication_year, b.book_language, b.inventory_quantity, b.image_name, p.publisher_name
            FROM Book b 
            LEFT JOIN Publisher p ON b.publisher_id = p.publisher_id
            ${whereClause}`, params);
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const get_image = async (req, res) => {
    const { id } = req.body;
    if (!id || !Array.isArray(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const books = await bookByID(id);
        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found for the provided IDs' });
        }
        const imageUrls = books.map(book => ({
            id: book.id,
            url: `/images/${book.image_name}`
        }));
        res.status(200).json(imageUrls);
    } catch (error) {
        console.error('Error fetch book images: ', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    get_book,
    get_image,
};