import type { Metadata } from "next";
import BlogCard from "../_components/blog-card";
import blogCard from "../../public/blog-card.png";

export const metadata: Metadata = {
  title: "Blog Card | UI Component Library | Jason Long",
};
export default function BlogCardPage() {
  return (
    <div className="flex flex-1 items-start justify-center py-[120px] px-4 bg-gradient-haze">
      <BlogCard
        headline="Top 5 Living Room Inspirations"
        subHeadline="Curated vibrants colors for your living, make it pop & calm in the same time."
        imageSrc={blogCard}
        imageAlt="A modern living room with a gray cloth loveseat, a round marble table, and standing plants."
      />
    </div>
  );
}
