import Footer from "@/components/footer/Footer";
import HowHeader from "@/components/howPage/howHeader";
import HowSectionOne from "@/components/howPage/HowSectionOne";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import Head from "next/head";

export default function HowItWorks() {
  return (

    <>
      <Head>

        {/* HTML Title */}
        <title>How BridgeQA Works – Compare Figma & Code in One Place</title>

        {/* Meta Description */}
        <meta name="description"
          content="Learn how BridgeQA overlays your design frames on live builds, letting you flag mismatches and unify feedback in one browser extension." />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="How BridgeQA Works – Compare Figma & Code in One Place" />
        <meta property="og:description"
          content="See how our Chrome extension tracks design feedback and ensures your final product matches the original vision." />
        <meta property="og:image" content="https://www.bridgeqa.com/bridgeqa-howitworks-OG.webp" />
        <meta property="og:url" content="https://www.bridgeqa.com/how-it-works" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How BridgeQA Works – Compare Figma & Code in One Place" />
        <meta name="twitter:description" content="See how our browser-based tool helps you track design vs. final build in real time." />
        <meta name="twitter:image" content="https://www.bridgeqa.com/bridgeqa-howitworks-OG.webp" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (window.location.hostname === 'bridgeqa.com' || window.location.hostname === 'www.bridgeqa.com') {
          window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
          window.amplitude.init('5a9a1de1c5239a1a61661853b6457b75', {
            autocapture: { elementInteractions: true }
          });
        }
      `,
          }}
        />

      </Head>

      <main className="overflow-hidden">
        <NavBar />

        <section className="max-w-7xl pt-20 px-8 mx-auto" id="top">
          <HowHeader />
        </section>

        <section className=" " id="smallBanner">
          <SmallBanner />
        </section>

        <section className="max-w-7xl py-24 px-8 mx-auto" id="top">
          <HowSectionOne />
        </section>

        <section id="sectionthree">
          <Footer />
        </section>
      </main>
    </>
  )
}