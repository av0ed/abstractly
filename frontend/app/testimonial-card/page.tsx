import type { Metadata } from "next";
import TestimonialCard from "../_components/testimonial-card";

export const metadata: Metadata = {
  title: "Testimonial Card | Abstractly",
};
export default function TestimonialCardPage() {
  return (
    <div className="max-w-[384px]">
      <TestimonialCard
        name="Sarah Dole"
        username="@sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc="/sarah-dole-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
