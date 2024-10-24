import type { Metadata } from "next";
import Image from "next/image";
import TextBanner from "../_components/text-banner";

const statistics = [
  {
    id: 0,
    amount: "25,664,890",
    description: "Downloads",
  },
  {
    id: 1,
    amount: "17,219",
    description: "Users",
  },
  {
    id: 2,
    amount: "190,654,321",
    description: "Images in library",
  },
];

export const metadata: Metadata = {
  title: "Statistics  | UI Component Library | Jason Long",
};

export default function StatisticsPage() {
  return (
    <div className="h-full flex flex-col justify-start items-center gap-y-12 md:gap-y-16">
      <TextBanner
        eyebrow="Statistics"
        heading="More than premium abstract imagery"
        subheading="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
      />
      <div className="flex flex-col self-stretch lg:flex-row lg:gap-x-8 gap-y-12 md:gap-y-16">
        <Image
          alt="milk-white, floating cubes"
          className="w-full h-auto bg-no-repeat lg:w-1/2"
          src="/stats.png"
          height={0}
          width={0}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="lg:w-1/2 flex flex-col gap-y-6 md:gap-y-8 items-start justify-center">
          <span className="text-lg text-neutral-600">
            Our mission in numbers:
          </span>
          {statistics.map(({ id, amount, description }) => (
            <div
              key={id}
              className="flex flex-col self-stretch rounded-lg py-6 gap-y-4 border border-neutral-200 shadow items-center justify-center"
            >
              <span className="text-indigo-700 font-bold text-4xl md:text-5xl">
                {amount}
              </span>
              <span className="text-xl text-neutral-600">{description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
