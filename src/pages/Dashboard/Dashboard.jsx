/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import TopNav from '../../component/TopNav'
import Gallery from '../../component/Gallery'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
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
            
            <Gallery books={books} gotoID={goto_book}/>
            
        </div>
    )
}

export default Dashboard
