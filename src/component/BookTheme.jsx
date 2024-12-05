/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";

const BookTheme = () => {
    const location = useLocation();
    const book = location.state;
    if (!book) {
        return <p>No book selected</p>;
    }

    const content = `A grand vision defined: The CEO of The Walt Disney Company shares the ideas and values he has used to reinvent one of the most beloved companies in the world, and inspire the people who bring the magic to life.

In 2005, Robert Iger became CEO of The Walt Disney Company during a difficult time. Morale had deteriorated, competition was more intense, and technology was changing faster than at any time in the company's history. "I knew there was nothing to be gained from arguing over the past," Iger writes. "The only thing that mattered was the future, and I believed I had a clear idea of the direction Disney needed to go." It came down to three clear ideas: 1) Create the highest quality content Disney could produce. 2) Embrace and adopt technology instead of fighting it. And 3) Think bigger--think global--and turn Disney into a stronger brand in international markets.

Twelve years later, Disney is the largest, most respected media company in the world counting Pixar, Marvel, Lucasfilm and 21st Century Fox among its properties. Its value is nearly five times what it was when Iger took over, and Iger is recognized as one of the most innovative and successful CEOs of our time.

Now, he's sharing the lessons he's learned while running Disney and leading its 200,000 employees--taking big risks in the face of historic disruption; learning to inspire the people who work for you; leading with fairness and communicating principles clearly. This book is about the relentless curiosity that has driven Iger for forty-five years, since the day he started as a studio supervisor at ABC. It's also about thoughtfulness and respect, and a decency-over-dollars approach that has become the bedrock of every project and partnership Iger pursues, from a deep friendship with Steve Jobs in his final years to an abiding love of the evolving Star Wars myth.

"Over the past fourteen years, I think I've learned so much about what real leadership is," Iger writes. "But I couldn't have articulated all of this until I lived it. You can't fake it--and that's one of the key lessons in this book."`

    return (
        <div className="max-w-screen-xl  mx-auto p-5 h-screen flex">
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
                <p className="text-xl font-semibold text-gray-700 rounded-xl p-2 bg-gray-200">
                    ${book.price}
                </p>
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
    );

}
BookTheme.propTypes = {
    bookID: PropTypes.number.isRequired
}

export default BookTheme;
