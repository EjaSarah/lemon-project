import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText(/reserve a table/i);
  expect(headingElement).toBeInTheDocument();
});
