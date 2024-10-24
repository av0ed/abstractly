import type { Metadata } from "next";
import { RiHdLine, RiWaterPercentLine, RiRainbowLine } from "@remixicon/react";
import Image from "next/image";
import FeatureCard from "../../_components/feature-card";
import TextBanner from "../../_components/text-banner";

const features = [
  {
    id: 0,
    icon: RiHdLine,
    feature: "5K resolution support",
    description: `All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.`,
  },
  {
    id: 1,
    icon: RiWaterPercentLine,
    feature: "From water to glass",
    description: `We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.`,
  },
  {
    id: 2,
    icon: RiRainbowLine,
    feature: "Portrait or landscape",
    description: `Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.`,
  },
];

export const metadata: Metadata = {
  title: "Features Side Image Right | UI Component Library | Jason Long",
};

export default function FeaturesSideImageRightPage() {
  return (
    <>
      <TextBanner
        eyebrow="High-quality images"
        heading="For designers, by designers"
        subheading="Unleash boundless creativity with a large repository of images optimized for designers."
      />
      <div className="flex flex-col gap-y-12 mt-12 md:mt-16 lg:gap-y-0 lg:flex-row lg:w-full lg:gap-x-8">
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
          src="/unsplash-md.png"
          alt="colorful, clear cubes on a tile counter"
          height={0}
          width={0}
          className="h-auto w-full rounded-lg shadow-lg lg:w-1/2"
        />
      </div>
    </>
  );
}
