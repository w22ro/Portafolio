import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionFoto from './components/SeccionFoto';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import Pasatiempos from './components/Pasatiempos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import PantallaCarga from './components/PantallaCarga';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'foto', 'sobre-mi', 'habilidades', 'proyectos', 'experiencia', 'hobbies', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <PantallaCarga />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <SeccionFoto />
          <SobreMi />
          <Habilidades />
          <Proyectos />
          <Experiencia />
          <Pasatiempos />
          <Contacto />
        </main>

        <Footer />
      </div>
    </div>
  );
}
