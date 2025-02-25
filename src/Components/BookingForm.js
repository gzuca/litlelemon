import React, { useState, useEffect } from 'react';


const BookingForm = ({availableTimes = [], updateTimes, onDateChange})  => {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    if (resDate) {
      updateTimes(resDate);
      onDateChange(resDate);
    }
  }, [resDate, updateTimes, onDateChange]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    onDateChange(newDate);
  };

  const handleTimeChange = (e) => setResTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Successful', { resDate, resTime, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleDateChange}
        aria-labelledby="res-date-label"
    aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={handleTimeChange}
        aria-describedby="time-help"
    aria-required="true"
      >
       {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option disabled>No available times</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1" max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" aria-label="Submit your reservation"/>
    </form>
  );
};


export default BookingForm;
