import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Submit Button", () => {
  test("renders submit button with correct attributes", () => {
    render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} onDateChange={jest.fn()} submitForm={jest.fn()} />);
    
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});