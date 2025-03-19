import Header from "@/components/Landing/Header";
import LandingSectionOne from "@/components/Landing/LandingSectionOne";
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
    </main>
  );
}
