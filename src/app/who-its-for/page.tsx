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
        <title>Who BridgeQA Is For – Designers, Devs, and PMs</title>

        {/* Meta Description */}
        <meta name="description"
          content="BridgeQA streamlines design QA for designers, developers, and product managers, ensuring your builds stay on track and aligned with the original design." />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Who BridgeQA Is For – Designers, Devs, and PMs" />
        <meta property="og:description" content="Whether you’re a designer, developer, or PM, BridgeQA helps unify feedback and track changes, so everyone’s on the same page." />
        <meta property="og:image" content="https://www.bridgeqa.com/images/bridgeqa-whofor-OG.png" />
        <meta property="og:url" content="https://www.bridgeqa.com/who-its-for" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Who BridgeQA Is For – Designers, Devs, and PMs" />
        <meta name="twitter:description"
          content="Designers, developers, and product managers can align on final builds, no more scattered feedback. See how BridgeQA simplifies QA collaboration." />
        <meta name="twitter:image" content="https://www.bridgeqa.com/images/bridgeqa-whofor-OG.png" />

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