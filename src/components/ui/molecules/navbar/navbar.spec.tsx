import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("renders the logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const logo = screen.getByAltText(/IMPHNEN Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the Home link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("renders the Merch Gacha link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const merchLink = screen.getByRole("link", { name: /merch gacha/i });
    expect(merchLink).toBeInTheDocument();
  });
});
