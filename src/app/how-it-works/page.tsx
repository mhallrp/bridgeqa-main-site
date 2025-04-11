// app/how-it-works/page.tsx

import Footer from "@/components/footer/Footer";
import HowHeader from "@/components/howPage/howHeader";
import HowSectionOne from "@/components/howPage/HowSectionOne";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import Script from "next/script";

// ✅ SEO and social meta info
export const metadata = {
  title: "How BridgeQA Works – Compare Figma & Code in One Place",
  description:
    "Learn how BridgeQA overlays your design frames on live builds, letting you flag mismatches and unify feedback in one browser extension.",
  openGraph: {
    title: "How BridgeQA Works – Compare Figma & Code in One Place",
    description:
      "See how our Chrome extension tracks design feedback and ensures your final product matches the original vision.",
    url: "https://www.bridgeqa.com/how-it-works",
    siteName: "BridgeQA",
    images: [
      {
        url: "https://www.bridgeqa.com/bridgeqa-howitworks-OG.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How BridgeQA Works – Compare Figma & Code in One Place",
    description:
      "See how our browser-based tool helps you track design vs. final build in real time.",
    images: ["https://www.bridgeqa.com/bridgeqa-howitworks-OG.webp"],
  },
};

export default function HowItWorks() {
  return (
    <>
      {/* ✅ Amplitude tracking script */}
      <Script id="amplitude-init" strategy="afterInteractive">
        {`
          if (window.location.hostname === 'bridgeqa.com' || window.location.hostname === 'www.bridgeqa.com') {
            window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
            window.amplitude.init('5a9a1de1c5239a1a61661853b6457b75', {
              autocapture: { elementInteractions: true }
            });
          }
        `}
      </Script>

      <main className="overflow-hidden">
        <NavBar />

        <section className="max-w-7xl pt-20 px-8 mx-auto" id="top">
          <HowHeader />
        </section>

        <section id="smallBanner">
          <SmallBanner />
        </section>

        <section className="max-w-7xl py-24 px-8 mx-auto">
          <HowSectionOne />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}