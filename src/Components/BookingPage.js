import React, { useEffect, useState, useReducer } from 'react';
import  BookingForm from './BookingForm';
import fetchAPI, {submitAPI} from './api';
import { useNavigate} from 'react-router-dom';


const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
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

    const loadBookingData = () => {
      const savedData = localStorage.getItem('bookingData');
      return savedData ? JSON.parse(savedData) : [
        { date: '2025-02-26', time: '19:00', guests: 4, occasion: 'Birthday' },
        { date: '2025-02-27', time: '18:30', guests: 2, occasion: 'Anniversary' },
      ];
    };

    const [bookingData, setBookingData] = useState(loadBookingData());
    const [state, dispatch] = useReducer(reducer, undefined, initializeTimes);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [bookingData]);

  const submitForm = (formData) => {
    const { resDate, resTime, guests, occasion } = formData;
    const success = submitAPI({ resDate, resTime, guests, occasion });

    if (success) {
      setBookingData((prevData) => {
        const updatedData = [
          ...prevData,
          { date: resDate, time: resTime, guests, occasion },
        ];
        localStorage.setItem('bookingData', JSON.stringify(updatedData));
        return updatedData;
      });
      navigate('/confirmedBooking');
    } else {
      console.log('Error al hacer la reserva.');
    }
  };

  const updateTimes = (selectedDate) => {
    const date = new Date(selectedDate);
    console.log('Selected Date:', date);
    const updatedTimes = fetchAPI(date);
    dispatch({
      type: 'setAvailableTimes',
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
                submitForm={submitForm}
                />
            </section>
        </div>
      </div>


<section style={{ margin: '20px 0', textAlign: 'center' }}>
<h2>Upcoming Reservations</h2>
<table style={{ width: '100%', margin: '0 auto', border: '1px solid white', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Guests</th>
      <th>Occasion</th>
    </tr>
  </thead>
  <tbody>
    {bookingData.map((booking, index) => (
      <tr key={index}>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.guests}</td>
        <td>{booking.occasion}</td>
      </tr>
    ))}
  </tbody>
</table>
</section>
</div>

  );
}



export default BookingPage;