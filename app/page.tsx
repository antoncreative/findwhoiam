import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import WhoIsItFor from "@/components/WhoIsItFor";
import Booking from "@/components/Booking";
import PayWhatYouWant from "@/components/PayWhatYouWant";
import SupportUs from "@/components/SupportUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <WhoIsItFor />
      <Booking />
      <PayWhatYouWant />
      <SupportUs />
      <Footer />
    </main>
  );
}
