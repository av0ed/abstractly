import type { Metadata } from "next";
import Badge from "../_components/badge";
import Button from "../_components/button";
import ChecklistItem from "../_components/checklist-item";

const checklist = [
  "128 available credits for all images",
  "Up to three users",
  "24-hour response",
  "Advanced analytics",
];

export const metadata: Metadata = {
  title: "Pricing Section (Single)  | UI Component Library | Jason Long",
};

export default function PricingSectionSinglePage() {
  return (
    <div className="h-full p-4 bg-gradient-haze">
      <div className="w-full h-full bg-white">
        <div className="h-full md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col gap-y-16 justify-start py-12 px-4 md:py-16 lg:p-24">
          <div className="flex flex-col items-center md:px-8 lg:px-40">
            <div className="flex flex-col items-center gap-y-3 md:px-10">
              <span className="text-base font-semibold text-indigo-700">
                One-time purchase
              </span>
              <h1 className="text-center text-3xl font-semibold text-neutral-900 md:text-5xl">
                Pay as you need
              </h1>
            </div>
            <p className="mt-5 text-center text-xl text-neutral-600">
              We offer one-time purchases with credits, for you to use as
              needed. Always active.
            </p>
          </div>
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
            <div className="max-w-screen-md lg:w-2/5 flex flex-col gap-y-8 p-8 shadow-lg border border-neutral-200 rounded-lg">
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
              <Button
                classes="btn--md btn--primary md:btn--xl"
                text="Buy now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}