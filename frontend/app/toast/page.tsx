import type { Metadata } from "next";
import Toast, { ToastType } from "../_components/toast";

export const metadata: Metadata = {
  title: "Toast | Abstractly",
};

const textContent: Record<ToastType, string> = {
  success: "Your content was successfully added!",
  error: "Your content was deleted.",
  warning: "Your image is 5Mb, it may load longer.",
  info: "Your content is publicly visible.",
};

export default function ToastPage() {
  const toastVariants: ToastType[] = ["success", "error", "warning", "info"];

  return (
    <div className="flex flex-col justify-center items-center mx-auto gap-y-6">
      {toastVariants.map((variant, idx) => (
        <Toast
          key={`${variant}_${idx}`}
          text={textContent[variant]}
          type={variant}
        />
      ))}
    </div>
  );
}
