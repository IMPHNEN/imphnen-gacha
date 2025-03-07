import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Test Input Component", () => {
  it("renders the input with placeholder text", () => {
    render(<Input placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
  });
});
