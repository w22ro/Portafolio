import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Fondo de cuadrícula animada */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b220_1px,transparent_1px),linear-gradient(to_bottom,#0891b220_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#0891b210_1px,transparent_1px),linear-gradient(to_bottom,#0891b210_1px,transparent_1px)] bg-[size:6rem_6rem]"
        />
      </div>

      {/* Marcos de esquina - estilo HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-20 left-4 sm:left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-20 right-4 sm:right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-400/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-20 left-4 sm:left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-20 right-4 sm:right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Texto de inicialización de sistema */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-[0.3em]">
              [ SISTEMA INICIALIZADO ]
            </span>
          </motion.div>

          {/* Nombre con efecto glitch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-2">
              <span className="block text-white">Widmen Ronaldo</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                Perales Chiscul
              </span>
            </h1>
          </motion.div>

          {/* Título con efecto de escaneo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative inline-block mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-wider text-cyan-400">
              &gt; INGENIERO_DE_SISTEMAS
            </h2>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Eslogan profesional */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Egresado de Ingeniería de Sistemas e Informática | Desarrollo Web Frontend | Soporte Técnico y soluciones digitales
          </motion.p>

          {/* Botón CTA con efecto hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 font-mono text-sm tracking-wider overflow-hidden group"
            >
              <span className="relative z-10 text-cyan-400 group-hover:text-black transition-colors duration-300">
                [ ACCEDER_SISTEMA ]
              </span>
              <motion.div
                className="absolute inset-0 border border-cyan-400/50"
                whileHover={{ borderColor: 'rgba(34, 211, 238, 0.8)' }}
              />
              <motion.div
                className="absolute inset-0 bg-cyan-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Acentos de esquina */}
              <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400" />
              <span className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400" />
            </motion.button>
          </motion.div>

          {/* Información del sistema */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 font-mono text-xs text-cyan-400/40 space-y-1"
          >
            <div>PORTAFOLIO v2.0</div>
            <div>ESTADO: ACTIVO</div>
          </motion.div>
        </div>
      </div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Línea de escaneo */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}
