import BlogHeader from "@/components/blogPage/blogHeader";
import BlogSection from "@/components/blogPage/blogSection";
// import BlogTest from "@/components/blogPage/blogTest";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";

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

        <section id="blogSection">
          <BlogSection />
          {/* <BlogTest /> */}
        </section>

        <section id="footer">
          <Footer />
        </section>

        </main>
    )
}