import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import WhoHeader from "@/components/whoPage/whoHeader";
import WhoSectionOne from "@/components/whoPage/whoSectionOne";


export default function WhoItsFor() {
  return (
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
  )
}