const database = require('../db/database');

const bookFilter = async ({ genre, author, publisher, isFavorite, username }) => {
    const filters = [];
    const params = [];
    if (genre) {
        const genres = genre.split(',');
        filters.push(
            `book_id IN (SELECT book_id FROM Genre WHERE AGenre IN (${genres.map(() => '?').join(',')}))`
        );
        params.push(...genres);
    }
    if (author) {
        const authors = author.split(',');
        filters.push(
            `book_id IN (SELECT book_id FROM Write w JOIN Author a ON w.author_id = a.author_id WHERE a.author_name IN (${authors.map(() => '?').join(',')}))`
        );
        params.push(...authors);
    }
    if (publisher) {
        const publishers = publisher.split(',');
        filters.push(
            `b.publisher_id IN (SELECT p.publisher_id FROM Publisher WHERE p.publisher_name IN (${publishers.map(() => '?').join(',')}))`
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
    const query = `
        SELECT b.book_id, b.book_name, b.book_description, b.book_price, 
               b.publication_year, b.book_language, b.inventory_quantity, 
               b.image_name, p.publisher_name
        FROM Book b
        LEFT JOIN Publisher p ON b.publisher_id = p.publisher_id
        ${whereClause}`;

    const [rows] = await database.query(query, params);
    return rows;
};

module.exports = {
    bookFilter,
};