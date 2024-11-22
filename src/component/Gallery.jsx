/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Select from "react-select";

// Sample data for books
const books = [
    { id: 1, title: "Book 1", genre: "Fiction", series: "Series A", author: "Author 1", publisher: "Publisher A", price: 10, isFavorite: false, image: "book1.jpg" },
    { id: 2, title: "Book 2", genre: "Science", series: "Series B", author: "Author 2", publisher: "Publisher B", price: 15, isFavorite: true, image: "book2.jpg" },
    { id: 3, title: "Book 3", genre: "History", series: "Series A", author: "Author 3", publisher: "Publisher C", price: 12, isFavorite: false, image: "book3.jpg" },
    { id: 4, title: "Book 4", genre: "Fiction", series: "Series C", author: "Author 1", publisher: "Publisher A", price: 8, isFavorite: true, image: "book4.jpg" },
    { id: 5, title: "Book 5", genre: "Romance", series: "Series D", author: "Author 4", publisher: "Publisher D", price: 20, isFavorite: false, image: "book5.jpg" },
    { id: 6, title: "Book 6", genre: "Mystery", series: "Series E", author: "Author 5", publisher: "Publisher E", price: 18, isFavorite: true, image: "book6.jpg" },
    { id: 7, title: "Book 7", genre: "Fantasy", series: "Series F", author: "Author 6", publisher: "Publisher F", price: 22, isFavorite: false, image: "book7.jpg" },
    { id: 8, title: "Book 8", genre: "Science", series: "Series G", author: "Author 7", publisher: "Publisher G", price: 16, isFavorite: true, image: "book8.jpg" },
    { id: 9, title: "Book 9", genre: "Biography", series: "Series H", author: "Author 8", publisher: "Publisher H", price: 25, isFavorite: false, image: "book9.jpg" },
    { id: 10, title: "Book 10", genre: "Fantasy", series: "Series I", author: "Author 9", publisher: "Publisher I", price: 30, isFavorite: true, image: "book10.jpg" },
    { id: 11, title: "Book 11", genre: "Fiction", series: "Series J", author: "Author 1", publisher: "Publisher J", price: 14, isFavorite: true, image: "book11.jpg" },
    { id: 12, title: "Book 12", genre: "Thriller", series: "Series K", author: "Author 10", publisher: "Publisher K", price: 18, isFavorite: false, image: "book12.jpg" },
    { id: 13, title: "Book 13", genre: "Science", series: "Series L", author: "Author 11", publisher: "Publisher L", price: 17, isFavorite: false, image: "book13.jpg" },
    { id: 14, title: "Book 14", genre: "Drama", series: "Series M", author: "Author 12", publisher: "Publisher M", price: 28, isFavorite: true, image: "book14.jpg" },
    { id: 15, title: "Book 15", genre: "History", series: "Series N", author: "Author 13", publisher: "Publisher N", price: 21, isFavorite: false, image: "book15.jpg" },
    { id: 16, title: "Book 16", genre: "Horror", series: "Series O", author: "Author 14", publisher: "Publisher O", price: 13, isFavorite: true, image: "book16.jpg" },
    { id: 17, title: "Book 17", genre: "Romance", series: "Series P", author: "Author 15", publisher: "Publisher P", price: 19, isFavorite: false, image: "book17.jpg" },
    { id: 18, title: "Book 18", genre: "Mystery", series: "Series Q", author: "Author 16", publisher: "Publisher Q", price: 23, isFavorite: true, image: "book18.jpg" },
    { id: 19, title: "Book 19", genre: "Fantasy", series: "Series R", author: "Author 17", publisher: "Publisher R", price: 24, isFavorite: false, image: "book19.jpg" },
    { id: 20, title: "Book 20", genre: "Science", series: "Series S", author: "Author 18", publisher: "Publisher S", price: 26, isFavorite: true, image: "book20.jpg" }
  ];
  

const BookGallery = () => {
    const [filters, setFilters] = useState({
        genre: null,
        series: null,
        author: null,
        publisher: null,
        favorite: false,
        price: { min: 0, max: 20 },
    });
    

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(6);  // Number of books per page

    const updateNumCart = () => {
      const NUM_CART = parseInt(localStorage.getItem('num_cart')) 
      const new_NUM_CART = NUM_CART+1
      localStorage.setItem('num_cart', new_NUM_CART)
    }
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
                <div key={book.id} className="bg-grey rounded-lg shadow-lg overflow-hidden h-[440px]">
                    <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <p className="text-sm text-gray-600">{book.publisher}</p>
                        <p className="text-md font-semibold text-blue-600">{book.price} $</p>
                        <button onClick={updateNumCart()} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full">
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

export default BookGallery;
