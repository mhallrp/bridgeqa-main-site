import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import WhoHeader from "@/components/whoPage/whoHeader";
import WhoSectionOne from "@/components/whoPage/whoSectionOne";
import Head from "next/head";


export default function WhoItsFor() {
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
        <meta property="og:image" content="https://www.bridgeqa.com/images/bridgeqa-howitworks-OG.png" />
        <meta property="og:url" content="https://www.bridgeqa.com/how-it-works" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How BridgeQA Works – Compare Figma & Code in One Place" />
        <meta name="twitter:description" content="See how our browser-based tool helps you track design vs. final build in real time." />
        <meta name="twitter:image" content="https://www.bridgeqa.com/images/bridgeqa-howitworks-OG.png" />
      </Head>

      <main className="overflow-hidden">
        <NavBar />
        <section className="max-w-7xl pt-20 px-8 mx-auto" id="top">
          <WhoHeader />
        </section>

        <section className=" " id="smallBanner">
          <SmallBanner />
        </section>

        <section className="max-w-7xl py-24 px-8 mx-auto" id="top">
          <WhoSectionOne />
        </section>

        <section id="sectionthree">
          <Footer />
        </section>
      </main>
    </>
  )
}