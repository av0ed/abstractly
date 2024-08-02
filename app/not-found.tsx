import Link from "next/link";
import Image from "next/image";
import Button from "./_components/button";
import abstractBackground from "../public/abstract-background.jpg";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center h-screen">
      <Image
        alt="An abstract, flowing background"
        className="fixed h-screen w-screen overflow-hidden -z-10"
        fill
        placeholder="blur"
        quality={50}
        src={abstractBackground}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col py-12 md:py-16 px-3 md:px-4 lg:p-24">
        <span className="font-semibold text-indigo-700">Not found</span>
        <h1 className="mt-2 md:mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
          We can&apos;t find the page
        </h1>
        <p className="mt-5 md:mt-6 text-lg md:text-xl text-neutral-600">
          Sorry, the page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Button
          classes="btn--lg md:btn--2xl btn--primary mt-8 md:mt-16 self-stretch md:self-start"
          href="/"
          text="Back to Home"
        />
      </div>
    </section>
  );
}
