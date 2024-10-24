import Image, { StaticImageData } from "next/image";

interface TeamCardProps {
  classes?: string;
  description: string;
  imageAlt: string;
  imageSrc: string | StaticImageData;
  name: string;
  title: string;
}

export default function TeamCard({
  classes,
  description,
  imageAlt,
  imageSrc,
  name,
  title,
}: TeamCardProps) {
  return (
    <div
      className={`flex flex-col items-start w-full max-w-[340px] ${classes}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        height={0}
        width={0}
        style={{ objectFit: "cover" }}
      />
      <span className="mt-6 text-neutral-900 text-xl font-semibold">
        {name}
      </span>
      <span className="mt-1 text-indigo-700 text-lg font-medium">{title}</span>
      <p className="mt-4 text-neutral-600">{description}</p>
    </div>
  );
}
