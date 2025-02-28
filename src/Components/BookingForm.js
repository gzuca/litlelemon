import React, { useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import submitForm from './BookingPage';


const BookingForm = ({ availableTimes, updateTimes, onDateChange, submitForm }) => {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (resDate) {
      updateTimes(resDate);
      onDateChange(resDate);
    }
  }, [resDate, updateTimes, onDateChange]);

  useEffect(() => {
    validateForm();
  }, [resDate, resTime, guests, occasion]);

  const validateForm = () => {
    let newErrors = {};

    if (!resDate) newErrors.resDate = "Please select a date.";
    if (!resTime) newErrors.resTime = "Please select a time.";
    if (guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };


  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    onDateChange(newDate);
  };

  const handleTimeChange = (e) => {setResTime(e.target.value)}

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setGuests(value);

    if (value < 1 || value > 10) {
      e.target.setCustomValidity("The number of guests must be between 1 and 10.");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    submitForm({ resDate, resTime, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleDateChange}
        required
        aria-labelledby="res-date-label"
    aria-required="true"
      />
      {errors.resDate && <span style={{ color: 'red' }}>{errors.resDate}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={handleTimeChange}
        required
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
      {errors.resTime && <span style={{ color: 'red' }}>{errors.resTime}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1" max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        aria-required="true"
        required
      />
      {errors.guests && <span style={{ color: 'red' }}>{errors.guests}</span>}


      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <span style={{ color: 'red' }}>{errors.occasion}</span>}

      <input type="submit" value="Make Your reservation" aria-label="Submit your reservation" disabled={!isFormValid}/>
    </form>
  );
};


export default BookingForm;
