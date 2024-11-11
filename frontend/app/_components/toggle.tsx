"use client";
import { useState } from "react";

type ToggleProps = {
  ariaLabel?: string;
  disabled?: boolean;
  name: string;
  size?: "sm" | "md";
};

const classes = {
  checked: `justify-end bg-indigo-700 hover:bg-indigo-800 hover:border-indigo-600 hover:shadow-[0_0_0_4px_rgba(68,76,231,0.12)] focus:bg-indigo-800 focus:border-indigo-600 focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]`,
  default: `focus:outline-none border border-transparent rounded-full flex p-0.5 shrink-0 items-center after:bg-white after:shadow after:rounded-full`,
  disabled: `bg-gray-100 after:bg-gray-300 hover:bg-gray-100 hover:border-transparent focus:bg-gray-100 focus:border-transparent focus:shadow-none hover:shadow-none`,
  unchecked: `justify-start bg-gray-200 hover:bg-gray-300 hover:border-gray-400 hover:shadow-[0_0_0_4px_rgba(157,164,174,0.20)] focus:bg-gray-300 focus:border-gray-400 focus:shadow-[0_0_0_4px_rgba(157,164,174,0.20)]`,
};

export default function Toggle({
  ariaLabel,
  disabled = false,
  name,
  size = "sm",
}: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <label
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`
          ${classes.default} 
          ${checked ? classes.checked : classes.unchecked} 
          ${disabled ? classes.disabled : ""} 
          ${size === "sm" ? "w-9 h-5 after:h-4 after:w-4" : "w-[44px] h-6 after:h-5 after:w-5"}
      `}
      tabIndex={0}
    >
      <input
        className="hidden"
        disabled={disabled}
        name={name}
        onClick={handleClick}
        type="checkbox"
      />
    </label>
  );
}
