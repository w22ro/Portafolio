import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';
import EfectoEscaneo from './common/EfectoEscaneo';

export default function Proyectos() {
  const projects = [
    {
      name: 'Sistema de Gestión de Citas Dentales',
      description: 'Plataforma para agendar y gestionar citas odontológicas, control de servicios, pacientes y pagos con historial detallado. Incluye autenticación y roles de usuario.',
      technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Spring Security', 'Bootstrap'],
      link: 'http://136.248.96.159:8080/usuario/login',
      status: 'Activo',
    },
    {
      name: 'Lista de Tareas ',
      description: 'Aplicación web sencilla para la gestión de tareas. Permite crear, marcar como completadas y eliminar tareas, utilizando LocalStorage para mantener la información guardada en el navegador.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://w22ro.github.io/Lista-de-Tarea/',
      status: 'Completado',
    },
    {
      name: 'Piedra, Papel o Tijera',
      description: 'Juego web interactivo donde el usuario compite contra la computadora. Incluye lógica de juego, marcador de resultados y una interfaz simple y responsiva.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://w22ro.github.io/Piedra-Papel-Tijera/',
      status: 'Completado',
    },
  ];

  return (
    <section
      id="proyectos"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="PORTAFOLIO_DE_PROYECTOS" title="Proyectos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Contenedor de tarjeta */}
                <div className="relative h-full border border-cyan-400/20 bg-black/60 backdrop-blur-sm overflow-hidden">
                  {/* Decoración de borde superior */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
                  
                  {/* Corchetes de esquina */}
                  <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
                  <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50 group-hover:w-8 group-hover:h-8 transition-all duration-300" />

                  <div className="p-6 sm:p-8 relative z-10">
                    {/* Encabezado */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg sm:text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 flex-1">
                        {project.name}
                      </h4>
                      <span className="font-mono text-[10px] text-cyan-400/60 ml-4">
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                    </div>

                    {/* Insignia de estado */}
                    <div className="mb-4">
                      <span className="inline-flex items-center space-x-2 px-3 py-1 border border-cyan-400/30 bg-cyan-400/5 font-mono text-xs text-cyan-400">
                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                        />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    {/* Descripción */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <div className="font-mono text-[10px] text-cyan-400/60 mb-3 tracking-wider">
                        TECNOLOGÍAS:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1 border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-mono"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enlace */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-300 group/link"
                    >
                      <span>ACCEDER_PROYECTO</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Efecto de escaneo */}
                  <EfectoEscaneo direction="horizontal" duration={3} delay={index * 0.7} />
                </div>

                {/* Efecto de brillo hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
