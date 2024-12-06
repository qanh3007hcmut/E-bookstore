/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from '../../component/Nav'
import Content from '../Cart/Cart_content'

const Cart = () => {
    const location = useLocation();

    const [cart_list, setCart_list] = useState([])
    const [cart_num, setCart_num] = useState(0);

    useEffect(() => {
        if (location.state && location.state.cartList && location.state.cartNum !== undefined) {
            const { cartList, cartNum } = location.state;
            setCart_list(cartList);
            setCart_num(cartNum);
        }
    }, [location.state]); 

    useEffect(() => {
        setCart_num(cart_list.length); 
    }, [cart_list]);

    const handleIncreasebyOne = (id) => {
        console.log("+ called")
        setCart_list((prevCart) => 
            prevCart.map((book) => 
                book.book_id === id ? { ...book, quantity: book.quantity + 1 } : book
            )
        );
    };

    const handleDecreasebyOne = (id) => {
        setCart_list((prevCart) => {
            const bookInCart = prevCart.find((book) => book.book_id === id);
            
            if (bookInCart && bookInCart.quantity > 1) {
                return prevCart.map((book) =>
                    book.book_id === id ? { ...book, quantity: book.quantity - 1 } : book
                );
            } else if (bookInCart && bookInCart.quantity === 1) {
                return prevCart.filter((book) => book.book_id !== id);
            }
            return prevCart;
        });    
    };

    const handleDelete = (id) => {
        setCart_list((prevCart) => prevCart.filter((book) => book.book_id !== id));
    };
    

    return (
        <div>
            <Navigation 
                cartNum={cart_num} 
                cartList={cart_list} 
                nametag="Cart"
            />
            <div className="">
                <Content 
                    list={cart_list} 
                    num ={cart_num}
                    increase_quantity={handleIncreasebyOne} 
                    decrease_quantity={handleDecreasebyOne}
                    delete_book_order={handleDelete}
                />
            </div>
        </div>
    )
}

export default Cart;

