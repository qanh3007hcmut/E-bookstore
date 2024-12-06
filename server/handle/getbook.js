/* eslint-disable no-undef */
const { bookFilter,getPage, allBooks, authors, publishers, series, genres} = require('../models/getbook')

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

const get_page= async (req,res) => {
    const { page, limit } = req.query;
    try {
        const currentPage = parseInt(page, 10);
        const itemsPerPage = parseInt(limit, 10);

        const result = await getPage(currentPage, itemsPerPage);

        // Trả dữ liệu dưới dạng JSON
        res.status(200).json({
            message: 'Books fetched successfully',
            books: result.data,
            totalPages: result.totalPages,
            currentPage: result.currentPage,
        });
    } catch (error) {
        // Xử lý lỗi và trả thông báo lỗi
        console.error('Error in /books route:', error);
        res.status(500).json({
            message: 'Failed to fetch books. Please try again later.',
        });
    }
}

const get_all_book = async (req,res) => {
    try {
        const result = await allBooks();
        res.status(200).json({message: "successfully get book", books: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const get_authors = async (req,res) => {
    try {
        const result = await authors();
        res.status(200).json({message: "successfully get authors", authors: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const get_publishers = async (req,res) => {
    try {
        const result = await publishers();
        res.status(200).json({message: "successfully get publishers", publishers: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const get_series = async (req,res) => {
    try {
        const result = await series();
        res.status(200).json({message: "successfully get series", series: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const get_genres = async (req,res) => {
    try {
        const result = await genres();
        res.status(200).json({message: "successfully get genres", genres: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    get_book,
    get_page,
    get_all_book,
    get_authors,
    get_publishers,
    get_series,
    get_genres
};