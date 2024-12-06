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
        const book = books.find((b) => b.book_id === id);
        navigate(`/dashboard/book/${book.book_id}`, { state: { book, books, cartNum: cart_num, cartList:cart_list}});
    }   

    useEffect(() => {
        if(cart_list) setCart_num(cart_list.length)
    },[cart_list])

    const add_cart = (id) => {
        const Abook = books.find((b) => b.book_id === id);
        if (Abook) {
            const isInCart = cart_list.find((b) => b.book_id === id);
    
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

    const random_color = [
        "bg-red-200 text-red-800",
        "bg-blue-200 text-blue-800",
        "bg-green-200 text-green-800",
        "bg-yellow-200 text-yellow-800",
        "bg-purple-200 text-purple-800",
        "bg-pink-200 text-pink-800",
        "bg-orange-200 text-orange-800",
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    if (!book) return <p>No book selected</p>;
    if (!books) return <p>No book data</p>;

    return (
        <div>
            <TopNav cartNum={cart_num} cartList= {cart_list} books={books} gotoBook={goto_book}/>
            <div className="pt-20 mx-auto p-5 max-h-screen w-auto flex">
                {/* Cột 1: Hình ảnh và nút */}
                <div className="flex flex-col items-center border-r pr-10 w-1/3 h-full">
                    {/* Ảnh bìa */}
                    <img
                        src={book.image_name}
                        alt={book.book_name}
                        className="w-auto h-[550px] justify-center object-cover rounded-lg shadow-lg mb-4"
                    />

                    {/* Nút Add to Favorite */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
                        Add to your favorite
                    </button>
                    {/* Giá tiền */}
                    <button 
                        onClick={() => {add_cart(book.book_id)}}
                        className="flex items-center border-2 border-blue-500 bg-transparent text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100">
                        Add to cart - ${book.book_price}
                    </button>


                </div>

                {/* Cột 2 và 3: Nội dung */}
                <div className="flex-grow w-2/3 overflow-y-auto p-6">
                    {/* Title */}
                    <h1 className="text-5xl font-bold font-serif text-gray-900 mb-4">{book.book_name}</h1>

                    {/* Author */}
                    <p className="text-xl text-gray-600">
                        <span className="font-black">Authors:</span> 
                        {book.authors.split(',').map((author, index) => (
                            <span 
                                key={index} 
                                className="ml-5 hover:underline underline-offset-3 font-serif font-extrabold"
                            >
                                {author.trim()}
                            </span>
                        ))}
                    </p>

                    {/* Publisher */}
                    <p className="text-xl text-gray-600">
                        <span className="font-black">Publisher:</span> 
                        <span className="ml-5 hover:underline underline-offset-3 font-serif font-extrabold">{book.publisher}</span>
                    </p>

                    {/* Content */}
                    <div className="text-gray-700 mb-4 mt-4 text-lg">
                        <p>
                            {isExpanded ? book.book_description : `${book.book_description.slice(0, 200)}...`}
                        </p>
                        <button
                            onClick={toggleExpanded}
                            className="inline-flex text-blue-500 hover:underline mt-2"
                        >
                            {isExpanded ? "Thu gọn" : "Xem thêm"}
                        </button>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {book.genres && book.genres.split(',').map((genre, index) => (
                            <span 
                                key={index} 
                                className={`text-sm px-3 py-1 rounded-full ${random_color[index % random_color.length]}`}
                            >
                                {genre.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Publish year */}
                    <p className="text-gray-700 mb-4">First published {book.publication_year}</p>

                    <div className="flex flex-col space-y-5">
                        {/* Language */}
                        <div className="grid grid-cols-4">
                            <p className="font-medium text-gray-700">Language:</p>
                            <p className="text-gray-700">{book.book_language}</p>
                        </div>

                        {/* Format */}
                        <div className="grid grid-cols-4">
                            <p className="font-medium text-gray-700">Format:</p>
                            <p className="text-gray-700">{book.book_type}</p>
                        </div>

                        {/* Inventory Quantity */}
                        <div className="grid grid-cols-4">
                            <p className="font-medium text-gray-700">Inventory Quantity:</p>
                            <p className="text-gray-700">{book.inventory_quantity}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}


export default BookTheme;
