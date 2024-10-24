"use client";
import Button from "../_components/button";
import FaqItem from "../_components/faq-item";
import TextBanner from "../_components/text-banner";

const faqs = [
  {
    question: "What types of images are available on your platform?",
    answer: `Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.`,
  },
  {
    question: "How can I access and download images from your platform?",
    answer: `Accessing and downloading images from our platform is simple. Upon
signing up and logging in, users can browse through our curated collection and
download their chosen images directly to their devices with just a few
clicks.`,
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer: `We provide both free and premium images on our platform. Users can
explore a selection of free images without any subscription. For access to our
entire library and additional features, we offer subscription plans tailored to
different user needs.`,
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer: `We accept a variety of payment methods, including credit/debit
cards and online payment gateways, to make the subscription process convenient
for our users.`,
  },
  {
    question: "Can I cancel or modify my subscription at any time?",
    answer: `Yes, absolutely. You have the flexibility to cancel or modify your
subscription at any time through your account settings. Changes will take
effect immediately, ensuring you have full control over your subscription
preferences.`,
  },
  {
    question: "How frequently do you update your image collection?",
    answer: `We regularly update our image collection with fresh and
captivating content to keep our users inspired and engaged. New images are
added consistently to ensure there's always something new to discover on our
platform.`,
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <TextBanner
        heading="Frequently asked questions"
        subheading="Get all your questions answered"
      />
      <div className="mt-12 md:mt-16">
        {faqs.map(({ question, answer }, idx) => (
          <div key={idx} className="flex flex-col">
            <FaqItem question={question} answer={answer} />
            {idx !== faqs.length - 1 && (
              <div className="border border-neutral-300 my-7"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 self-stretch mt-7 p-4 md:p-8 border border-neutral-200 rounded-lg shadow-md">
        <div className="flex flex-col flex-grow gap-y-2">
          <p className="text-xl font-semibold text-neutral-900">
            Can’t find the answer you’re looking for?
          </p>
          <p className="text-neutral-600">
            Reach out to our customer support team.
          </p>
        </div>
        <Button
          classes="btn--xl btn--primary"
          text="Get in touch"
          href="/contact-us"
        />
      </div>
    </div>
  );
}
