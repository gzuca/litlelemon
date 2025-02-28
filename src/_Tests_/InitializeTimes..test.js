import { render, screen, waitFor, cleanup } from '@testing-library/react';
import BookingPage from '../Components/BookingPage';

jest.mock('../Components/api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])),
}));

describe('BookingPage - initializeTimes and localStorage', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  beforeEach(() => {
    localStorage.setItem('availableTimes', JSON.stringify(mockTimes));
  });

  afterEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
    cleanup();
  });

  test('initializeTimes correctly reads from and writes to localStorage', async () => {
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    render(<BookingPage />);
    for (const time of mockTimes) {
      expect(await screen.findByText(time)).toBeInTheDocument();
    }

    expect(setItemMock).toHaveBeenCalledWith(
      'availableTimes',
      JSON.stringify(mockTimes)
    );

    const storedTimes = JSON.parse(localStorage.getItem('availableTimes'));
    expect(storedTimes).toEqual(mockTimes);

    setItemMock.mockRestore();
  });
});