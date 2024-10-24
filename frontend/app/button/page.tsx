import type { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import Button from "../_components/button";

const buttonSizes = ["btn--md", "btn--lg", "btn--xl", "btn--2xl", "btn--2xl"];
const buttonVariants = [
  "btn--primary",
  "btn--secondary",
  "btn--tertiary",
  "btn--destructive",
];

export const metadata: Metadata = {
  title: "Button | UI Component Library | Jason Long",
};

export default function ButtonPage() {
  return (
    <div className="flex flex-col items-center py-28 px-6 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-start gap-y-12">
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--primary" text="Primary Button" />
          <Button
            classes="btn--lg btn--primary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Primary Button"
          />
          <Button
            classes="btn--xl btn--primary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Primary Button"
          />
          <Button classes="btn--2xl btn--primary" text="Primary Button" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--secondary" text="Secondary Button" />
          <Button
            classes="btn--lg btn--secondary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Secondary Button"
          />
          <Button
            classes="btn--xl btn--secondary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Secondary Button"
          />
          <Button classes="btn--2xl btn--secondary" text="Secondary Button" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--tertiary" text="Tertiary Button" />
          <Button
            classes="btn--lg btn--tertiary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Tertiary Button"
          />
          <Button
            classes="btn--xl btn--tertiary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Tertiary Button"
          />
          <Button classes="btn--2xl btn--tertiary" text="Tertiary Button" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="link--md link--primary" text="Primary Link" />
          <Button
            classes="link--lg link--primary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Primary Link"
          />
          <Button
            classes="link--xl link--primary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Primary Link"
          />
          <Button classes="link--2xl link--primary" text="Primary Link" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="link--md link--secondary" text="Secondary Link" />
          <Button
            classes="link--lg link--secondary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Secondary Link"
          />
          <Button
            classes="link--xl link--secondary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Secondary Link"
          />
          <Button classes="link--2xl link--secondary" text="Secondary Link" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button
            classes="btn--md btn--destructive"
            text="Destructive Button"
          />
          <Button
            classes="btn--lg btn--destructive"
            Icon={RiStarLine}
            iconAlign="left"
            text="Destructive Button"
          />
          <Button
            classes="btn--xl btn--destructive"
            Icon={RiStarLine}
            iconAlign="right"
            text="Destructive Button"
          />
          <Button
            classes="btn--2xl btn--destructive"
            text="Destructive Button"
          />
        </div>
      </div>
    </div>
  );
}
