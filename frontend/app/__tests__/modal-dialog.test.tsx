import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ModalDialog from "../_components/modal-dialog";

describe("Modal Dialog", () => {
  it("closes modal on button click", async () => {
    const user = userEvent.setup();
    render(<ModalDialog />);
    const modal = screen.getByTestId("modal-dialog");
    const yesBtn = screen.getByText("Yes");
    await user.click(yesBtn);
    expect(modal).not.toBeVisible();
  });
});
