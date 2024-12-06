/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import axios from 'axios'

const Cart_content = ({ num, list, totalPrice, increase_quantity, decrease_quantity, delete_book_order, info }) => {
    const sumPrice = totalPrice || list.reduce((total, book) => total + book.book_price * book.quantity, 0);

    const random_color = [
        "bg-red-200 text-red-800",
        "bg-blue-200 text-blue-800",
        "bg-green-200 text-green-800",
        "bg-yellow-200 text-yellow-800",
        "bg-purple-200 text-purple-800",
        "bg-pink-200 text-pink-800",
        "bg-orange-200 text-orange-800",
    ];
    const [newOrder, setNewOrder] = useState({
        customer_id: null,
        status: null,
        payment_method: "By Credits",
        money_paid : null,
        order_items: []
    })
    
    const postOrder = async (order_data) => {
        try {
            const response = await axios.post("http://localhost:3000/api/order/post", order_data);
            console.log("orderID: ", response.data.orderId);
        } catch (err) {
            console.error('Error creating order:', err);
        }
    }

    const createOrder = () => {
        const orderItems = list.map(book => ({
            book_id: book.book_id,
            quantity: book.quantity,  
        }));

        setNewOrder(prevOrder => ({
            ...prevOrder,
            customer_id: info.username,
            status: "Completed",
            money_paid: sumPrice,  
            order_items: orderItems,
        }));
    }

    useEffect(() => {
        if(newOrder.customer_id !== null) postOrder(newOrder)
        console.log(newOrder);
    }, [newOrder])
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
                                    <p className="text-xl text-gray-600">
                                        <span className="font-medium font-mono">Authors:</span> 
                                        {book.authors.split(',').map((author, index) => (
                                            <span 
                                                key={index} 
                                                className="ml-5 hover:underline underline-offset-3 font-serif font-extrabold"
                                            >
                                                {author.trim()}
                                            </span>
                                        ))}
                                    </p>
                                    
                                    {/* Genre(s) with badges */}
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
                <h2 className="text-xl font-bold mb-4">About Your Order</h2>
                
                <div className="space-y-4">
                    {/* Tổng số sản phẩm và tổng giá trị */}
                    <div className="flex justify-between">
                        <span className="font-semibold">Total ({num} items):</span>
                        <span className="font-semibold text-lg">${sumPrice}</span>
                    </div>

                    {/* Địa chỉ */}
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Location:</span>
                        <span className="font-medium border p-2 border-black w-full rounded-md text-sm">{info.customer_address}</span>
                    </div>

                    {/* Số điện thoại */}
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Phone number:</span>
                        <span className="font-medium border p-2 border-black w-full rounded-md text-sm">
                            {info.customer_phone}
                        </span>
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
                    <button
                        onClick={() => {createOrder()}} 
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-xl hover:bg-blue-700 border border-blue-500 hover:border-black">
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
    delete_book_order:PropTypes.func.isRequired,
    info: PropTypes.object.isRequired
};

export default Cart_content;
