// app/who-its-for/page.tsx

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import WhoHeader from "@/components/whoPage/whoHeader";
import WhoSectionOne from "@/components/whoPage/whoSectionOne";
import Script from "next/script";

// ✅ Page metadata (SEO + social cards)
export const metadata = {
  title: "Who BridgeQA Is For – Designers, Devs, and PMs",
  description:
    "BridgeQA streamlines design QA for designers, developers, and product managers, ensuring your builds stay on track and aligned with the original design.",
  openGraph: {
    title: "Who BridgeQA Is For – Designers, Devs, and PMs",
    description:
      "Whether you’re a designer, developer, or PM, BridgeQA helps unify feedback and track changes, so everyone’s on the same page.",
    url: "https://www.bridgeqa.com/who-its-for",
    siteName: "BridgeQA",
    images: [
      {
        url: "https://www.bridgeqa.com/bridgeqa-whofor-OG.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who BridgeQA Is For – Designers, Devs, and PMs",
    description:
      "Designers, developers, and product managers can align on final builds, no more scattered feedback. See how BridgeQA simplifies QA collaboration.",
    images: ["https://www.bridgeqa.com/bridgeqa-whofor-OG.webp"],
  },
};

export default function WhoItsFor() {
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
          <WhoHeader />
        </section>

        <section id="smallBanner">
          <SmallBanner />
        </section>

        <section className="max-w-7xl py-24 px-8 mx-auto">
          <WhoSectionOne />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
