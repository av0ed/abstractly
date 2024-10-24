import type { Metadata } from "next";
import TeamCard from "../_components/team-card";
import TextBanner from "../_components/text-banner";
import ash from "../../public/ash.png";
import joe from "../../public/joe.png";
import farias from "../../public/farias.png";
import sarah from "../../public/sarah.png";

export const metadata: Metadata = {
  title: "Team | UI Component Library | Jason Long",
};
export default function TeamPage() {
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <TextBanner
        eyebrow="Team"
        heading="Meet our team"
        subheading="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
      />
      <div
        className="grid grid-cols-1 items-start justify-center
        gap-y-12 md:grid-cols-2 md:gap-y-16 md:gap-x-8 lg:grid-cols-4 mt-12
        md:mt-16"
      >
        <TeamCard
          imageSrc={joe}
          imageAlt="Headshot of Joe Jackson, Founder & CEO"
          name="Joe Jackson"
          title="Founder & CEO"
          description="Joe leads with a strategic vision for innovation and
        growth. With a passion for combining artistry with technology, he
        drives our mission to deliver cutting-edge solutions."
        />
        <TeamCard
          imageSrc={ash}
          imageAlt="Headshot of Ash Karter, Founder & CFO"
          name="Ash Karter"
          title="Founder & CFO"
          description="Ash brings financial acumen and a keen eye for detail to
        our operations. Her leadership ensures sustainable growth and
        operational excellence."
        />
        <TeamCard
          imageSrc={farias}
          imageAlt="Headshot of Joe Jackson, Founder & CEO"
          name="Farias Amed"
          title="Front End AI Engineer"
          description="Farias is at the forefront of AI-driven design,
        developing interfaces that blend intuitive usability with advanced
        functionality."
        />
        <TeamCard
          imageSrc={sarah}
          imageAlt="Headshot of Joe Jackson, Founder & CEO"
          name="Sarah Haust"
          title="Dev Ops"
          description="Sarah orchestrates our development pipelines with
        precision, ensuring seamless deployment cycles and system reliability."
        />
      </div>
    </div>
  );
}
