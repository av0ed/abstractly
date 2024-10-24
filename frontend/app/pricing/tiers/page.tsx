"use client";
import { useState } from "react";
import Button from "../../_components/button";
import PricingCard from "../../_components/pricing-card";
import TextBanner from "../../_components/text-banner";
import { PricingCardProps } from "../../_components/pricing-card";

export default function PricingTiersPage() {
  const [paymentSchedule, setPaymentSchedule] = useState("Annually");

  const calculateAnnualPrice = (price: number): number => {
    const MONTHS_PER_YEAR = 12;
    return Math.ceil(price) * MONTHS_PER_YEAR;
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    const value = event.currentTarget.textContent;
    if (value) setPaymentSchedule(value);
  };

  const getPlanPriceBlurb = (price: number): string => {
    if (paymentSchedule === "Monthly") {
      return "Billed monthly";
    } else {
      return (
        "Billed annually ($" + calculateAnnualPrice(price).toString() + ")"
      );
    }
  };

  // const planPrices = {
  //   monthly: { basic: 9.99, standard: 19.99, premium: 29.99 },
  //   annually: { basic: 6.99, standard: 15.99, premium: 25.99 },
  // };

  // const getPlanPrice = (planType: string): number => {
  //   if (paymentSchedule === "Monthly") {
  //     return planPrices.monthly[planType];
  //   }
  //   return 0;
  // };

  const pricingPlans: PricingCardProps[] = [
    {
      planType: "Basic Plan",
      planBlurb: "Access to a curated selection of abstract images",
      planPrice: 6.99,
      planPriceBlurb: getPlanPriceBlurb(6.99),
      checklistItems: [
        "Standard quality images",
        "Limited to personal use",
        "Email support",
      ],
    },
    {
      highlighted: true,
      planType: "Standard Plan",
      planBlurb: "Next-level integrations, priced economically",
      planPrice: 15.99,
      planPriceBlurb: getPlanPriceBlurb(15.99),
      checklistItems: [
        "Expanded library with more diverse abstract images",
        "High-resolution images available",
        "Suitable for commercial use",
        "Priority email support",
        "Advanced analytics",
      ],
    },
    {
      planType: "Premium Plan",
      planBlurb: "Experience limitless living for power users",
      planPrice: 25.99,
      planPriceBlurb: getPlanPriceBlurb(25.99),
      checklistItems: [
        "Full access to the entire image library, including exclusive content",
        "Highest quality images, including premium collections",
        "Commercial and resale rights",
        "Dedicated customer support line",
        "24/7 support response time",
        "Advanced analytics and insights",
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <TextBanner
        eyebrow="Pricing Tiers"
        heading="Fit for all your needs"
        subheading="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
      />
      <div className="flex flex-row justify-center gap-x-4 mt-10">
        <Button
          classes={`btn--lg w-[140px] ${paymentSchedule === "Monthly" ? "btn--secondary" : ""}`}
          text="Monthly"
        />
        <Button
          classes={`btn--lg w-[140px] ${paymentSchedule === "Annually" ? "btn--secondary" : ""}`}
          text="Annually"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 mt-12">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            highlighted={plan.highlighted}
            planType={plan.planType}
            planBlurb={plan.planBlurb}
            planPrice={plan.planPrice}
            planPriceBlurb={plan.planPriceBlurb}
            checklistItems={plan.checklistItems}
          />
        ))}
      </div>
    </div>
  );
}
