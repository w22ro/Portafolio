import { motion } from 'motion/react';
import EncabezadoSeccion from './common/EncabezadoSeccion';
import EfectoEscaneo from './common/EfectoEscaneo';

export default function Pasatiempos() {
  const hobbies = [
    {
      title: 'Videojuegos',
      description: 'Aficionado a videojuegos en PC, enfocado en la diversión, la narrativa y el trabajo en equipo en títulos de acción y estrategia.',
      keywords: ['ESTRATEGIA', 'RPG', 'MULTIJUGADOR'],
      gradient: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      title: 'Aprendizaje',
      description: 'Aprendo principalmente de manera autodidacta a través de cursos online y videos educativos, complementando la teoría con práctica constante',
      keywords: ['AUTODIDACTA', 'CURSOS ONLINE', 'PRÁCTICA CONSTANTE'],
      gradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
      title: 'Musica y Lectura',
      description: 'Interés por la música variada; toco guitarra y compongo canciones como forma de expresión creativa. Lectura ocasional de ciencia ficción y autoayuda, orientada al crecimiento personal.',
      keywords: ['CREATIVIDAD', 'EXPRESIÓN', 'INSPIRACIÓN'],
      gradient: 'from-purple-500/10 to-cyan-500/10'
    },
  ];

  return (
    <section
      id="hobbies"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado de sección */}
          <EncabezadoSeccion label="INTERESES_PERSONALES" title="Pasiones" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Contenedor de tarjeta */}
                <div className="relative h-full border border-cyan-400/20 bg-black/60 backdrop-blur-sm overflow-hidden">
                  {/* Decoraciones de esquina */}
                  <motion.span
                    className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400 group-hover:border-cyan-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                  <motion.span
                    className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 group-hover:border-cyan-300/70 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />

                  <div className="p-6 sm:p-8 relative z-10">
                    {/* Título */}
                    <div className="mb-6">
                      <h4 className="text-xl sm:text-2xl mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {hobby.title}
                      </h4>
                      <motion.div
                        className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      />
                    </div>

                    {/* Descripción */}
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                      {hobby.description}
                    </p>

                    {/* Palabras clave */}
                    <div className="space-y-2">
                      {hobby.keywords.map((keyword, keyIndex) => (
                        <motion.div
                          key={keyword}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + keyIndex * 0.1 + 0.5 }}
                          className="flex items-center space-x-3"
                        >
                          <motion.div
                            className="w-2 h-2 bg-cyan-400"
                            whileHover={{ scale: 1.5, rotate: 45 }}
                          />
                          <span className="font-mono text-xs text-cyan-400/80">
                            {keyword}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Fondo de gradiente animado */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Efecto de escaneo */}
                  <EfectoEscaneo direction="vertical" duration={3} delay={index * 0.8} />
                </div>

                {/* Brillo externo */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>

          {/* Nota adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 backdrop-blur-sm">
              <p className="font-mono text-xs text-cyan-400/60">
                [ BALANCE_PERFECTO: CÓDIGO + CREATIVIDAD + APRENDIZAJE CONSTANTE ]
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
