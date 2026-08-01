import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe("Navbar", () => {
  it("renders every navigation link", () => {
    renderNavbar();
    ["Home", "About", "Projects", "Certifications", "Services", "Contact"].forEach(
      (label) => {
        expect(screen.getAllByText(label).length).toBeGreaterThan(0);
      }
    );
  });

  it("shows the engineer's name in the logo", () => {
    renderNavbar();
    expect(screen.getByText("Wafic Abouhosh")).toBeInTheDocument();
  });

  it("opens the mobile menu when the hamburger is clicked", async () => {
    const user = userEvent.setup();
    renderNavbar();
    expect(screen.getAllByText("Home")).toHaveLength(1);
    await user.click(screen.getByLabelText("Menu"));
    expect(screen.getAllByText("Home")).toHaveLength(2);
  });

  it("closes the mobile menu after a link is clicked", async () => {
    const user = userEvent.setup();
    renderNavbar();
    await user.click(screen.getByLabelText("Menu"));
    const links = screen.getAllByText("About");
    await user.click(links[links.length - 1]);
    expect(screen.getAllByText("About")).toHaveLength(1);
  });
});