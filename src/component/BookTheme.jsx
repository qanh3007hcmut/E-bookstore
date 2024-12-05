/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import { useLocation,useNavigate } from "react-router-dom";
import TopNav from "./TopNav";

const BookTheme = () => {
    const location = useLocation();
    const { book, books, cartNum, cartList} = location.state;
    const navigate = useNavigate();

    const [cart_num, setCart_num] = useState(cartNum)
    const [cart_list, setCart_list] = useState(cartList)

    const goto_book = (id) => {
        const book = books.find((b) => b.id === id);
        navigate(`/dashboard/book/${book.id}`, { state: { book, books, cartNum: cart_num, cartList:cart_list}});
    }   

    useEffect(() => {
        if(cart_list) setCart_num(cart_list.length)
    },[cart_list])

    const add_cart = (id) => {
        const Abook = books.find((b) => b.id === id);
        if (Abook) {
            const isInCart = cart_list.find((b) => b.id === id);
    
            if (isInCart) {
                // Nếu sách đã có trong giỏ hàng, hỏi người dùng
                const userConfirmed = window.confirm("This book is already in your cart. Do you want to add another copy?");
                
                if (userConfirmed) {
                    // Cập nhật quantity nếu sách đã có trong giỏ
                    setCart_list((prevCart) => 
                        prevCart.map((book) => 
                            book.id === id ? { ...book, quantity: book.quantity + 1 } : book
                        )
                    );
                    setCart_num((prevCartNum) => prevCartNum + 1);
                } else {
                    console.log("User chose not to add another copy.");
                }
            } else {
                // Nếu sách chưa có trong giỏ, thêm vào giỏ và đặt quantity là 1
                setCart_list((prevCart) => [
                    ...prevCart,
                    { ...Abook, quantity: 1 }
                ]);
                setCart_num((prevCartNum) => prevCartNum + 1);
            }
        } else {
            console.log(`Book with ID ${id} not found`);
        }
    };
    
    

    const content = " "
    if (!book) return <p>No book selected</p>;
    if (!books) return <p>No book data</p>;

    return (
        <div>
            <TopNav cartNum={cart_num} cartList= {cart_list} books={books} gotoBook={goto_book}/>
            <div className="pt-20 max-w-screen-xl  mx-auto p-5 h-screen flex">
                {/* Cột 1: Hình ảnh và nút */}
                <div className="flex flex-col items-center border-r pr-10 w-1/3 h-full">
                    {/* Ảnh bìa */}
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-fit h-auto justify-center object-cover rounded-lg shadow-lg mb-4"
                    />

                    {/* Nút Add to Favorite */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
                        Add to your favorite
                    </button>
                    {/* Giá tiền */}
                    <button 
                        onClick={() => {add_cart(book.id)}}
                        className="flex items-center border-2 border-blue-500 bg-transparent text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100">
                        Add to cart - ${book.price}
                    </button>


                </div>

                {/* Cột 2 và 3: Nội dung */}
                <div className="flex-grow w-2/3 overflow-y-auto p-6">
                    {/* Title */}
                    <h1 className="text-5xl font-bold font-serif text-gray-900 mb-4">{book.title}</h1>

                    {/* Author */}
                    <p className="text-xl text-gray-600 mb-2">
                        <strong>Author:</strong> {book.author}
                    </p>

                    {/* Publisher */}
                    <p className="text-xl text-gray-600 mb-2">
                        <strong>Publisher:</strong> {book.publisher}
                    </p>

                    {/* Content */}
                    <p className="text-gray-700 mb-4">{content}</p>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                            {book.genre}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default BookTheme;
