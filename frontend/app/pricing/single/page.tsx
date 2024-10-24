import type { Metadata } from "next";
import Badge from "../../_components/badge";
import Button from "../../_components/button";
import ChecklistItem from "../../_components/checklist-item";
import TextBanner from "../../_components/text-banner";

const checklist = [
  "128 available credits for all images",
  "Up to three users",
  "24-hour response",
  "Advanced analytics",
];

export const metadata: Metadata = {
  title: "Pricing | UI Component Library | Jason Long",
};

export default function PricingPage() {
  return (
    <div className="h-full flex flex-col gap-y-16 justify-start">
      <TextBanner
        eyebrow="One-time purchase"
        heading="Pay as you need"
        subheading="We offer one-time purchases with credits, for you to use as needed. Always active."
      />
      <div className="flex flex-col lg:flex-row gap-y-8 md:gap-y-12 lg:gap-x-8">
        <div className="flex flex-col gap-y-8 md:gap-y-16 lg:justify-center lg:w-3/5">
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900">
            Unlock creativity once, enjoy forever
          </h2>
          <div className="flex flex-col items-start justify-center gap-y-5">
            {checklist.map((item, idx) => (
              <ChecklistItem key={idx} text={item} />
            ))}
          </div>
        </div>
        <div className="bg-white max-w-screen-md lg:w-2/5 flex flex-col gap-y-8 p-8 shadow-lg border border-neutral-200 rounded-lg">
          <div className="flex flex-col gap-y-2 items-center">
            <Badge classes="badge--md badge--success" text="Popular" />
            <span className="text-neutral-900 text-5xl font-semibold md:text-6xl md:font-bold">
              $699
            </span>
            <span className="text-sm text-neutral-600">Prices in USD</span>
          </div>
          <p className="text-neutral-900 text-xl text-center px-8">
            Pay once, use it forever. No strings attached.
          </p>
          <Button classes="btn--md btn--primary md:btn--xl" text="Buy now" />
        </div>
      </div>
    </div>
  );
}
