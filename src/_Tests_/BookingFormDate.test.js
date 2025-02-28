import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Date Input Field", () => {
  test("renders date input with correct attributes", () => {
    render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} onDateChange={jest.fn()} submitForm={jest.fn()} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("aria-required", "true");
  });
});