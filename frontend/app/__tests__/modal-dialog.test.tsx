import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ModalDialog from "../_components/modal-dialog";

describe("Modal Dialog", () => {
  it("closes modal on button click", async () => {
    const user = userEvent.setup();
    render(
      <ModalDialog
        title="title"
        body="body"
        btnLayout="double"
        confirmBtnText="Yes"
        denyBtnText="No"
      />,
    );
    const modal = screen.getByRole("dialog");
    const confirmBtn = screen.getByText("Yes");
    await user.click(confirmBtn);
    expect(modal).not.toBeVisible();
  });

  it("does not render the deny button when btnLayout is single", () => {
    render(
      <ModalDialog
        title="title"
        body="body"
        btnLayout="single"
        confirmBtnText="Yes"
      />,
    );
    const denyBtn = screen.queryByText("No");
    expect(denyBtn).not.toBeInTheDocument();
  });

  it("does not render the deny button when btnLayout is double, but denyBtnText prop is missing", () => {
    render(
      <ModalDialog
        title="title"
        body="body"
        btnLayout="double"
        confirmBtnText="Yes"
      />,
    );
    const denyBtn = screen.queryByText("No");
    expect(denyBtn).not.toBeInTheDocument();
  });

  it("renders both buttons", () => {
    render(
      <ModalDialog
        title="title"
        body="body"
        btnLayout="double"
        denyBtnText="No"
        confirmBtnText="Yes"
      />,
    );
    const denyBtn = screen.getByText("No");
    const confirmBtn = screen.getByText("Yes");
    expect(denyBtn).toBeInTheDocument();
    expect(confirmBtn).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <ModalDialog
        title="title"
        body="body"
        btnLayout="double"
        denyBtnText="No"
        confirmBtnText="Yes"
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
