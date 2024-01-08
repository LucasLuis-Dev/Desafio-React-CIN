import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import Post from './pages/postPage/postPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
