"use client";

import { useState } from "react";
import Button from "../_components/button";
import TextInput from "../_components/text-input";
import Image from "next/image";
import ChecklistItem from "../_components/checklist-item";

// TODO:
//
// 1. replace basic text with toast notification component for both success and
//    failure states for form submissions.

const featureList = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setEmail(value);
    setHasError(false);
    setMessage("");
  };

  const validateEmail = () => {
    // https://mailtrap.io/blog/javascript-email-validation/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatted = emailRegex.test(email);

    if (!email) {
      setMessage("Email address is required.");
    } else if (!isFormatted) {
      setMessage("Email must be formatted properly.");
    }
    if (!email || !isFormatted) {
      setHasError(true);
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
        setHasError(false);
        setMessage("Subscription successful!");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error occurred:", error);
        setHasError(true);
        setMessage(error.message);
      } else {
        console.error("An unknown error occurred.");
        setHasError(true);
        setMessage("An unknown error occurred.");
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
              <span
                className={`${hasError ? "text-red-600 " : "text-green-600"} text-sm mt-1.5 md:hidden`}
              >
                {message}
              </span>
              <Button
                classes="btn--md btn--primary mt-4 self-stretch md:ml-4 md:mt-0 md:self-end"
                text="Subscribe"
                type="submit"
              />
            </div>
            <span
              className={`${hasError ? "text-red-600 " : "text-green-600"} text-sm mt-1.5 hidden md:block`}
            >
              {message}
            </span>
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
    </div>
  );
}
