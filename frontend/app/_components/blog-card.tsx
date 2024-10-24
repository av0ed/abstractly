import { RiArrowRightLine } from "@remixicon/react";
import Badge from "../_components/badge";
import Button from "../_components/button";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  imageAlt: string;
  imageSrc: string | StaticImageData;
  headline: string;
  subHeadline: string;
}

export default function BlogCard({
  imageAlt,
  imageSrc,
  headline,
  subHeadline,
}: BlogCardProps) {
  return (
    <article className="flex flex-col border border-neutral-200 shadow shadow-neutral-200 bg-white rounded-lg w-[340px]">
      <Image
        alt={imageAlt}
        className="rounded-t-lg"
        height={0}
        src={imageSrc}
        style={{ objectFit: "cover" }}
        width={0}
      />
      <div className="px-4 py-6">
        <Badge classes="badge--md badge--success" text="Interior" />
        <p className="text-lg font-semibold text-neutral-900 mt-2">
          {headline}
        </p>
        <p className="font-medium text-neutral-600 mt-3">{subHeadline}</p>
        <Button
          Icon={RiArrowRightLine}
          iconAlign="right"
          href="/"
          ariaLabel="Read more about this blog post"
          classes="mt-6 link--lg link--primary"
          text="Read more"
        />
      </div>
    </article>
  );
}
