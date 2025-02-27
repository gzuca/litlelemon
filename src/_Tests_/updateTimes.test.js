import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from "../Components/BookingPage";
import { act } from 'react-dom/test-utils';

jest.mock('../Components/api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])),
}));

test('updateTimes correctly updates availableTimes state and localStorage', async () => {
  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  localStorage.setItem('availableTimes', JSON.stringify(initialTimes));

  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

  render(<BookingPage />);

  initialTimes.forEach(time => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });

  const newDate = '2025-03-01';
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: newDate } });

  await waitFor(() => {
    const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    updatedTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  expect(setItemMock).toHaveBeenCalledWith(
    'availableTimes',
    expect.any(String)
  );

  const storedTimes = JSON.parse(localStorage.getItem('availableTimes'));
  expect(storedTimes).toEqual(initialTimes);

  setItemMock.mockRestore();
});

afterEach(() => {
  localStorage.clear();
});