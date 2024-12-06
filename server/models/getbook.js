/* eslint-disable no-undef */
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

const getPage = async (pages, limit) => {
    try {
        const offset = (pages - 1) * limit;
        const [totalBooks] = await database.query('SELECT COUNT(*) as count FROM ebookstores.book');
        const totalCount = totalBooks[0].count;
        const totalPages = Math.ceil(totalCount / limit);
        const booksQuery = `SELECT * FROM ebookstores.book LIMIT ? OFFSET ?`;
        const [books] = await database.query(booksQuery, [limit, offset]);
        return {
            data: books,
            totalPages: totalPages,
            currentPage: pages,
        };
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Could not fetch books');
    }
};

const allBooks = async () => {
    try {
        const booksQuery = `
        SELECT 
            b.book_id,
            b.book_name,
            b.book_description,
            b.book_price,
            b.publication_year,
            b.book_language,
            b.inventory_quantity,
            b.image_name,
            b.book_type,
            p.publisher_name AS publisher,
            GROUP_CONCAT(DISTINCT a.author_name SEPARATOR ',') AS authors,
            s.series_name,
            si.order_in_series,
            GROUP_CONCAT(DISTINCT g.AGenre SEPARATOR ',') AS genres
        FROM 
            book b
        LEFT JOIN 
            \`write\` w ON b.book_id = w.book_id
        LEFT JOIN 
            author a ON w.author_id = a.author_id
        LEFT JOIN 
            publisher p ON b.publisher_id = p.publisher_id
        LEFT JOIN 
            series_item si ON b.book_id = si.item_id
        LEFT JOIN 
            series s ON si.series_id = s.series_id
        LEFT JOIN 
            genre g ON b.book_id = g.book_id
        GROUP BY 
            b.book_id
        ORDER BY 
            b.book_id;
        `;
        const [books] = await database.query(booksQuery);
        return books;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Could not fetch books');
    }
};

const authors = async () => {
    try {
        const author_query = "SELECT author_name FROM ebookstores.author"
        const [authors] = await database.query(author_query);
        const authorNames = authors.map(author => author.author_name);
        return authorNames;
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw new Error('Could not fetch authors');
    }
}

const publishers = async () => {
    try {
        const publisher_query = "SELECT publisher_name FROM ebookstores.publisher"
        const [publishers] = await database.query(publisher_query);
        const publisherName = publishers.map(publisher => publisher.publisher_name);
        return publisherName;
    } catch (error) {
        console.error('Error fetching authors:', error);
        throw new Error('Could not fetch authors');
    }
}

const series = async () => {
    try {
        const series_query = "SELECT series_name FROM ebookstores.series"
        const [series] = await database.query(series_query);
        const seriesName = series.map(Aseries => Aseries.series_name);
        return seriesName;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw new Error('Could not fetch series');
    }
}

const genres = async () => {
    try {
        const genres_query = "SELECT DISTINCT AGenre FROM genre;"
        const [genres] = await database.query(genres_query);
        const genresName = genres.map(genre => genre.AGenre);
        return genresName;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw new Error('Could not fetch genres');
    }
}

module.exports = {
    bookFilter,
    getPage,
    allBooks,
    authors,
    series,
    publishers,
    genres
};