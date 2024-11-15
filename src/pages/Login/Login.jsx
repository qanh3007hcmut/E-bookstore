/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../images/BK/logo.png';

const Login = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ username: "", password: "" });

    const handleToggleForm = () => {
        setIsSignUp(!isSignUp);
        setUsername("");
        setPassword("");
        setError({ username: "", password: "" });
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        if (!validateUsername(username) || !validatePassword(password)) {
            return;
        }
        onLogin();
        localStorage.setItem('username', username);
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        if (!validateUsername(username) || !validatePassword(password)) {
            return;
        }
        // Perform sign-up logic here
        console.log("User signed up:", username);
        alert("Account created successfully!");
        setIsSignUp(false);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        if (value.length <= 15) {
            setUsername(value);
            localStorage.setItem("username",value)
            setError((prev) => ({ ...prev, username: "" }));
        } else {
            setError((prev) => ({
                ...prev,
                username: "Username must not exceed 15 characters",
            }));
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
    
        // Always update the password state
        setPassword(value);
    
        // Validate and set the error if invalid
        if (value.length > 15 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            setError((prev) => ({
                ...prev,
                password:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one digit, and must not exceed 15 characters.",
            }));
        } else {
            setError((prev) => ({ ...prev, password: "" }));
        }
    };

    const validateUsername = (username) => username.length <= 15;
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,15}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <img className="w-24 h-24 mb-2" src={Logo} alt="logo" />
                    <h2 className="text-2xl font-semibold text-center">
                        {isSignUp ? "Sign up" : "Sign in"}
                    </h2>
                </div>
                <form className="space-y-5">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                error.username
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                            }`}
                            required
                            placeholder="Enter username"
                        />
                        {error.username && (
                            <p className="mt-1 text-sm text-red-500">
                                {error.username}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                error.password
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                            }`}
                            required
                            placeholder="Enter your password"
                        />
                        {error.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {error.password}
                            </p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={isSignUp ? handleSignUpClick : handleLoginClick}
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isSignUp ? "Sign up" : "Login"}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isSignUp
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <button
                        onClick={handleToggleForm}
                        className="text-blue-600 font-semibold hover:underline focus:outline-none"
                    >
                        {isSignUp ? "Sign in" : "Sign up"}
                    </button>
                </p>
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired, // Validate that onLogin is a required function
};

export default Login;
