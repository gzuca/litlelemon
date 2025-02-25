import {render, screen, fireEvent} from '@testing-library/react';
import BookingPage from "../Components/BookingPage";
import { act } from 'react-dom/test-utils';

test('updateTimes correctly updates the availableTimes state', () => {
    render(<BookingPage />);
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    initialTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });})