"use client";
import { useState } from "react";

type ToggleProps = {
  disabled?: boolean;
  name: string;
  size?: "sm" | "md";
};

const classes = {
  active: `after:bg-white after:shadow`,
  checked: `justify-end bg-indigo-700 hover:bg-indigo-800
  hover:border-indigo-600 hover:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]
  focus:bg-indigo-800 focus:border-indigo-600
  focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]`,
  default: `border border-transparent rounded-full flex p-0.5 shrink-0
  items-center focus:outline-none after:rounded-full`,
  disabled: `!bg-gray-100 after:!bg-gray-300 hover:!bg-gray-100
  hover:!border-transparent focus:!bg-gray-100 focus:!border-transparent
  focus:!shadow-none hover:!shadow-none`,
  unchecked: `justify-start bg-gray-200 hover:bg-gray-300 hover:border-gray-400
  hover:shadow-[0_0_0_4px_rgba(157,164,174,0.20)] focus:bg-gray-300
  focus:border-gray-400 focus:shadow-[0_0_0_4px_rgba(157,164,174,0.20)]`,
};

export default function Toggle({
  disabled = false,
  name,
  size = "md",
}: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (disabled) return;

    const SPACE = " ";

    if (e.key === "Enter" || e.key === SPACE) {
      setChecked(!checked);
    }
  };

  return (
    <label
      className={`
        ${classes.default} 
        ${checked ? classes.checked : classes.unchecked} 
        ${disabled ? classes.disabled : classes.active} 
        ${size === "sm" ? "w-9 h-5 after:h-4 after:w-4" : "w-[44px] h-6 after:h-5 after:w-5"}
      `}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
    >
      <input
        aria-disabled={disabled}
        className="hidden"
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        role="switch"
        type="checkbox"
      />
    </label>
  );
}
