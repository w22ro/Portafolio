import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';

export default function SobreMi() {
  const paragraphs = [
    'Bachiller en Ingeniería de Sistemas e Informática con enfoque en desarrollo web Frontend. Además, cuento con experiencia en soporte técnico, lo que me ha permitido fortalecer mis habilidades en instalación, configuración y mantenimiento de equipos informáticos. De igual forma, asumo la implementación y actualización de programas o aplicaciones con el objetivo de garantizar el óptimo funcionamiento de los sistemas.',
    'Mi interés profesional está enfocado en crear soluciones web modernas y funcionales, aplicando buenas prácticas de programación con una visión centrada en el usuario. Me considero una persona con gran capacidad de aprendizaje, facilidad para adaptarme a nuevas tecnologías, buen desempeño en equipos de trabajo, además de mantener un rendimiento sólido en situaciones de alta presión.',
    'También cuento con experiencia en ventas y atención al cliente en el sector de telecomunicaciones, área en la que logré cumplir objetivos comerciales, fortalecer la fidelización de clientes, potenciar mis habilidades de comunicación, identificar necesidades con precisión, brindar soluciones efectivas. Mi meta es continuar desarrollando mis competencias técnicas, aportar valor en proyectos tecnológicos que integren innovación, eficiencia y compromiso con resultados.'
  ];

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="PERFIL_PROFESIONAL" title="Sobre mí" />

          <div className="space-y-8">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Línea de acento lateral */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 to-purple-400/50"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />
                
                {/* Contenedor de contenido */}
                <div className="pl-8 py-4 relative">
                  {/* Acento de esquina */}
                  <span className="absolute top-0 left-0 w-4 h-px bg-cyan-400/50" />
                  
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    {text}
                  </p>

                  {/* Línea de efecto hover */}
                  <motion.div
                    className="absolute bottom-0 left-8 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Panel de estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
