import React,  { useState, useReducer } from 'react';
import  BookingForm from './BookingForm';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'setAvailableTimes':
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

function initializeTimes() {
  return {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
};

function reducer(state, action) {
  switch (action.type) {
    case 'setAvailableTimes':
      return { ...state, availableTimes: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};

const BookingPage = () => {

  const [availableTimes, setavailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const [state, dispatch] = useReducer(reducer, undefined, initializeTimes);

  const handleBooking = (resDate, resTime, guests, occasion) => {
    console.log('Booking successful:', { resDate, resTime, guests, occasion });
    dispatch({
      type: 'SET_AVAILABLE_TIMES',
      payload: availableTimes.filter(time => time !== resTime),
    });
  };

  const updateTimes = (selectedDate) => {
    const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    dispatch({
      type: 'etAvailableTimes',
      payload: updatedTimes,
    });
  };

  const updateAvailableTimes = (date) => {
    dispatch({
      type: 'setAvailableTimes',
      payload: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    });
  };


  return (

    <div style={{ padding: '20px', fontFamily: '"Markazi text", serif',
     backgroundColor:'#495e57', color:'white', fontSize:'25px'}}>

      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to <span style={{color:'#F4CE14'}}>Little Lemon</span> Restaurant!</h1>
        <p>Book a table at our Mediterranean restaurant. We look forward to serving you!</p>
      </header>

      <section style={{ margin: '20px 0', textAlign:'center' }}>
        <h2>Make a Reservation</h2>
        <p>Please select your reservation details below:</p>
      </section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
          marginLeft:'400px'
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
        <section className="booking">
                <h2>Book a Table</h2>
                <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                onDateChange={updateAvailableTimes}
                />
            </section>
        </div>
      </div>
    </div>
  );
}



export default BookingPage;