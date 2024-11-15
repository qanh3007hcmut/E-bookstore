/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import pages
import Login from '../src/pages/Login/Login'
import Dashboard from '../src/pages/Dashboard/Dashboard'

const App = () => {
  
  // Manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {setIsLoggedIn(true);};
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('username');
  };

  return (
    <Router>
      <Routes>
        {/* First Route */}
        <Route 
          path = '/' 
          element = {isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}>
        </Route>  

        {/* Login */}
        <Route 
          path = '/login' 
          element = {isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}/>

        {/* Dashboard */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" replace />}/>

      </Routes>
    </Router>
  );
}

export default App
