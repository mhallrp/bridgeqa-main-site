import Footer from "@/components/footer/Footer";
import HowHeader from "@/components/howPage/howHeader";
import HowSectionOne from "@/components/howPage/HowSectionOne";
import NavBar from "@/components/navBar/navBar";
import SmallBanner from "@/components/smallBanner/smallBanner";

export default function HowItWorks() {
    return (
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
    )
}