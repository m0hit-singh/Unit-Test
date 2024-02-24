import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { App } from "../src/app";

xdescribe("App tests", () => {
  it("should contains the heading 1", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
