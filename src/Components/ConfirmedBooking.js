
import React, { useEffect, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div style={{ padding: '20px', fontFamily: '"Markazi text", serif', backgroundColor: '#495e57', color: 'white', fontSize: '25px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Your Reservation is Confirmed!</h1>
        <p>Thank you for your reservation at <span style={{ color: '#F4CE14' }}>Little Lemon</span>! We look forward to serving you.</p>
      </header>

      <section style={{ textAlign: 'center' }}>
        <h2>Your reservation is confirmed.</h2>
        <p>If you need to modify your booking, please contact us directly.</p>
        <Link to="/" style={{ color: '#F4CE14', fontSize: '20px' }}>Back to Home</Link>
      </section>
    </div>
  );
};

export default ConfirmedBooking;