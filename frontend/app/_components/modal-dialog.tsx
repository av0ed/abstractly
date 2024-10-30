"use client";
import { useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import Button from "./button";

type ModalDialogVariants = "primary" | "danger";
type ModalDialogBtnLayout = "single" | "double";

type ModalDialogProps = {
  body: string;
  btnLayout: ModalDialogBtnLayout;
  confirmBtnText: string;
  denyBtnText?: string;
  title: string;
  variant?: ModalDialogVariants;
};

export default function ModalDialog({
  body,
  btnLayout,
  confirmBtnText,
  denyBtnText,
  title,
  variant = "primary",
}: ModalDialogProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        role="dialog"
        aria-labelledby="title"
        aria-describedby="body"
        className="flex items-center justify-center z-50 fixed top-0 left-0 w-screen h-screen bg-black/70"
      >
        <div className="flex flex-col p-6 items-start bg-white rounded-lg shadow max-w-screen-sm w-full">
          <div className="flex items-start gap-x-2">
            <p id="title" className="text-neutral-900 text-lg font-semibold">
              {title}
            </p>
            <Button
              text=""
              classes="link--2xl"
              onClick={handleClick}
              Icon={RiCloseLine}
              ariaLabel="Close"
            />
          </div>
          <p id="body" className="mt-2 text-sm text-neutral-600">
            {body}
          </p>
          <div className="flex w-full justify-center gap-x-3 mt-8">
            {btnLayout === "double" && denyBtnText && (
              <Button
                onClick={handleClick}
                classes="btn--xl flex-grow btn--secondary"
                text={denyBtnText}
              />
            )}
            <Button
              onClick={handleClick}
              classes={`${variant === "danger" ? "btn--destructive" : "btn--primary"} btn--xl flex-grow `}
              text={confirmBtnText}
            />
          </div>
        </div>
      </div>
    )
  );
}
