import type { Metadata } from "next";
import Badge from "../_components/badge";

export const metadata: Metadata = {
  title: "Badge | UI Component Library | Jason Long",
};

export default function BadgePage() {
  const badgeSizes = ["badge--sm", "badge--md", "badge--lg"];
  const badgeVariants = [
    "badge--neutral",
    "badge--danger",
    "badge--warning",
    "badge--success",
    "badge--brand",
  ];
  return (
    <div className="py-[200px] px-4 flex flex-col justify-center items-start mx-auto gap-y-6 w-[240px]">
      {badgeVariants.map((variant, idx) => (
        <div
          key={`${variant}_${idx}`}
          className="flex flex-row items-center gap-x-6"
        >
          {badgeSizes.map((size, jdx) => (
            <Badge
              key={`${size}_${jdx}`}
              classes={`${size} ${variant}`}
              text="Label"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
