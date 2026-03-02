import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';

export default function Contacto() {
  const contactLinks = [
    {
      label: 'GITHUB',
      value: 'github.com/WidmenPerales',
      href: 'https://github.com/w22ro',
      description: 'Repositorios y proyectos open-source'
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/WidmenPerales',
      href: 'https://www.linkedin.com/in/ronaldo-perales-chiscul-249451370',
      description: 'Red profesional y experiencia'
    },
    {
      label: 'EMAIL',
      value: 'wronald2202@hotmail.com',
      href: 'mailto:wronald2202@hotmail.com',
      description: 'Contacto directo'
    },
   
  ];

  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Cuadrícula de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b208_1px,transparent_1px),linear-gradient(to_bottom,#0891b208_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="CANALES_DE_COMUNICACIÓN" title="Contacto" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg mb-16 max-w-2xl"
          >
            Abierto a oportunidades profesionales, prácticas y proyectos tecnológicos.
          </motion.p>

          {/* Cuadrícula de enlaces de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="relative group"
              >
                {/* Contenedor de tarjeta */}
                <div className="relative border border-cyan-400/20 bg-black/60 backdrop-blur-sm overflow-hidden">
                  {/* Corchetes de esquina */}
                  <span className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 group-hover:w-6 group-hover:h-6 transition-all duration-300" />
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 group-hover:w-6 group-hover:h-6 transition-all duration-300" />

                  <div className="p-6 sm:p-8 relative z-10">
                    {/* Etiqueta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-cyan-400 tracking-widest">
                        {link.label}
                      </span>
                      <motion.span
                        className="text-cyan-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>

                    {/* Divisor */}
                    <motion.div
                      className="h-px bg-gradient-to-r from-cyan-400 to-transparent mb-3"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    />

                    {/* Valor */}
                    <div className="text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                      {link.value}
                    </div>

                    {/* Descripción */}
                    <div className="text-slate-500 text-xs font-mono">
                      {link.description}
                    </div>
                  </div>

                  {/* Efecto hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />

                  {/* Línea de escaneo */}
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Brillo externo */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.a>
            ))}
          </div>

          {/* Panel de fragmento de código */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative border border-cyan-400/20 bg-black/80 backdrop-blur-sm overflow-hidden"
          >
            {/* Barra de encabezado */}
            <div className="border-b border-cyan-400/20 px-6 py-3 flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-xs text-cyan-400/60">contact_system.js</span>
            </div>

            {/* Contenido de código */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="text-slate-500">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">initializeContact</span> ={' '}
                <span className="text-purple-400">async</span> () =&gt; {'{'}
              </div>
              <div className="text-slate-500 pl-4">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-white">engineer</span> = {'{'}
              </div>
              <div className="text-slate-500 pl-8">
                name: <span className="text-green-400">"Widmen Ronaldo Perales Chiscul"</span>,
              </div>
              <div className="text-slate-500 pl-8">
                role: <span className="text-green-400">"Ingeniero de Sistemas"</span>,
              </div>
              <div className="text-slate-500 pl-8">
                status: <span className="text-green-400">"disponible"</span>,
              </div>
              <div className="text-slate-500 pl-4">{'};'}</div>
              <div className="text-slate-500 pl-4 mt-2">
                <span className="text-purple-400">return</span>{' '}
                <span className="text-cyan-400">await</span>{' '}
                <span className="text-white">engineer</span>.<span className="text-cyan-400">connect</span>();
              </div>
              <div className="text-slate-500">{'};'}</div>
              <div className="text-slate-500 mt-4">
                <span className="text-slate-600">// Esperando tu mensaje...</span>
              </div>
            </div>

            {/* Efecto de escaneo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Indicador de estado */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center space-x-3"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-cyan-400"
            />
            <span className="font-mono text-xs text-cyan-400/60 tracking-wider">
              ESTADO: ACTIVO | DISPONIBLE PARA COLABORAR
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
