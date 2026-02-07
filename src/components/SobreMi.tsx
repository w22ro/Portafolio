import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';

export default function SobreMi() {
  const paragraphs = [
    'Egresado de Ingeniería de Sistemas e Informática, con orientación al desarrollo web Frontend y soporte técnico. Cuento con experiencia en la instalación, configuración y mantenimiento de equipos informáticos, así como en la implementación y actualización de programas y aplicaciones, garantizando el correcto funcionamiento de los sistemas.',
    'Mi interés profesional se centra en el desarrollo de soluciones web modernas y funcionales, aplicando buenas prácticas de programación y un enfoque orientado al usuario. Me caracterizo por mi rápida capacidad de aprendizaje, adaptación a nuevas tecnologías y desempeño eficiente en entornos de trabajo colaborativos y bajo presión.',
    'Además, poseo experiencia en ventas y atención al cliente en el sector de telecomunicaciones, donde destaqué en el cumplimiento de indicadores y la fidelización de clientes, desarrollando habilidades de comunicación, análisis de necesidades y resolución efectiva de problemas. Busco seguir fortaleciendo mis competencias técnicas y aportar valor en proyectos tecnológicos que integren innovación y eficiencia.'
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
