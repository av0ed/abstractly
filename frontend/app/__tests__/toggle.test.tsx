import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Toggle from "../_components/toggle";

describe("Toggle", () => {
  it("should be disabled when isDisabled is set", () => {
    render(<Toggle name="toggle" disabled={true} />);
    const toggle = screen.getByRole("switch");
    expect(toggle).toBeDisabled();
  });

  it("should not be focusable when disabled", () => {
    render(<Toggle name="toggle" disabled={true} />);
    const toggle = screen.getByRole("switch");
    toggle.focus();
    expect(toggle).not.toHaveFocus();
  });

  it("should not be clickable when disabled", async () => {
    const user = userEvent.setup();
    render(<Toggle name="toggle" disabled={true} />);
    const toggle = screen.getByRole("switch");
    await user.click(toggle);
    expect(toggle).toBeDisabled();
  });

  it("should be focused when clicked", async () => {
    const user = userEvent.setup();
    render(<Toggle name="toggle" />);
    const toggle = screen.getByRole("switch");
    await user.click(toggle);
    expect(toggle).toHaveFocus();
  });

  it("should be focused on keypress enter", async () => {
    const user = userEvent.setup();
    render(<Toggle name="toggle" />);
    const toggle = screen.getByRole("switch");
    toggle.focus();
    await user.keyboard("{Enter}");
    expect(toggle).toBeChecked();
  });

  it("should be focused on keypress space", async () => {
    const user = userEvent.setup();
    render(<Toggle name="toggle" />);
    const toggle = screen.getByRole("switch");
    toggle.focus();
    await user.keyboard("{Spacebar}");
    expect(toggle).toBeChecked();
  });
});
