import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TextArea from "../_components/text-area";

describe("Text Area", () => {
  it("renders the text area with the correct text", () => {
    render(<TextArea label="Comment" />);
    const el = screen.getByText("Comment");
    expect(el).toBeInTheDocument();
  });

  it("on focus, applies the correct focus classes", () => {
    render(<TextArea label="Comment" placeholder="placeholder" />);
    const el = screen.getByPlaceholderText("placeholder");
    el.focus();
    expect(el).toHaveClass("focus:ring-indigo-200 focus:border-indigo-600");
  });

  it("on focus with error, applies the correct focus error classes", () => {
    render(
      <TextArea label="Comment" placeholder="placeholder" error="error" />,
    );
    const el = screen.getByPlaceholderText("placeholder");
    el.focus();
    expect(el).not.toHaveClass("focus:ring-indigo-200 focus:border-indigo-600");
    expect(el).toHaveClass("focus:ring-red-200 focus:border-red-600");
  });

  it("if disabled, cannot be focused", async () => {
    const user = userEvent.setup();
    render(
      <TextArea label="Comment" placeholder="placeholder" isDisabled={true} />,
    );
    const el = screen.getByPlaceholderText("placeholder");
    await user.click(el);
    expect(el).not.toHaveFocus();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<TextArea label="Comment" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
