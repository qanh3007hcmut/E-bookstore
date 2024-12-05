/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types'
import Select from "react-select";

// Sample data for books

  

const BookGallery = ({books, cart_update, gotoID}) => {
    const [filters, setFilters] = useState({
        genre: null,
        series: null,
        author: null,
        publisher: null,
        favorite: false,
        price: { min: 0, max: 20 },
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(6);  

    // Handle filter changes
    const handleFilterChange = (selectedOption, actionMeta) => {
        const { name } = actionMeta;
        setFilters((prev) => ({
        ...prev,
        [name]: selectedOption,
        }));
    };

    const handleFavoriteChange = (e) => {
        setFilters((prev) => ({
        ...prev,
        favorite: e.target.checked,
        }));
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
        ...prev,
        price: { ...prev.price, [name]: value },
        }));
    };

    const filteredBooks = books.filter((book) => {
        return (
            (filters.genre ? book.genre === filters.genre.value : true) &&
            (filters.series ? book.series === filters.series.value : true) &&
            (filters.author ? book.author === filters.author.value : true) &&
            (filters.publisher ? book.publisher === filters.publisher.value : true) &&
            (filters.favorite ? book.isFavorite : true) &&
            book.price >= filters.price.min && book.price <= filters.price.max
        );
    });
  
    // Pagination logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        }
    };

    return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-x-4">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 p-4 border bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Genre Filter */}
          <div className="mb-4">
            <label htmlFor="genre" className="block mb-2">Genre</label>
            <Select
              name="genre"
              options={[
                { value: "Fiction", label: "Fiction" },
                { value: "Science", label: "Science" },
                { value: "History", label: "History" },
                // Add more genres here...
              ]}
              value={filters.genre}
              onChange={handleFilterChange}
              isClearable
              placeholder="Select genre"
            />
          </div>

          {/* Series Filter */}
          <div className="mb-4">
            <label htmlFor="series" className="block mb-2">Series</label>
            <Select
              name="series"
              options={[
                { value: "Series A", label: "Series A" },
                { value: "Series B", label: "Series B" },
                { value: "Series C", label: "Series C" },
                // Add more series here...
              ]}
              value={filters.series}
              onChange={handleFilterChange}
              isClearable
              placeholder="Select series"
            />
          </div>

          {/* Author Filter */}
          <div className="mb-4">
            <label htmlFor="author" className="block mb-2">Author</label>
            <Select
              name="author"
              options={[
                { value: "Author 1", label: "Author 1" },
                { value: "Author 2", label: "Author 2" },
                { value: "Author 3", label: "Author 3" },
                // Add more authors here...
              ]}
              value={filters.author}
              onChange={handleFilterChange}
              isClearable
              placeholder="Select author"
            />
          </div>

          {/* Publisher Filter */}
          <div className="mb-4">
            <label htmlFor="publisher" className="block mb-2">Publisher</label>
            <Select
              name="publisher"
              options={[
                { value: "Publisher A", label: "Publisher A" },
                { value: "Publisher B", label: "Publisher B" },
                { value: "Publisher C", label: "Publisher C" },
                // Add more publishers here...
              ]}
              value={filters.publisher}
              onChange={handleFilterChange}
              isClearable
              placeholder="Select publisher"
            />
          </div>

          {/* Favorite Filter */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="favorite"
              id="favorite"
              checked={filters.favorite}
              onChange={handleFavoriteChange}
              className="mr-2"
            />
            <label htmlFor="favorite">Favorites only</label>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price Range</label>
            <input
              type="range"
              name="min"
              id="price-min"
              min="0"
              max="50"
              value={filters.price.min}
              onChange={handlePriceChange}
              className="w-full mb-2"
            />
            <input
              type="range"
              name="max"
              id="price-max"
              min="0"
              max="50"
              value={filters.price.max}
              onChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between">
              <span>{filters.price.min} $</span>
              <span>{filters.price.max} $</span>
            </div>
          </div>
        </div>

        {/* Book Gallery Section */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentBooks.map((book) => (
                <div key={book.id} className=" rounded-lg shadow-lg overflow-hidden h-[440px] transition-transform transform hover:scale-105">
                    <img src={book.image} alt={book.title} className="w-full h-auto object-cover" />
                    <div className="p-4">
                        <p className="absolute bottom-4 left-3 text-2xl px-4 py-2 bg-white rounded-xl font-semibold text-blue-600">{book.price} $</p>
                        <button onClick={() => {
                            cart_update(book.id)
                            gotoID(book.id)
                          }}
                          className="absolute mt-2 px-4 py-2 text-2xl bottom-3 right-3 bg-blue-700 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* Pagination Section */}
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
            {/* Previous Button */}
            <li>
                <a
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? "disabled opacity-50" : ""}`}
                >
                Previous
                </a>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((index) => {
            const pageNumber = index + 1;
            return (
                <li key={pageNumber}>
                <a
                    href="#"
                    onClick={() => handlePageChange(pageNumber)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                    ${currentPage === pageNumber ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 animate-pulse" : ""}`}
                >
                    {pageNumber}
                </a>
                </li>
            );
            })}

            {/* Next Button */}
            <li>
                <a
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? "disabled opacity-50" : ""}`}
                >
                Next
                </a>
            </li>
            </ul>
        </nav>
    </div>
  );
};

BookGallery.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      series: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  cart_update: PropTypes.func.isRequired,
  gotoID: PropTypes.func.isRequired
};

export default BookGallery;
