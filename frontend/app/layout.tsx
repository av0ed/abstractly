import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Noto_Sans } from "next/font/google";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import "./globals.css";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Welcome | Abstractly",
  description:
    "Abstractly - mock marketing website and user interface component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${notoSans.className} flex flex-col h-full`}>
        <Navbar />
        <main
          role="main"
          className="flex flex-col flex-nowrap flex-1 p-4 bg-gradient-haze"
        >
          <div className="h-full w-full bg-white rounded-lg">
            <div className="flex flex-col flex-nowrap justify-start items-center  mx-auto py-12 px-4 md:py-16 lg:py-24 lg:px-28 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
              {children}
              <SpeedInsights />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
