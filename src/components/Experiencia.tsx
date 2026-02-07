import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';
import EfectoEscaneo from './common/EfectoEscaneo';

export default function Experiencia() {
  const timeline = [
    {
      title: 'Programador',
      organization: 'Ion Code',
      description: 'Desarrollo y apoyo en la implementación de funcionalidades de software, resolución de incidencias básicas y colaboración con el equipo de desarrollo.',
      type: 'work'
    },
    {
      title: 'Ingeniería de Sistemas e Informática (Egresado)',
      organization: 'Universidad Tecnológica del Perú - UTP',
      description: 'Formación académica en Ingeniería de Sistemas e Informática, con enfoque en el desarrollo de competencias tecnológicas y analíticas',
      type: 'education'
    },
    {
      title: 'Proyectos Académicos y Personales de Desarrollo Web',
      organization: 'Universidad Tecnológica del Perú - UTP',
      description: 'Desarrollo de aplicaciones web básicas utilizando HTML, CSS y JavaScript, aplicando diseño responsive y principios de usabilidad.',
      type: 'education'
    },
    {
      title: 'Soporte Técnico',
      organization: 'Cyber Perchi',
      description: 'Instalación, configuración y mantenimiento de equipos informáticos, sistemas operativos y redes LAN básicas, brindando soporte a usuarios.',
      type: 'work'
    },
    {
      title: 'Asesor de Ventas y Atención al Cliente',
      organization: 'Konecta',
      description: 'Atención al cliente y gestión de ventas, fortaleciendo habilidades de comunicación y orientación al usuario.',
      type: 'work'
    },
  ];

  return (
    <section
      id="experiencia"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Cuadrícula de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b203_1px,transparent_1px),linear-gradient(to_bottom,#0891b203_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="HISTORIAL_PROFESIONAL" title="Trayectoria" />

          <div className="relative">
            {/* Línea vertical de tiempo */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px">
              <motion.div
                className="w-full bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400/30"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-8 sm:pl-24"
                >
                  {/* Nodo de línea de tiempo */}
                  <motion.div
                    className="absolute left-0 sm:left-8 top-0 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <div className="w-4 h-4 border-2 border-cyan-400 bg-black relative">
                      <motion.div
                        className="absolute inset-0 bg-cyan-400"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Tarjeta de contenido */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative border border-cyan-400/20 bg-black/60 backdrop-blur-sm overflow-hidden group"
                  >
                    {/* Corchetes de esquina */}
                    <span className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />

                    <div className="p-6 sm:p-8">
                      {/* Encabezado */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl sm:text-2xl mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 font-mono text-sm">
                            {item.organization}
                          </p>
                        </div>

                        {/* Insignia de tipo */}
                        <div className={`px-4 py-2 border ${
                          item.type === 'work' 
                            ? 'border-cyan-400/30 bg-cyan-400/5 text-cyan-400' 
                            : 'border-purple-400/30 bg-purple-400/5 text-purple-400'
                        } font-mono text-[10px] tracking-wider h-fit`}>
                          {item.type === 'work' ? 'EXPERIENCIA' : 'EDUCACIÓN'}
                        </div>
                      </div>

                      {/* Divisor */}
                      <motion.div
                        className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      />

                      {/* Descripción */}
                      <p className="text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Efecto de escaneo */}
                    <EfectoEscaneo direction="horizontal" duration={4} delay={index} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
