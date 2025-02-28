import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Time Select Field", () => {
  test("renders time select with correct attributes", () => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    
    render(<BookingForm availableTimes={availableTimes} updateTimes={jest.fn()} onDateChange={jest.fn()} submitForm={jest.fn()} />);
    
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("aria-required", "true");
    
    availableTimes.forEach((time) => {
      expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
    });
  });
});