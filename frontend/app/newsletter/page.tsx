"use client";

import { useState } from "react";
import Button from "../_components/button";
import ChecklistItem from "../_components/checklist-item";
import Image from "next/image";
import TextInput from "../_components/text-input";
import Toast, { ToastType } from "../_components/toast";

const featureList = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];

export default function NewsletterPage() {
  const TOAST_DURATION = 3500;
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(0);
  const [toastType, setToastType] = useState<ToastType>("error");
  const [errorText, setErrorText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setEmail(value);
    setErrorText("");
    setShowToast(0);
  };

  const validateEmail = () => {
    // https://mailtrap.io/blog/javascript-email-validation/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatted = emailRegex.test(email);

    if (!email) {
      setErrorText("Email address is required.");
    } else if (!isFormatted) {
      setErrorText("Please enter a valid email address.");
    }
    if (!email || !isFormatted) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subscribeUrl = "https://localhost:3001/api/subscribe";
    const isValid = validateEmail();

    if (!isValid) {
      return;
    }
    try {
      const response = await fetch(subscribeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      if (response.ok) {
        setShowToast(TOAST_DURATION);
        setToastType("success");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setShowToast(TOAST_DURATION);
        setToastType("error");
      } else {
        setShowToast(TOAST_DURATION);
        setToastType("error");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-y-12 md:gap-y-8 lg:gap-x-8">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900">
          Get the finest curated abstracts delivered weekly to your inbox.
        </h1>
        <ul className="flex flex-col gap-y-5 mt-8 md:mt-16">
          {featureList.map((text, idx) => (
            <ChecklistItem key={idx} text={text} />
          ))}
        </ul>
        <div className="flex flex-col mt-8 md:mt-12">
          <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
            <div className="flex flex-col md:flex-row">
              <TextInput
                ariaLabel="email"
                type="email"
                label=""
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <Button
                classes="btn--md btn--primary mt-4 md:ml-4 md:mt-0"
                text="Subscribe"
                type="submit"
              />
            </div>
            <span className="text-red-600 text-sm mt-1.5">{errorText}</span>
            <p className="text-neutral-600 mt-4">
              We only send you the best articles! No spam.
            </p>
          </form>
        </div>
      </div>
      <Image
        alt="Earth-toned waves"
        className="w-auto mt-4 md:mt-16 lg:mt-0"
        height={0}
        src="/newsletter.png"
        style={{ objectFit: "cover" }}
        width={0}
      />
      {showToast > 0 && (
        <div className="w-full min-w-[375px] max-w-max fixed px-4 left-1/2 -translate-x-1/2 top-[110px] md:top-[120px] lg:top-[140px]">
          <Toast
            duration={showToast}
            type={toastType}
            text={
              toastType === "error"
                ? "Failed to subscribe. Please ensure your email is correct or try again later."
                : "Subscription successful! Please check your email to confirm."
            }
          />
        </div>
      )}
    </div>
  );
}
