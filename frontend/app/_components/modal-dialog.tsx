"use client";
import { useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import Button from "./button";

export default function ModalDialog() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        data-testid="modal-dialog"
        className="flex items-center justify-center z-50 fixed top-0 left-0 w-screen h-screen bg-black/70"
      >
        <div className="flex flex-col p-6 items-start bg-white rounded-lg shadow max-w-screen-sm w-full">
          <div className="flex items-start gap-x-2">
            <p className="text-neutral-900 text-lg font-semibold">
              Are you sure you want to leave the process?
            </p>
            <button onClick={handleClick}>
              <RiCloseLine />
            </button>
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            Your upgrade plan process will be cancelled. You need to start again
            if you leave the process.
          </p>
          <div className="flex w-full justify-center gap-x-3 mt-8">
            <Button
              onClick={handleClick}
              classes="btn--xl flex-grow btn--secondary"
              text="No"
            />
            <Button
              onClick={handleClick}
              classes="btn--xl flex-grow btn--primary"
              text="Yes"
            />
          </div>
        </div>
      </div>
    )
  );
}
