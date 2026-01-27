import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PropertyServices from "../components/PropertyServices";
import FlagshipProject from "../components/FlagshipProject"; // Updated import name

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <FlagshipProject />
      <Services />
      <section id="property-services">
        <PropertyServices />
      </section>
      
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}