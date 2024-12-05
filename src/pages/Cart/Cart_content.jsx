/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';

const Cart_content = ({ num, list, totalPrice, increase_quantity, decrease_quantity, delete_book_order }) => {
    // Tính tổng giá trị đơn hàng
    const sumPrice = totalPrice || list.reduce((total, book) => total + book.book_price * book.quantity, 0);


    return (
        <div className="pt-20 p-4 flex h-screen mx-8"> {/* Set height to screen height */}
            {/* Phần Giỏ hàng bên trái */}
            <div className="flex-1 overflow-y-auto h-full"> {/* Flex 1 for responsive layout, h-full to take full height */}
                <h2 className="text-2xl font-bold my-4">Shopping Cart ({num} items)</h2>
                <div className="flex flex-col space-y-4">
                    {list.length > 0 ? (
                        list.map((book) => (
                            <div key={book.book_id} className="flex bg-gray-100 p-4 rounded-md shadow-md">
                                <img
                                    src={book.image_name}
                                    alt={book.title}
                                    className="w-auto h-60 object-cover rounded-md"
                                />
                                <div className="flex flex-col space-y-2 ml-4 w-full">
                                    <h3 className="text-3xl font-bold text-left text-gray-900">{book.book_name}</h3>
                                    <p className="text-sm text-gray-700 font-medium">Author: {book.author}</p>
                                    
                                    {/* Genre(s) with badges */}
                                    <div className="flex flex-wrap space-x-2">
                                    {/* {book.genre.split(",").map((genre, index) => (
                                        <span key={index} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">
                                        {genre.trim()}
                                        </span>
                                    ))} */}
                                    </div>
                                </div>
                                
                                <div className="flex flex-col space-y-2 ml-4 w-full justify-start items-end gap-32">
                                    {/* Price on the top right corner */}
                                    <div className="p-2 text-2xl font-black text-gray-900">
                                        ${book.book_price}
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        {/* Delete button and quantity adjustment */}
                                        <div className="inline-flex shadow-sm bg-gray-200 items-center rounded-3xl border-4 border-orange-400">
                                            <button onClick={()=>decrease_quantity(book.book_id)} className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold rounded-s-3xl hover:bg-gray-300">-</button>
                                            <span className="px-4 py-2   text-base text-gray-900 font-semibold ">{book.quantity}</span>
                                            <button onClick={()=>increase_quantity(book.book_id)} className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold rounded-e-3xl hover:bg-gray-300">+</button>
                                        </div>

                                        <button onClick={()=>delete_book_order(book.book_id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-red-600 hover:stroke-white rounded-full transition-colors duration-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">Empty Cart!!!</p>
                    )}
                </div>
            </div>

            {/* Phần Thông tin đơn hàng bên phải */}
            <div className="w-[400px] bg-gray-200 p-6 rounded-md h-full overflow-y-auto"> {/* h-full for full height */}
                <h2 className="text-xl font-bold mb-4">Thông Tin Đơn Hàng</h2>
                
                <div className="space-y-4">
                    {/* Tổng số sản phẩm và tổng giá trị */}
                    <div className="flex justify-between">
                        <span className="font-semibold">Total ({num} items):</span>
                        <span className="font-semibold text-lg">${sumPrice}</span>
                    </div>

                    {/* Địa chỉ */}
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Location:</span>
                        <input 
                            type="text" 
                            placeholder="Nhập địa chỉ" 
                            className="border p-2 w-full rounded-md text-sm"
                        />
                    </div>

                    {/* Số điện thoại */}
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Phone number:</span>
                        <input 
                            type="text" 
                            placeholder="Nhập số điện thoại" 
                            className="border p-2 w-full rounded-md text-sm"
                        />
                    </div>

                    {/* Giảm giá */}
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Discount:</span>
                        <input 
                            type="text" 
                            placeholder="Nhập mã giảm giá" 
                            className="border p-2 w-full rounded-md text-sm"
                        />
                    </div>

                    {/* Nút xác nhận đơn hàng */}
                    <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-xl hover:bg-blue-700 border border-blue-500 hover:border-black">
                        Confirm Order
                    </button>
                </div>
            
            </div>
        </div>
    );
};

Cart_content.propTypes = {
    num: PropTypes.number.isRequired, // Số lượng sách trong giỏ hàng
    list: PropTypes.arrayOf(
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
    totalPrice: PropTypes.number,
    increase_quantity:PropTypes.func.isRequired,
    decrease_quantity:PropTypes.func.isRequired,
    delete_book_order:PropTypes.func.isRequired
};

export default Cart_content;
