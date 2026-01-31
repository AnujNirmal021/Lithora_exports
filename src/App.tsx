import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Equipment from './components/Equipment';
import GlobalTrade from './components/GlobalTrade';
import B2B from './components/B2B';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Products />
        <Equipment />
        <GlobalTrade />
        <B2B />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
