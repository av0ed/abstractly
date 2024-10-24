import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TextInput from "../_components/text-input";

describe("Text Input", () => {
  it("renders the text input with the correct label text", () => {
    render(<TextInput label="Email" type="email" />);
    const el = screen.getByLabelText("Email");
    expect(el).toBeInTheDocument();
  });

  it("does not render hint text when error and hint are supplied", () => {
    render(<TextInput label="Email" type="email" hint="hint" error="error" />);
    const el = screen.queryByText("hint");
    expect(el).not.toBeInTheDocument();
  });

  it("renders only error text when error and hint are supplied", () => {
    render(<TextInput label="Email" type="email" hint="hint" error="error" />);
    const el = screen.queryByText("error");
    expect(el).toBeInTheDocument();
  });

  it("on focus, applies the correct focus classes", () => {
    render(<TextInput label="Email" type="email" placeholder="placeholder" />);
    const el = screen.getByPlaceholderText("placeholder");
    el.focus();
    expect(el).toHaveClass("focus:ring-indigo-200 focus:border-indigo-600");
  });

  it("on focus with error, applies the correct focus error classes", () => {
    render(
      <TextInput
        label="Name"
        type="text"
        error="error"
        placeholder="placeholder"
      />,
    );
    const el = screen.getByPlaceholderText("placeholder");
    el.focus();
    expect(el).not.toHaveClass("focus:ring-indigo-200 focus:border-indigo-600");
    expect(el).toHaveClass("focus:ring-red-200 focus:border-red-600");
  });

  it("if disabled, cannot be focused", async () => {
    const user = userEvent.setup();
    render(
      <TextInput
        label="Name"
        type="text"
        error="error"
        placeholder="placeholder"
        isDisabled={true}
      />,
    );
    const el = screen.getByPlaceholderText("placeholder");
    await user.click(el);
    expect(el).not.toHaveFocus();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<TextInput label="Email" type="email" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
