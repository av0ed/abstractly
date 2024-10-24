import type { Metadata } from "next";
import { RiRocket2Line, RiP2pLine, RiCopyrightLine } from "@remixicon/react";
import Image from "next/image";
import FeatureCard from "../../_components/feature-card";
import TextBanner from "../../_components/text-banner";

const features = [
  {
    id: 0,
    icon: RiRocket2Line,
    feature: "Faster downloads",
    description: `Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience`,
  },
  {
    id: 1,
    icon: RiP2pLine,
    feature: "Convenience for teams",
    description: `Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.`,
  },
  {
    id: 2,
    icon: RiCopyrightLine,
    feature: "Royalty-free licensing",
    description: `Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.`,
  },
];

export const metadata: Metadata = {
  title: "Features Side Image Left | UI Component Library | Jason Long",
};

export default function FeaturesSideImageLeftPage() {
  return (
    <>
      <TextBanner
        eyebrow="Best-in-class support"
        heading="Convenience and licensing that empowers"
        subheading="In a world where storytelling constantly evolves, don't let licensing and poor support hold you down."
      />
      <div className="flex flex-col-reverse gap-y-12 mt-12 md:mt-16 lg:gap-y-0 lg:flex-row-reverse lg:w-full lg:gap-x-8">
        <div className="flex flex-col items-start justify-center gap-y-10 lg:w-1/2">
          {features.map(({ id, icon, feature, description }) => (
            <FeatureCard
              key={id}
              Icon={icon}
              iconAlign="row"
              feature={feature}
              description={description}
            />
          ))}
        </div>
        <Image
          src="/unsplash-md-2.png"
          alt="solid, colorful boxes"
          height={0}
          width={0}
          className="h-auto w-full rounded-lg shadow-lg lg:w-1/2"
        />
      </div>
    </>
  );
}
