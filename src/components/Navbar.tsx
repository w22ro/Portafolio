import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'foto', label: 'PERFIL' },
    { id: 'sobre-mi', label: 'SOBRE MÍ' },
    { id: 'habilidades', label: 'HABILIDADES' },
    { id: 'proyectos', label: 'PROYECTOS' },
    { id: 'experiencia', label: 'EXPERIENCIA' },
    { id: 'hobbies', label: 'HOBBIES' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-mono text-sm tracking-widest cursor-pointer relative group"
            onClick={() => scrollToSection('inicio')}
          >
            <span className="text-cyan-400">[</span>
            <span className="text-white">WP_SISTEMA</span>
            <span className="text-cyan-400">]</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative px-4 py-2 text-xs font-mono tracking-wider group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-400 group-hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                </span>
                
                {activeSection === item.id && (
                  <>
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 border border-cyan-400/30 bg-cyan-400/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400"
                      layoutId="activeUnderline"
                    />
                  </>
                )}

                {/* Decoraciones de esquina */}
                <span className="absolute top-0 left-0 w-1 h-1 border-l border-t border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300" />
                <span className="absolute top-0 right-0 w-1 h-1 border-r border-t border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Indicador de estado del sistema */}
          <div className="hidden lg:flex items-center space-x-2 font-mono text-xs text-cyan-400/60">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
            <span>SISTEMA: ACTIVO</span>
          </div>
        </div>
      </div>

      {/* Efecto de línea de escaneo */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </motion.nav>
  );
}
