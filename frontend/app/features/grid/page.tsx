import type { Metadata } from "next";
import {
  RiDownload2Line,
  RiBrushLine,
  RiCopyrightLine,
  RiRefund2Fill,
  RiTeamLine,
  RiRefreshLine,
} from "@remixicon/react";
import FeatureCard from "../../_components/feature-card";
import TextBanner from "../../_components/text-banner";

const features = [
  {
    id: 0,
    icon: RiDownload2Line,
    feature: "Infinite Download",
    description: `Once you subscribe to our plans, they're all yours. Download as many as
      you want and use them for work presentations, wallpapers, and much
      more.`,
  },
  {
    id: 1,
    icon: RiBrushLine,
    feature: "Purely Handcrafted",
    description: `No AI, no generic images. Crafted from various chemicals,
fabrics, clouds, or even particles as small as dust.`,
  },
  {
    id: 2,
    icon: RiCopyrightLine,
    feature: "All Are Under License",
    description: `The only limitation with these abstract images is that you
are not able to sell them in any form, whether digital or hard copy (such as
paintings or prints on paper).`,
  },
  {
    id: 3,
    icon: RiRefund2Fill,
    feature: "Cancel Anytime",
    description: `Subscribe at your own pace, and cancel when you feel it's enough.`,
  },
  {
    id: 4,
    icon: RiTeamLine,
    feature: "Empowering For Team",
    description: `We support multiple seats at once, requiring only a single payment.`,
  },
  {
    id: 5,
    icon: RiRefreshLine,
    feature: "No Limitations",
    description: `Use as many as you want, from Dribbble presentations to PowerPoint presentations.`,
  },
];

export const metadata: Metadata = {
  title: "Features Grid | UI Component Library | Jason Long",
};

export default function FeaturesGridPage() {
  return (
    <>
      <TextBanner
        eyebrow="Premium abstract images"
        heading="Easy access to top quality images"
        subheading="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
      />
      <div className="grid grid-cols-1 items-start justify-center gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-12 md:mt-16 lg:gap-y-12 lg:gap-x-8">
        {features.map(({ id, icon, feature, description }) => (
          <FeatureCard
            key={id}
            Icon={icon}
            iconAlign="col"
            feature={feature}
            description={description}
          />
        ))}
      </div>
    </>
  );
}
