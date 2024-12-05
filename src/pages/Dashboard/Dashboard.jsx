/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import TopNav from '../../component/TopNav'
import Gallery from '../../component/Gallery'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const b = [
        { id: 1, title: "The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company", genre: "Fiction", series: "Series A", author: "Author 1", publisher: "Publisher A", price: 10, isFavorite: false, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556036622i/44525305.jpg" },
        { id: 2, title: "Book 2", genre: "Science", series: "Series B", author: "Author 2", publisher: "Publisher B", price: 15, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1692883158l/197773418._SY475_.jpg" },
        { id: 3, title: "Book 3", genre: "History", series: "Series A", author: "Author 3", publisher: "Publisher C", price: 12, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1662566820l/60321447.jpg" },
        { id: 4, title: "Book 4", genre: "Fiction", series: "Series C", author: "Author 1", publisher: "Publisher A", price: 8, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550607364l/40591267._SY475_.jpg" },
        { id: 5, title: "Book 5", genre: "Romance", series: "Series D", author: "Author 4", publisher: "Publisher D", price: 20, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685351182l/125063314.jpg" },
        { id: 6, title: "Book 6", genre: "Mystery", series: "Series E", author: "Author 5", publisher: "Publisher E", price: 18, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549433350l/40672036._SY475_.jpg" },
        { id: 7, title: "Book 7", genre: "Fantasy", series: "Series F", author: "Author 6", publisher: "Publisher F", price: 22, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684815605l/112974860.jpg" },
        { id: 8, title: "Book 8", genre: "Science", series: "Series G", author: "Author 7", publisher: "Publisher G", price: 16, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602574232l/55539565.jpg" },
        { id: 9, title: "Book 9", genre: "Biography", series: "Series H", author: "Author 8", publisher: "Publisher H", price: 25, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1715959057l/61796681._SY475_.jpg" },
        { id: 10, title: "Book 10", genre: "Fantasy", series: "Series I", author: "Author 9", publisher: "Publisher I", price: 30, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1709501928l/207294160._SY475_.jpg" },
        { id: 11, title: "Book 11", genre: "Fiction", series: "Series J", author: "Author 1", publisher: "Publisher J", price: 14, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720458100l/216232608._SX98_.jpg" },
        { id: 12, title: "Book 12", genre: "Thriller", series: "Series K", author: "Author 10", publisher: "Publisher K", price: 18, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1729524938l/220629520._SX98_.jpg" },
        { id: 13, title: "Book 13", genre: "Science", series: "Series L", author: "Author 11", publisher: "Publisher L", price: 17, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1718897337l/208987015._SX98_.jpg" },
        { id: 14, title: "Book 14", genre: "Drama", series: "Series M", author: "Author 12", publisher: "Publisher M", price: 28, isFavorite: true, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360936414l/7108725.jpg" },
        { id: 15, title: "Book 15", genre: "History", series: "Series N", author: "Author 13", publisher: "Publisher N", price: 21, isFavorite: false, image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg" },
        { id: 16, title: "Book 16", genre: "Horror", series: "Series O", author: "Author 14", publisher: "Publisher O", price: 13, isFavorite: true, image: "book16.jpg" },
        { id: 17, title: "Book 17", genre: "Romance", series: "Series P", author: "Author 15", publisher: "Publisher P", price: 19, isFavorite: false, image: "book17.jpg" },
        { id: 18, title: "Book 18", genre: "Mystery", series: "Series Q", author: "Author 16", publisher: "Publisher Q", price: 23, isFavorite: true, image: "book18.jpg" },
        { id: 19, title: "Book 19", genre: "Fantasy", series: "Series R", author: "Author 17", publisher: "Publisher R", price: 24, isFavorite: false, image: "book19.jpg" },
        { id: 20, title: "Book 20", genre: "Science", series: "Series S", author: "Author 18", publisher: "Publisher S", price: 26, isFavorite: true, image: "book20.jpg" }
    ];
    const [books, setBook_data] = useState([])

    const location = useLocation();
    const navigate = useNavigate();

    const [cart_list, setCart_list] = useState([])
    const [cart_num, setCart_num] = useState(0);

    const fetchBooks = async () => {
        try {
            // Gọi API với query params
            const response = await axios.get('http://localhost:3000/api/books/allbooks');

            if (response.status === 200) {
                setBook_data(response.data.books)
            }
        } catch (err) {
            console.log('Failed to fetch books');
        }
    };

    useEffect(() => {
        fetchBooks();
    },[]);

    useEffect(() => {
        console.log(books);
    },[books]);

    useEffect(() => {
        if (location.state && location.state.cartList && location.state.cartNum !== undefined) {
            const { cartList, cartNum } = location.state;
            setCart_list(cartList);
            setCart_num(cartNum);
        }
    }, [location.state]); 
    
    const goto_book = (id) => {
        const book = books.find((b) => b.book_id === id);
        navigate(`/dashboard/book/${book.book_id}`, { state: { book, books, cartNum: cart_num, cartList:cart_list}});
    }   

    return (
        <div>
            <TopNav cartNum={cart_num} cartList={cart_list} books={books} gotoBook={goto_book}/>
            <div className="pt-20">
                <Gallery books={books} gotoID={goto_book} className="mt-10"/>
            </div>
        </div>
    )
}

export default Dashboard
