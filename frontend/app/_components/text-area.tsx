"use client";
import { useState } from "react";

interface TextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  rows?: number;
}

const classes = {
  error: "font-normal text-red-600 self-start",
  input: `resize-none text-neutral-900 border border-neutral-200
      bg-neutral-50 rounded-lg py-3 px-3.5 text-ellipsis overflow-hidden
      font-normal placeholder-neutral-500 focus:outline-none focus:ring
      disabled:pointer-events-none disabled:border-neutral-100
      disabled:placeholder-neutral-400`,
  inputError: "border-red-300 focus:border-red-600 focus:ring-red-200",
  inputFocus: "focus:ring-indigo-200 focus:border-indigo-600",
  label:
    "flex flex-col gap-y-1.5 font-medium text-sm text-neutral-700 w-full max-w-[340px]",
  message: "self-end text-neutral-500",
  messageError: "self-end text-red-600",
};

export default function TextArea({
  onChange,
  error,
  isDisabled,
  isRequired,
  label,
  placeholder,
  rows = 3,
}: TextAreaProps) {
  const CHAR_COUNT_LIMIT = 500;
  const [charCount, setCharCount] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const currCharCount = value.length;
    setCharCount(currCharCount);

    if (onChange) {
      onChange(event);
    }
  };

  const overCharLimit = () => {
    return charCount > CHAR_COUNT_LIMIT;
  };

  const setMessage = () => {
    if (error) {
      return <span className={classes.error}>{error}</span>;
    } else {
      return (
        <span
          className={`${overCharLimit() ? classes.messageError : classes.message}`}
        >
          {charCount}/{CHAR_COUNT_LIMIT}
        </span>
      );
    }
  };

  const inputClasses = `
    ${classes.input} 
    ${error || overCharLimit() ? classes.inputError : classes.inputFocus} 
  `;

  return (
    <label className={classes.label}>
      {label}
      <textarea
        aria-invalid={!!error}
        aria-required={isRequired}
        className={inputClasses}
        disabled={isDisabled}
        onChange={handleChange}
        placeholder={placeholder}
        required={isRequired}
        rows={rows}
        tabIndex={isDisabled ? -1 : 0}
      />
      {setMessage()}
    </label>
  );
}
