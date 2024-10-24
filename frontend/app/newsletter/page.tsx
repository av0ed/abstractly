"use client";

import { useState } from "react";
import Button from "../_components/button";
import TextInput from "../_components/text-input";
import Image from "next/image";
import ChecklistItem from "../_components/checklist-item";

const featureList = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("example@mail.com");
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setHasError(false);
    setEmail(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subscribeUrl = "https://localhost:3001/api/subscribe";
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
    } catch (error) {
      setHasError(true);
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
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <TextInput
                type="email"
                label="Email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <Button
                classes="btn--md btn--primary mt-4 self-stretch md:ml-4 md:mt-0 md:self-end"
                text="Subscribe"
                type="submit"
              />
            </div>
            <p
              className={`${hasError ? "text-red-600" : "text-neutral-600"} mt-3`}
            >
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
