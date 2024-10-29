"use client";

import { useEffect, useState } from "react";
export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  duration?: number;
  text: string;
  type: ToastType;
}

const toastClasses: Record<ToastType, Record<string, string>> = {
  success: {
    text: "text-green-700",
    wrapper: "bg-green-50",
  },
  error: {
    text: "text-red-600",
    wrapper: "bg-red-50",
  },
  warning: {
    text: "text-amber-700",
    wrapper: "bg-amber-50",
  },
  info: {
    text: "text-neutral-600",
    wrapper: "bg-gray-50",
  },
};

export default function Toast({ duration = 10000, text, type }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timerId);
  }, [duration]);

  return (
    <>
      {isVisible && (
        <div
          className={`${toastClasses[type].wrapper} flex items-center gap-3 rounded-full pl-1 pr-2.5 py-1`}
          role="alert"
        >
          <div
            className={`${toastClasses[type].text} flex items-center justify-center rounded-full shadow bg-white px-2.5 py-0.5 text-sm font-medium`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
          <span className={`${toastClasses[type].text}`}>{text}</span>
        </div>
      )}
    </>
  );
}
