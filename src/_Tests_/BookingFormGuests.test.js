import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Guests Input Field", () => {
  test("renders guests input with correct attributes", () => {
    render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} onDateChange={jest.fn()} submitForm={jest.fn()} />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("aria-required", "true");
  });
});