import { motion } from 'motion/react';
import perfil from '../assets/Perfil.png';

export default function SeccionFoto() {
  return (
    <section
      id="foto"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Acento de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Encabezado de seccion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-cyan-400 text-xs tracking-[0.3em]">
              [ IDENTIFICACION_DE_USUARIO ]
            </span>
          </motion.div>
          
          {/* Contenedor de foto con marco HUD */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Corchetes de esquina */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 border-r-2 border-t-2 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Foto */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden">
                <div className="absolute inset-0 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-500" />
                <img
                  src={perfil}
                  alt="Widmen Ronaldo Perales Chiscul"
                  className="w-full h-full object-cover"
                />
                
                {/* Superposición de escaneo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/20 to-cyan-400/0"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Líneas de datos */}
              <motion.div
                className="absolute top-1/2 -left-20 w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.7 }}
              />
              <motion.div
                className="absolute top-1/2 -right-20 w-16 h-px bg-gradient-to-l from-transparent to-cyan-400/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.7 }}
              />
            </motion.div>
          </div>

          {/* Panel de información */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Nombre */}
            <div className="relative inline-block">
              <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight">
                Widmen Ronaldo Perales Chiscul
              </h3>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>

            {/* Rol */}
            <p className="text-cyan-400 font-mono tracking-wider text-lg">
              &gt; INGENIERO_DE_SISTEMAS
            </p>

            {/* Insignia de estado */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center space-x-3 px-6 py-3 border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm"
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
              <span className="font-mono text-cyan-400 text-xs tracking-wider">
                ESTADO: DISPONIBLE_PARA_PROYECTOS
              </span>
            </motion.div>

            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-mono text-xs text-cyan-400/40 space-y-1 mt-8"
            >
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
