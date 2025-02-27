import { render, screen, waitFor } from '@testing-library/react';
import BookingPage from '../Components/BookingPage';

jest.mock('../Components/api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])),
}));

test('initializeTimes correctly reads from and writes to localStorage', async () => {
   const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  localStorage.setItem('availableTimes', JSON.stringify(mockTimes));
  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
  render(<BookingPage />);

  await waitFor(() => {
    mockTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });


  expect(setItemMock).toHaveBeenCalledWith(
    'availableTimes',
    expect.any(String)
  );

  const storedTimes = JSON.parse(localStorage.getItem('availableTimes'));
  expect(storedTimes).toEqual(mockTimes);

  setItemMock.mockRestore();
});

afterEach(() => {
  localStorage.clear();
});