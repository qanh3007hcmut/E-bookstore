/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import Logo from "../images/BK/logo.png";

const Nav = ({cartNum,cartList, nametag, name}) => {
    const username = name;
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/dashboard', { state: {cartNum, cartList}})
    }

    const goCart = () => {
        navigate('/dashboard/cart', { state: {cartNum, cartList}})
    }

    const goOrder = () => {
        navigate('/dashboard/cart/history', { state: {cartNum, cartList}})
    }

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
            <div className="max-w-screen-xl flex items-center p-4 justify-between mx-5">
                {/* Logo và tên */}
                <div className="flex justify-start gap-5">
                    <a className="flex items-center space-x-5">
                        <img src={Logo} className="h-10" alt="Logo" />
                        <span className="text-2xl font-bold text-gray-900 dark:text-white hidden 1090:block">
                            E-bookstore
                        </span>
                    </a>
                    <div className="h-10 w-px bg-gray-300 mx-4"></div>
                    <a className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white hidden 1090:block">
                            {nametag}
                        </span>
                    </a>
                </div>

                {/* User Info và Navigation Buttons */}
                <div className="absolute right-10">
                    <div className="flex items-center space-x-5">
                        <span className="rounded-xl bg-blue-500 p-2 mx-10 text-sm font-medium text-white">
                            {username}
                        </span>

                        <div className="h-10 w-px bg-gray-300 mx-4"></div>
                        
                        <div className="relative group items-center">
                            <button onClick={() => goHome()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </button>

                            <div className="absolute min-w-max left-1/2 -bottom-10 -translate-x-1/2 bg-gray-600 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Home
                            </div>
                        </div>
                        
                        <div className="relative group items-center">
                            <button onClick={() => goCart()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                                    {cartNum}
                                </span>
                            </button>

                            <div className="absolute min-w-max left-1/2 -bottom-10 -translate-x-1/2 bg-gray-600 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Cart
                            </div>
                        </div>
                        
                        <div className="relative group items-center">
                            <button onClick={() => goOrder()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </button>

                            <div className="absolute min-w-max left-1/2 -bottom-10 -translate-x-1/2 bg-gray-600 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Order History
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

Nav.propTypes = {
    cartNum: PropTypes.number.isRequired,
    cartList: PropTypes.arrayOf(
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
    nametag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Nav;
