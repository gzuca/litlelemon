import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Occasion Select Field", () => {
  test("renders occasion select with correct attributes", () => {
    render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} onDateChange={jest.fn()} submitForm={jest.fn()} />);
    
    const occasionSelect = screen.getByLabelText(/occasion/i);
    
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("required");
    expect(screen.getByRole("option", { name: "Birthday" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Anniversary" })).toBeInTheDocument();
  });
});