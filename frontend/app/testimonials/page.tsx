import type { Metadata } from "next";
import TextBanner from "../_components/text-banner";
import TestimonialCard from "../_components/testimonial-card";

export const metadata: Metadata = {
  title: "Testimonials | Marketing Site",
};

const testimonials = [
  {
    key: 0,
    imageSrc: "/sarah-dole-thumbnail.png",
    imageAlt: "Headshot of Sarah Dole",
    name: "Sarah Dole",
    testimonial: `I've been searching for high-quality abstract images for my design
    projects, and I'm thrilled to have found this platform. The variety and
    depth of creativity are astounding!`,
    username: "@sarahdole",
  },
  {
    key: 1,
    imageSrc: "/john-appleseed-thumbnail.png",
    imageAlt: "Headshot of John Appleseed",
    name: "John Appleseed",
    testimonial: `As an artist, finding inspiration is crucial. This platform
    has become my go-to source for unique abstract images that ignite my
        creativity like never before.`,
    username: "@johnaseed",
  },
  {
    key: 2,
    imageSrc: "/jean-gray-thumbnail.png",
    imageAlt: "Headshot of Jean Gray",
    name: "Jean Gray",
    testimonial: `I never thought I'd find such stunning abstract images for
        free! This platform has exceeded my expectations in every way.`,
    username: "@jeniic",
  },
  {
    key: 3,
    imageSrc: "/jake-johnson-thumbnail.png",
    imageAlt: "Headshot of Jake Johnson",
    name: "Jake Johnson",
    testimonial: `From corporate presentations to personal projects, the
    abstract images on this platform have added a touch of elegance and
    sophistication to everything I create.`,
    username: "@jakejohnshon",
  },
  {
    key: 4,
    imageSrc: "/igor-stravinsky-thumbnail.png",
    imageAlt: "Headshot of Igor Stravinsky",
    name: "Igor Stravinsky",
    testimonial: `The subscription plans are worth every penny. Having
    unlimited access to premium abstract images has transformed my design
    workflow and elevated the quality of my work`,
    username: "@igorstrav",
  },
  {
    key: 5,
    imageSrc: "/declan-rice-thumbnail.png",
    imageAlt: "Headshot of Declan Rice",
    name: "Declan Rice",
    testimonial: `I'm amazed by the attention to detail in every image on this
    platform. It's clear that a lot of thought and creativity goes into
    curating the collection.`,
    username: "@drice",
  },
  {
    key: 6,
    imageSrc: "/marcus-thompson-thumbnail.png",
    imageAlt: "Headshot of Marcus Thompson",
    name: "Marcus Thompson",
    testimonial: `Using abstract images from this platform has helped me convey
    complex concepts in a visually engaging way. My clients are always
    impressed!`,
    username: "@mthompson",
  },
  {
    key: 7,
    imageSrc: "/oliver-neverloved-thumbnail.png",
    imageAlt: "Headshot of Oliver Neverloved",
    name: "Oliver Neverloved",
    testimonial: `I appreciate how user-friendly the platform is. Browsing,
    downloading, and managing my image library couldn't be easier.`,
    username: "@olivernever",
  },
  {
    key: 8,
    imageSrc: "/mark-dennis-thumbnail.png",
    imageAlt: "Headshot of Mark Dennis",
    name: "Mark Dennis",
    testimonial: `The customer support team went above and beyond to help me
    with a subscription issue. Their dedication to customer satisfaction is
    truly commendable`,
    username: "@marked",
  },
];

export default function Testimonials() {
  return (
    <div>
      <TextBanner
        eyebrow="Testimonials"
        heading="Countless users, countless smiles"
        subheading="Explore our community's journey and discover why satisfaction defines us."
      />
      <div className="grid gap-6 justify-items-center items-center md:gap-8 mt-12 md:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ ...testimonials }) => (
          <TestimonialCard
            key={testimonials.key}
            imageAlt={testimonials.imageAlt}
            imageSrc={testimonials.imageSrc}
            name={testimonials.name}
            testimonial={testimonials.testimonial}
            username={testimonials.username}
          />
        ))}
      </div>
    </div>
  );
}
