import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Certifications from "../pages/Certifications";

const renderPage = () =>
  render(
    <MemoryRouter>
      <Certifications />
    </MemoryRouter>
  );

describe("Certifications carousel", () => {
  it("starts on the first certificate", () => {
    renderPage();
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
    expect(
      screen.getByText("Revit MEP — Essentials & Intermediate")
    ).toBeInTheDocument();
  });

  it("advances to the next certificate", async () => {
    const user = userEvent.setup();
    renderPage();
    await user.click(screen.getByLabelText("Next"));
    expect(screen.getByText("2 / 5")).toBeInTheDocument();
  });

  it("wraps from the last certificate back to the first", async () => {
    const user = userEvent.setup();
    renderPage();
    const next = screen.getByLabelText("Next");
    for (let i = 0; i < 5; i++) await user.click(next);
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });

  it("wraps backwards from the first to the last", async () => {
    const user = userEvent.setup();
    renderPage();
    await user.click(screen.getByLabelText("Previous"));
    expect(screen.getByText("5 / 5")).toBeInTheDocument();
  });

  it("jumps straight to a certificate when its dot is clicked", async () => {
    const user = userEvent.setup();
    renderPage();
    await user.click(screen.getByLabelText("Certificate 4"));
    expect(screen.getByText("4 / 5")).toBeInTheDocument();
  });
});