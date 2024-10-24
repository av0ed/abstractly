import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  imageAlt: string;
  imageSrc: string | StaticImageData;
  name: string;
  testimonial: string;
  username: string;
}

export default function TestimonialCard({
  name,
  username,
  testimonial,
  imageSrc,
  imageAlt,
}: TestimonialCardProps) {
  return (
    <figure className="w-[340px] p-6 border-l border-r border-b border-neutral-200 bg-white flex flex-col rounded-lg shadow shadow-neutral-200 gap-y-4">
      <div className="flex flex-row gap-x-4">
        <Image
          alt={imageAlt}
          className={`rounded-full h-12 w-12`}
          height={0}
          src={imageSrc}
          width={0}
        />
        <div className="flex flex-col">
          <p className="text-neutral-900 text-lg font-semibold">{name}</p>
          <p className="text-neutral-600 text-sm">{username}</p>
        </div>
      </div>
      <figcaption className="text-neutral-600 text-base line-clamp-6">
        {testimonial}
      </figcaption>
    </figure>
  );
}
