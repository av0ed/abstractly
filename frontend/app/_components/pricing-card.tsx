import Button from "../_components/button";
import ChecklistItem from "../_components/checklist-item";

export type PlanType = "Basic Plan" | "Standard Plan" | "Premium Plan";

export interface PricingCardProps {
  highlighted?: boolean;
  planType: PlanType;
  planBlurb?: string;
  planPrice: number;
  planPriceBlurb?: string;
  checklistItems?: string[];
}

export default function PricingCard({
  highlighted = false,
  planType,
  planBlurb,
  planPrice,
  planPriceBlurb,
  checklistItems,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col gap-y-8 w-full bg-white border rounded-lg ${highlighted ? "border-indigo-600 shadow-2xl" : "border-neutral-200"}`}
    >
      {highlighted && (
        <div className="flex flex-col items-center justify-center bg-indigo-50 p-4 rounded-tl-lg rounded-tr-lg">
          <span className="text-xl text-indigo-700 font-bold">
            Most Popular
          </span>
        </div>
      )}
      <div
        className={`flex flex-col gap-y-2 px-4 md:px-8 ${highlighted ? "pt-0" : "pt-4 md:pt-8"}`}
      >
        <p className="text-neutral-900 text-2xl font-semibold">{planType}</p>
        <p className="text-neutral-600">{planBlurb}</p>
      </div>
      <div className="flex flex-col gap-y-2 px-4 md:px-8">
        <div className="flex flex-row gap-x-0.5">
          <span
            className={`text-5xl font-semibold ${highlighted ? "text-indigo-700" : "text-neutral-900 "}`}
          >
            ${planPrice.toString()}
          </span>
          <span
            className={`self-end ${highlighted ? "text-indigo-700" : "text-neutral-900 "}`}
          >
            / month
          </span>
        </div>
        <span className="text-neutral-600">{planPriceBlurb}</span>
      </div>
      <div className="flex flex-col flex-grow gap-y-5 px-4 md:px-8">
        {checklistItems &&
          checklistItems.map((text, idx) => (
            <ChecklistItem key={idx} text={text} />
          ))}
      </div>
      <div className="flex px-4 pb-4 md:px-8 md:pb-8">
        <Button
          classes={`btn--xl w-full ${highlighted ? "btn--primary" : "btn--secondary"}`}
          text="Buy now"
        />
      </div>
    </div>
  );
}
