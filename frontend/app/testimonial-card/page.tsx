import type { Metadata } from "next";
import profileThumbnail from "../../public/profile-thumbnail.png";
import TestimonialCard from "../_components/testimonial-card";

export const metadata: Metadata = {
  title: "Testimonial Card | UI Component Library | Jason Long",
};
export default function TestimonialCardPage() {
  return (
    <div className="flex flex-1 items-start justify-center py-[200px] px-4 bg-gradient-haze">
      <TestimonialCard
        name="Sarah Dole"
        username="@sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc={profileThumbnail}
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
