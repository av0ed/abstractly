import type { Metadata } from "next";
import HeroSection from "../_components/hero-section";
import heroSimple from "../../public/hero-simple.png";

export const metadata: Metadata = {
  title: "Hero Section | Abstractly",
};
export default function HeroSectionPage() {
  return (
    <HeroSection
      imageAlt="Abstract, floating cubes"
      imageSrc={heroSimple}
      heading="Well-crafted abstract images"
      subheading="High-quality abstract images for your projects, wallpaper, and presentations."
    />
  );
}
