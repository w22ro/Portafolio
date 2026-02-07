import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-400/20 bg-black/80 backdrop-blur-sm overflow-hidden">
      {/* Línea de escaneo en la parte superior */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Sección de logo */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block font-mono text-lg tracking-widest cursor-pointer relative group"
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
            <p className="text-slate-500 text-xs font-mono">
              Ingeniero de Sistemas
              <br />
              Software Developer
            </p>
          </div>

          {/* Información del sistema */}
          <div className="space-y-4 md:text-right">
            <div className="font-mono text-xs text-cyan-400 tracking-wider">
              SISTEMA_INFO
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 md:justify-end">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-cyan-400"
                />
                <span className="text-slate-500 text-xs font-mono">
                  ESTADO: ACTIVO
                </span>
              </div>
              <div className="text-slate-500 text-xs font-mono">
                VERSIÓN: v2.0
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Sección inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Derechos de autor */}
          <div className="text-slate-600 text-xs font-mono">
            © {currentYear} Widmen Perales. Todos los derechos reservados.
          </div>
        </div>

        {/* Decoraciones de esquina */}
        <span className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-400/10" />
        <span className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400/10" />
      </div>

      {/* Partículas ambientales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
