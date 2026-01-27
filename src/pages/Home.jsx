import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
{/*import FeaturedProperties from "../components/FeaturedProperties"; */}
import PropertyServices from "../components/PropertyServices";
import OurFlagship from "../components/OurFlagship";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <FeaturedProperties /> */}
      <section id="property-services">
        <PropertyServices />
      </section>
      
      {/* Add OurFlagship Component Here */}
      <section id="flagship-project">
        <OurFlagship />
      </section>
      
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}