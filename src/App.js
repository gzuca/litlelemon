import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Main from './Components/Main.js';
import  Nav from './Components/Nav.js';
import About from './Components/About.js'; // Correct path to About component
import Menu from './Components/Menu.js'; // Correct path to Menu component
import OrderOnline from './Components/OrderOnline'; // Correct path to OrderOnline component
import Login from './Components/Login.js';
import Reservations from './Components/Reservations.js';
import  Footer from './Components/Footer.js';
import  Header from './Components/Header.js';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Reservations" element={<Reservations />}/>
      <Route path="/Order-Online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);};



export default App;
