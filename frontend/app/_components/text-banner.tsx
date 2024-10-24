interface TextBannerProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
}

export default function TextBanner({
  eyebrow,
  heading,
  subheading,
}: TextBannerProps) {
  return (
    <div className="flex flex-col items-center gap-y-5 md:px-10 lg:px-40">
      <div className="flex flex-col items-center gap-y-3 md:px-10">
        <span className="text-base font-semibold text-indigo-700">
          {eyebrow}
        </span>
        <h1 className="text-center text-3xl md:text-5xl font-semibold text-neutral-900">
          {heading}
        </h1>
      </div>
      <p className="text-center text-lg md:text-xl text-neutral-600">
        {subheading}
      </p>
    </div>
  );
}
