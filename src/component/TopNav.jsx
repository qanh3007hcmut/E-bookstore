/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../images/BK/logo.png";
import Book from "../images/Icon/book.svg";
import Menu from "../images/Icon/menu.svg";
import Search from "../images/Icon/search.svg";

const TopNav = () => {
    const username = localStorage.getItem("username") || "Guest"; // Lấy username từ localStorage

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
                    <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium text-blue-700 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300 hidden 1000:block"
                    >
                        Home
                    </a>

                    {/* Nút Cart */}
                    <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium text-blue-700 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300 hidden 1000:block"
                    >
                        Cart
                    </a>

                    {/* Nút History */}
                    <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium text-blue-700 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300 hidden 1000:block"
                    >
                        History
                    </a>

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
