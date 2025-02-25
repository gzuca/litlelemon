import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from "../Components/BookingPage";

test('initializeTimes sets the correct initial available times', () => {
    render(<BookingPage />);
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });