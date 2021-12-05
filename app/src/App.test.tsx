import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

describe("tests the homepage", () => {
  test("should find title 'Vehicle Record'", () => {
    render(<App />);
    expect(screen.getByText("Vehicle Record")).toBeInTheDocument();
  });

  test("should find form fields for 'VIN', 'Odometer', and 'Service Record' empty", () => {
    const { getByTestId } = render(<App />);

    const vin = getByTestId("vin-input") as HTMLInputElement;
    const odometer = getByTestId("odometer-input") as HTMLInputElement;
    const serviceReport = getByTestId(
      "serviceReport-input"
    ) as HTMLInputElement;

    expect(vin.value).toBe("");
    expect(odometer.value).toBe("");
    expect(serviceReport.value).toBe("");
  });
});
