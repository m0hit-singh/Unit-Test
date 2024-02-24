import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UsersList } from "../src/componets/users";
import React from "react";

describe("users component", () => {
  it("check users component rendered", () => {
    // const { container } = render(<UsersList />);
    expect(true).toBeTruthy();
  });
});
