import type { Metadata } from "next";
import { RiMessage2Line } from "@remixicon/react";
import IconButton from "../_components/icon-button";

const iconButtonSizes = [
  "icon--btn--md",
  "icon--btn--lg",
  "icon--btn--xl",
  "icon--btn--2xl",
  "icon--btn--2xl",
];
const iconButtonVariants = [
  "icon--btn--primary",
  "icon--btn--secondary",
  "icon--btn--tertiary",
  "icon--btn--destructive",
];

const makeDisabledButtonVariants = [
  "icon--btn--primary",
  "icon--btn--tertiary",
];

export const metadata: Metadata = {
  title: "Icon Button | UI Component Library | Jason Long",
};

export default function IconButtonPage() {
  return (
    <div className="flex flex-col items-center py-28 px-6 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-start gap-y-12">
        {iconButtonVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row flex-wrap items-center gap-6"
          >
            {iconButtonSizes.map((size) => (
              <IconButton
                Icon={RiMessage2Line}
                key={`${variant}_${size}`}
                classes={`${size} ${variant}`}
                href="/"
              />
            ))}
          </div>
        ))}
        {makeDisabledButtonVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row flex-wrap items-center gap-6"
          >
            {iconButtonSizes.map((size) => (
              <IconButton
                Icon={RiMessage2Line}
                key={`${variant}_${size}`}
                classes={`${size} ${variant}`}
                href="/"
                isDisabled={true}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
