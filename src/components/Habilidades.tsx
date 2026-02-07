import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';
import EfectoEscaneo from './common/EfectoEscaneo';

export default function Habilidades() {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: ['JavaScript', 'Python', 'Java'],
      color: 'cyan'
    },
    {
      title: 'Frameworks & Librerías',
      skills: ['React', 'Node.js', 'Django', 'Spring Boot', 'Vue.js'],
      color: 'blue'
    },
    {
      title: 'Bases de Datos',
      skills: ['MySQL', 'MongoDB'],
      color: 'purple'
    },
    {
      title: 'Herramientas & Tecnologías',
      skills: ['Git','Power BI','Linux'],
      color: 'cyan'
    },
  ];

  return (
    <section
      id="habilidades"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Superposición de cuadrícula */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b205_1px,transparent_1px),linear-gradient(to_bottom,#0891b205_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="COMPETENCIAS_TÉCNICAS" title="Habilidades" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="relative group"
              >
                {/* Contenedor de panel */}
                <div className="relative border border-cyan-400/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                  {/* Decoraciones de esquina */}
                  <motion.span
                    className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.15 + 0.2 }}
                  />
                  <motion.span
                    className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.15 + 0.3 }}
                  />

                  {/* Contenido */}
                  <div className="p-6 sm:p-8">
                    {/* Título de categoría */}
                    <div className="mb-6 relative">
                      <h4 className="text-lg sm:text-xl font-mono text-cyan-400 mb-2">
                        &gt; {category.title.toUpperCase()}
                      </h4>
                      <motion.div
                        className="h-px bg-gradient-to-r from-cyan-400 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.15 + 0.4 }}
                      />
                    </div>

                    {/* Cuadrícula de habilidades */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.05 
                          }}
                          className="relative group/skill"
                        >
                          <div className="relative flex items-center">
                            {/* Indicador de habilidad */}
                            <motion.div
                              className="w-2 h-2 bg-cyan-400 mr-4"
                              whileHover={{ scale: 1.5, rotate: 45 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            />
                            
                            {/* Nombre de habilidad */}
                            <span className="font-mono text-sm text-slate-300 group-hover/skill:text-cyan-300 transition-colors duration-300">
                              {skill}
                            </span>

                            {/* Subrayado animado en hover */}
                            <motion.div
                              className="absolute bottom-0 left-6 h-px bg-cyan-400"
                              initial={{ width: 0 }}
                              whileHover={{ width: '80%' }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Efecto de escaneo */}
                  <EfectoEscaneo direction="vertical" duration={4} delay={categoryIndex * 0.5} />
                </div>

                {/* Brillo hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>

          {/* Nota técnica adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center font-mono text-xs text-cyan-400/40"
          >
            <div>[ ACTUALIZACIÓN_CONTINUA | APRENDIZAJE_PERMANENTE ]</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
