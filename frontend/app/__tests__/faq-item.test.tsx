import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import FaqItem from "../_components/faq-item";

describe("FAQ Item", () => {
  it("has invisible answer text without user interaction", () => {
    render(<FaqItem question="question" answer="answer" />);
    const answerText = screen.getByText("answer");
    expect(answerText).toHaveClass("opacity-0");
  });

  it("makes the answer text visible on user click", async () => {
    const user = userEvent.setup();
    render(<FaqItem question="question" answer="answer" />);
    const showButton = screen.getByLabelText("Show FAQ answer");
    const answerText = screen.getByText("answer");
    await user.click(showButton);
    expect(answerText).toHaveClass("opacity-100");
  });

  it("updates the answer text accessibility attributes on user click", async () => {
    const user = userEvent.setup();
    render(<FaqItem question="question" answer="answer" />);
    const showButton = screen.getByLabelText("Show FAQ answer");
    const answerText = screen.getByText("answer");
    expect(answerText).toHaveAttribute("aria-hidden", "true");
    await user.click(showButton);
    expect(answerText).toHaveAttribute("aria-hidden", "false");
  });

  it("updates the button accessibility attributes on user click", async () => {
    const user = userEvent.setup();
    render(<FaqItem question="question" answer="answer" />);
    const showButton = screen.getByLabelText("Show FAQ answer");
    expect(showButton).toHaveAttribute("aria-expanded", "false");
    await user.click(showButton);
    expect(showButton).toHaveAttribute("aria-label", "Hide FAQ answer");
    expect(showButton).toHaveAttribute("aria-expanded", "true");
  });
});
