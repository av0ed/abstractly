import { useState } from "react";
import type { Metadata } from "next";
import { RiBuildingLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import Button from "../_components/button";
import FeatureCard from "../_components/feature-card";
import TextArea from "../_components/text-area";
import TextInput from "../_components/text-input";

const features = [
  {
    id: 0,
    icon: RiBuildingLine,
    description: `123 Maple Street, Springfield, IL, USA`,
  },
  {
    id: 1,
    icon: RiPhoneLine,
    description: `+1 (650) 555-0198`,
  },
  {
    id: 2,
    icon: RiMailLine,
    description: `hello@abstractly.com`,
  },
];

export const metadata: Metadata = {
  title: "Contact Us | Abstractly",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900">
        Talk to our team
      </h1>
      <p className="text-lg md:text-xl text-neutral-600">
        We&apos;re committed to delivering the support you require to make your
        experience as smooth as possible.
      </p>
      <div className="flex flex-col-reverse mt-12 md:mt-16">
        <div className="flex flex-col items-start justify-center gap-y-6 lg:w-1/2">
          {features.map(({ id, icon, description }) => (
            <FeatureCard
              key={id}
              Icon={icon}
              iconAlign="row"
              description={description}
            />
          ))}
        </div>
      </div>
      <form className="flex flex-col items-start self-stretch gap-y-6 rounded-lg border border-neutral-200 shadow-lg bg-white p-4 mt-12">
        <TextInput label="Name" placeholder="Your name" type="text" />
        <TextInput
          label="Email"
          placeholder="example@example.com"
          type="email"
        />
        <TextArea label="Message" placeholder="Write your message" />
        <Button
          classes="btn--md btn--primary self-stretch"
          type="submit"
          text="Submit"
        />
      </form>
    </div>
  );
}
