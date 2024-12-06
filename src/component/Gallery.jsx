/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import Select from "react-select";
import axios from "axios";
// Sample data for books
const BookGallery = ({ books, gotoID }) => {
  const [filters, setFilters] = useState({
    genre: [],
    series: null,
    author: null,
    publisher: null,
    favorite: false,
    price: { min: 0, max: 100 },
  });
  // Lưu và lấy author data
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [series, setSeries] = useState([])
  const [genres, setGenres] = useState([])

 
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/authors"); 
        const authors = response.data.authors;
        const authorOptions = authors.map((author) => ({
          value: author,
          label: author,
        }));
        setAuthors(authorOptions); 
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    const fetchPublishers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/publishers"); 
        const publishers = response.data.publishers;
        const publisherOptions = publishers.map((publisher) => ({
          value: publisher,
          label: publisher,
        }));
        setPublishers(publisherOptions); 
      } catch (error) {
        console.error("Error fetching publisher:", error);
      }
    };
    const fetchSeries = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/series"); 
        const series = response.data.series;
        const seriesOptions = series.map((Aseries) => ({
          value: Aseries,
          label: Aseries,
        }));
        setSeries(seriesOptions); 
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/genres"); 
        const genres = response.data.genres;
        const genresOptions = genres.map((genre) => ({
          value: genre,
          label: genre,
        }));
        setGenres(genresOptions); 
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchFilteData = async () => {
      fetchAuthors();
      fetchPublishers();
      fetchSeries();
      fetchGenres();
    }

    fetchFilteData()

  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  // Handle filter changes
  const handleFilterChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;
    
    setFilters((prev) => ({
      ...prev,
      [name]: selectedOption,
    }));
  };

  useEffect(()=>{
    console.log(filters.genre)
  }, [filters.genre])

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
      (filters.genre ? 
        filters.genre.every((selectedGenre) => 
          book.genres && book.genres.split(',').includes(selectedGenre.value)
        ) : true) &&
      (filters.series ? book.series_name === filters.series.value : true) &&
      (filters.author ? book.authors && book.authors === filters.author.value : true) &&
      (filters.publisher ? book.publisher === filters.publisher.value : true) &&
      (filters.favorite ? book.isFavorite : true) &&
      book.book_price >= filters.price.min && book.book_price <= filters.price.max
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
    <div className="pt-28 container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-x-4">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 p-4 border bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Genre Filter */}
          <div className="mb-4">
            <label htmlFor="genre" className="block mb-2">Genre</label>
            <Select
              name="genre"
              options={genres}
              value={filters.genre}
              isMulti 
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
              options={series}
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
              options={authors}
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
              options={publishers}
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
            <div key={book.book_id} className="rounded-lg shadow-lg overflow-hidden h-[440px] transition-transform transform hover:scale-105">
              <img src={book.image_name} alt={book.book_name} className="w-full h-auto object-cover" />
              <div className="p-4">
                <p className="absolute bottom-4 left-3 text-2xl px-4 py-2 bg-white rounded-xl font-semibold text-blue-600">{book.book_price} $</p>
                <button onClick={() => gotoID(book.book_id)} className="absolute mt-2 px-4 py-2 text-2xl bottom-3 right-3 bg-blue-700 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-400">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center">      
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            {/* Previous Button */}
            <button>
              <a
                onClick={() => handlePageChange(currentPage - 1)}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? "disabled opacity-50" : ""}`}
              >
                Previous
              </a>
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((index) => {
              const pageNumber = index + 1;
              return (
                <button key={pageNumber}>
                  <a
                    onClick={() => handlePageChange(pageNumber)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === pageNumber ? "text-white bg-gray-600 hover:bg-blue-100" : "text-gray-700 bg-white"}`}
                  >
                    {pageNumber}
                  </a>
                </button>
              );
            })}

            {/* Next Button */}
            <button>
              <a
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? "disabled opacity-50" : ""}`}
              >
                Next
              </a>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

BookGallery.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      book_id: PropTypes.number.isRequired,
      book_name: PropTypes.string.isRequired,
      book_description: PropTypes.string.isRequired,
      book_language: PropTypes.string.isRequired,
      book_price: PropTypes.number.isRequired,
      image_name: PropTypes.string.isRequired,
      inventory_quantity: PropTypes.number.isRequired,
      publication_year: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool,
    })
  ).isRequired,
  gotoID: PropTypes.func.isRequired,
};

export default BookGallery;
