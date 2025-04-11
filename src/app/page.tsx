import Head from 'next/head';
import Footer from "@/components/footer/Footer";
import Header from "@/components/landing/Header";
import LandingBannerSection from "@/components/landing/LandingBannerSection";
import LandingSectionOne from "@/components/landing/LandingSectionOne";
import LandingSectionThree from "@/components/landing/LandingSectionThree";
import LandingSectionTwo from "@/components/landing/LandingSectionTwo";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>BridgeQA – Keep Your Final Product True to Its Design</title>
        <meta
          name="description"
          content="BridgeQA overlays Figma designs on live websites, unifying feedback and ensuring your product truly matches the original vision."
        />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="BridgeQA – Keep Your Final Product True to Its Design" />
        <meta
          property="og:description"
          content="Compare Figma vs. live builds right in your browser. No more scattered feedback or last-minute mismatches."
        />
        <meta property="og:image" content="https://www.bridgeqa.com/bridgeqa-home-OG.jpg" />
        <meta property="og:url" content="https://www.bridgeqa.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BridgeQA – Keep Your Final Product True to Its Design" />
        <meta
          name="twitter:description"
          content="Compare Figma vs. live builds right in your browser. No more scattered feedback or mismatches."
        />
        <meta name="twitter:image" content="https://www.bridgeqa.com/bridgeqa-home-OG.jpg" />

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
        <section id="sectionthree">
          <Footer />
        </section>
      </main>
    </>
  );
}
