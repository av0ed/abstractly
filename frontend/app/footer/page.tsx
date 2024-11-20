import type { Metadata } from "next";
import Footer from "../_components/footer";

export const metadata: Metadata = {
  title: "Footer | Abstractly",
};
export default function FooterPage() {
  return (
    <div className="p-4 bg-neutral-600 bg-gradient-haze">
      <div className="flex items-center justify-center h-full">
        <Footer />
      </div>
    </div>
  );
}
