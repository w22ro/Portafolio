import { motion } from 'motion/react';

export default function PantallaCarga() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="font-mono text-cyan-400 text-2xl mb-4">
            <span className="text-cyan-500">&lt;</span>
            SISTEMA INICIANDO
            <span className="text-cyan-500">/&gt;</span>
          </div>
        </motion.div>

        {/* Barra de carga */}
        <div className="w-64 h-1 bg-slate-800 overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 font-mono text-cyan-500/50 text-xs"
        >
          Cargando interfaz...
        </motion.div>
      </div>
    </motion.div>
  );
}
