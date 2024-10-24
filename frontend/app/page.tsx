import HeroSection from "./_components/hero-section";
import abstractCubes2 from "../public/abstract-cubes-2.png";

const checklistItems = [
  "Minimum 5k image resolution",
  "Various formats available",
  "Retina display support",
];

export default function Home() {
  return (
    <HeroSection
      imageAlt="Abstract, floating cubes"
      imageSrc={abstractCubes2}
      heading="Premium abstract images"
      featureList={checklistItems}
    />
  );
}
