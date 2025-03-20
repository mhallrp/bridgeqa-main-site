import Footer from "@/components/footer/Footer";
import Header from "@/components/landing/header";
import LandingBannerSection from "@/components/landing/landingBannerSection";
import LandingSectionOne from "@/components/landing/landingSectionOne";
import LandingSectionThree from "@/components/landing/landingSectionThree";
import LandingSectionTwo from "@/components/landing/landingSectionTwo";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <section className="max-w-7xl pt-20 px-8 mx-auto" id="top">
        <Header />
      </section>
      <section className="max-w-7xl px-8 py-24 mx-auto" id="sectionone">
        <LandingSectionOne />
      </section>
      <section className="max-w-7xl px-8 py-24 mx-auto" id="sectiontwo">
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
  );
}
