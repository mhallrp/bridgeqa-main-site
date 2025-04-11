// app/page.tsx

import Footer from "@/components/footer/Footer";
import Header from "@/components/landing/Header";
import LandingBannerSection from "@/components/landing/LandingBannerSection";
import LandingSectionOne from "@/components/landing/LandingSectionOne";
import LandingSectionThree from "@/components/landing/LandingSectionThree";
import LandingSectionTwo from "@/components/landing/LandingSectionTwo";
import NavBar from "@/components/navBar/NavBar";
import Script from "next/script";

// ✅ Metadata for SEO and social sharing
export const metadata = {
  title: "BridgeQA – Keep Your Final Product True to Its Design",
  description:
    "BridgeQA overlays Figma designs on live websites, unifying feedback and ensuring your product truly matches the original vision.",
  openGraph: {
    title: "BridgeQA – Keep Your Final Product True to Its Design",
    description:
      "Compare Figma vs. live builds right in your browser. No more scattered feedback or last-minute mismatches.",
    url: "https://www.bridgeqa.com",
    siteName: "BridgeQA",
    images: [
      {
        url: "https://www.bridgeqa.com/bridgeqa-home-OG.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgeQA – Keep Your Final Product True to Its Design",
    description:
      "Compare Figma vs. live builds right in your browser. No more scattered feedback or mismatches.",
    images: ["https://www.bridgeqa.com/bridgeqa-home-OG.webp"],
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ 1. Load the Amplitude SDK from CDN */}
      <Script
        src="https://cdn.amplitude.com/libs/analytics-browser-1.0.0-min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Amplitude script loaded");
        }}
      />

      {/* ✅ 2. Initialize after load */}
      <Script id="amplitude-init" strategy="afterInteractive">
        {`
          if (window.amplitude && (window.location.hostname === 'bridgeqa.com' || window.location.hostname === 'www.bridgeqa.com')) {
            const plugin = window.amplitude.sessionReplay?.plugin?.({ sampleRate: 1 });
            if (plugin) {
              window.amplitude.add(plugin);
            }
            window.amplitude.init('5a9a1de1c5239a1a61661853b6457b75', {
              defaultTracking: {
                sessions: true,
                pageViews: true,
                formInteractions: true,
              }
            });
          }
        `}
      </Script>

      <main className="overflow-hidden">
        <NavBar />

        <section className="max-w-7xl pt-20 px-8 mx-auto" id="top">
          <Header />
        </section>

        <section className="max-w-7xl px-8 pb-24 pt-48 mx-auto" id="sectionone">
          <LandingSectionOne />
        </section>

        <section className="max-w-7xl px-8 pt-24 pb-48 mx-auto" id="sectiontwo">
          <LandingSectionTwo />
        </section>

        <section className="w-full" id="sectionbanner">
          <LandingBannerSection />
        </section>

        <section className="max-w-7xl px-8 py-24 mx-auto" id="sectionthree">
          <LandingSectionThree />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
