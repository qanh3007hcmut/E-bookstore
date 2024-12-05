/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import Logo from "../images/BK/logo.png";

const Nav = ({cartNum,cartList}) => {
    const username = localStorage.getItem("username"); 
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/dashboard', { state: {cartNum, cartList}})
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
                            Cart
                        </span>
                    </a>
                </div>

                {/* User Info và Navigation Buttons */}
                <div className="absolute right-10">
                    <div className="flex items-center">
                        <span className="rounded-xl bg-blue-500 p-2 mx-10 text-sm font-medium text-white">
                            {username}
                        </span>
                        
                        <button onClick={() => goHome()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </button>
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
      ).isRequired
};
export default Nav;
