"use client";

import { useState } from "react";
import { validateEmail } from "../_utilities/helpers";
import { RiBuildingLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import Button from "../_components/button";
import TextArea from "../_components/text-area";
import TextInput from "../_components/text-input";
import Toast from "../_components/toast";

const contactInfo = [
  {
    id: 0,
    Icon: RiBuildingLine,
    description: `123 Maple Street, Springfield, IL, USA`,
  },
  {
    id: 1,
    Icon: RiPhoneLine,
    description: `+1 (650) 555-0198`,
  },
  {
    id: 2,
    Icon: RiMailLine,
    description: `hello@abstractly.com`,
  },
];

export default function ContactPage() {
  const [errorText, setErrorText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const CONTACT_URL = "https://localhost:3001/api/contact";
    const { isValid, errorText } = validateEmail(formData.email);

    if (!isValid) {
      setErrorText(
        "Failed to subscribe. Please ensure your email is correct or try again later.",
      );
      return false;
    }

    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      if (response.ok) {
        // TODO
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        //setShowToast(true);
      } else {
        //setShowToast(true);
      }
    }
  };

  return (
    <div className="flex flex-col w-full lg:flex-row lg:gap-x-8">
      <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
          Talk to our team
        </h1>
        <p className="mt-5 text-lg md:text-xl text-neutral-600">
          We&apos;re committed to delivering the support you require to make
          your experience as smooth as possible.
        </p>
        <div className="flex mt-12 md:mt-16 lg:mt-12">
          <ul className="flex flex-col items-start justify-center gap-y-6">
            {contactInfo.map(({ id, Icon, description }) => (
              <li key={id} className="flex items-center w-full gap-3">
                <div className="flex border border-neutral-200 bg-white items-center justify-center h-12 w-12 rounded-full shadow shrink-0">
                  <Icon className="text-indigo-700 h-6 w-6" />
                </div>
                <p className="text-neutral-600 font-medium">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start
      self-stretch gap-y-6 rounded-lg border border-neutral-200 shadow-lg
      bg-white p-4 md:p-8 mt-12 md:mt-16 lg:mt-0 lg:w-1/2"
        noValidate
      >
        <div className="flex flex-col w-full gap-y-6 md:flex-row md:gap-x-8">
          <TextInput
            label="Name"
            name="name"
            placeholder="Your name"
            type="text"
            onChange={handleNameChange}
          />
          <TextInput
            label="Email"
            name="email"
            placeholder="example@example.com"
            type="email"
            onChange={handleEmailChange}
          />
        </div>
        <TextArea
          label="Message"
          name="message"
          placeholder="Write your message"
          onChange={handleMessageChange}
        />
        <Button
          classes="btn--md btn--primary self-stretch"
          type="submit"
          text="Submit"
        />
      </form>
      {errorText && <Toast type="error" text={errorText} />}
    </div>
  );
}
