/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Logo from "../images/BK/logo.png";
import Book from "../images/Icon/book.svg";
import Menu from "../images/Icon/menu.svg";
import Search from "../images/Icon/search.svg";

const TopNav = () => {
    const username = localStorage.getItem("username") || "Guest"; // Lấy username từ localStorage

    const [cartCount, setCartCount] = useState((localStorage.getItem("num_cart")));
    
      // Cập nhật giá trị khi component được render lần đầu
      useEffect(() => {
        const handleStorageChange = () => {
          const newCount = parseInt(localStorage.getItem("num_cart"));
          setCartCount(newCount);
        };
    
        // Lắng nghe sự kiện thay đổi localStorage
        window.addEventListener("storage", handleStorageChange);
    
        // Cleanup
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
      }, []);
    
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                {/* Logo và tên */}
                <a className="flex items-center space-x-3 mx-2  ">
                    <img src={Logo} className="h-10" alt="Logo" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white hidden 1090:block">
                        E-bookstore
                    </span>
                </a>

                {/* Search Bar */}
                <form className="flex items-center w-full max-w-lg mx-2">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            id="simple-search"
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=" Search book name..."
                            required
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <img src={Book} alt="book icon" height="25" width="25" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="ml-3 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <img src={Search} alt="seach icon" width="20" height="20"/>
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                {/* User Info và Navigation Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Hiển thị tên người dùng */}
                    <span className="text-sm font-medium text-gray-900 dark:text-white hidden md:block">
                        Hi, {username}
                    </span>

                    {/* Nút Home */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </button>

                    {/* Nút Cart */}
                    <button className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-10 h-10 px-2 py-2 bg-gray-100 hover:bg-blue-600 hover:stroke-white rounded-full transition-colors duration-300 hidden 1000:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    </button>

                    {/* Nút Menu Mobile */}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open menu</span>
                        <img src={Menu} alt="menu mobile" width="20" height="20" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
