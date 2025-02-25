import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Main from './Components/Main.js';
import  Nav from './Components/Nav.js';
import About from './Components/About.js';
import Menu from './Components/Menu.js';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login.js';
import BookingPage from './Components/BookingPage.js';
import  Footer from './Components/Footer.js';
import  BookingForm from './Components/BookingForm.js';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/BookingPage" element={<BookingPage />}/>
      <Route path="/Order-Online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
  </Router>
);};



export default App;
