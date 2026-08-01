import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../pages/Contact";

const fillAndSubmit = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/name/i), "Liana Jomaa");
  await user.type(screen.getByLabelText(/email/i), "liana@example.com");
  await user.type(screen.getByLabelText(/message/i), "Hello, I'd like to work together.");
  await user.click(screen.getByRole("button", { name: /send message/i }));
};

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Contact form", () => {
  it("renders all three fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("shows a success message when the API reports success", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      json: async () => ({ success: true }),
    });
    const user = userEvent.setup();
    render(<Contact />);
    await fillAndSubmit(user);
    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  it("shows an error message when the API reports failure", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      json: async () => ({ success: false }),
    });
    const user = userEvent.setup();
    render(<Contact />);
    await fillAndSubmit(user);
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("shows an error message when the network request throws", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error("offline"));
    const user = userEvent.setup();
    render(<Contact />);
    await fillAndSubmit(user);
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("posts to the Web3Forms endpoint with the access key attached", async () => {
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      json: async () => ({ success: true }),
    });
    const user = userEvent.setup();
    render(<Contact />);
    await fillAndSubmit(user);
    const [url, options] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(options.method).toBe("POST");
    expect((options.body as FormData).get("access_key")).toBeTruthy();
    expect((options.body as FormData).get("name")).toBe("Liana Jomaa");
  });
});