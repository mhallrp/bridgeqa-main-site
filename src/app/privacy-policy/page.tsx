import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import PrivacyPolicy from "@/components/privacyPage/privacyPolicy";

export default function WhoItsFor() {
    return (
        <main className="overflow-hidden">
            <NavBar />
            <PrivacyPolicy />
            <section id="footer">
                <Footer />
            </section>
        </main>
    );
}