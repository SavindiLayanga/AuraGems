import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import Collection from '../components/Collection';
import Categories from '../components/Categories';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="page-stage min-h-screen overflow-x-hidden bg-cream">
      <div className="relative">
        <Hero />
        <Features />
      </div>
      <AboutSection />
      <Collection />
      <Categories />
      <FAQ />
      <ContactSection />
      <Footer />
      </div>
    </>
  );
}
