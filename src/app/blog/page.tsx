/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogHeader from "@/components/blogPage/blogHeader";
import BlogSection from "@/components/blogPage/blogSection";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";

export const metadata = {
  title: "BridgeQA Blog – Tips, Insights, and Best Practices for Design QA & Handoff",
  description:"Explore expert articles on design QA, dev handoff, and collaboration tips. Boost your team's workflow efficiency with insights from BridgeQA.",

  openGraph: {
    title: "BridgeQA Blog – Design QA & Handoff Tips",
    description:
      "Get practical insights, tips, and strategies to improve your design-to-dev workflow and ensure pixel-perfect websites every time.",
    url: "https://www.bridgeqa.com/blog",
    siteName: "BridgeQA",
    images: [
      {
        url: "https://www.bridgeqa.com/bridgeqa-blog-OG.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BridgeQA Blog – Design QA & Handoff Tips",
    description:"Expert advice on design QA, smoother dev handoff, and enhancing team collaboration. Follow our blog for fresh insights.",
    images: ["https://www.bridgeqa.com/bridgeqa-blog-OG.webp"],
  },
};

export default function Blog(){
    return(
        <main className="overflow-hidden">
        <NavBar />
        <section className="max-w-7xl pt-20 px-2 sm:px-8 mx-auto" id="top">
          <BlogHeader />
        </section>
        <section id="smallBanner">
          <SmallBanner />
        </section>
        <section id="blogSection" className="max-w-7xl py-24 px-2 sm:px-8 mx-auto">
          <BlogSection />
        </section>
        <section id="footer">
          <Footer />
        </section>
        </main>
    )
}