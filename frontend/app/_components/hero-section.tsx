import Button from "../_components/button";
import Image, { StaticImageData } from "next/image";
import ChecklistItem from "../_components/checklist-item";

interface HeroSectionProps {
  featureList?: string[];
  heading: string;
  imageAlt: string;
  imageSrc: string | StaticImageData;
  subheading?: string;
}

export default function HeroSection({
  featureList,
  heading,
  imageAlt,
  imageSrc,
  subheading,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-12 md:gap-y-8 lg:gap-x-8">
      <div className="flex flex-col lg:justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
          {heading}
        </h1>
        {featureList ? (
          <ul className="flex flex-col gap-y-5 mt-8 md:mt-16">
            {featureList.map((text, idx) => (
              <ChecklistItem key={idx} text={text} />
            ))}
          </ul>
        ) : (
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-600">
            {subheading}
          </p>
        )}
        <div className="flex flex-row-reverse justify-end mt-8 md:justify-start md:flex-row md:mt-16 gap-x-4 md:gap-x-8">
          <Button
            classes="btn--xl md:btn--2xl btn--secondary"
            text="Learn more"
            href="/features/side-image-left"
          />
          <Button
            classes="btn--xl md:btn--2xl btn--primary"
            text="See pricing"
            href="/pricing/tiers"
          />
        </div>
      </div>
      <Image
        alt={imageAlt}
        className="w-auto mx-auto md:mx-0"
        height={0}
        src={imageSrc}
        style={{ objectFit: "cover" }}
        width={0}
      />
    </div>
  );
}
