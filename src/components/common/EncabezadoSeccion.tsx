import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  delay?: number;
}

export default function EncabezadoSeccion({ label, title, delay = 0 }: SectionHeaderProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="mb-4"
      >
        <span className="font-mono text-cyan-400 text-xs tracking-[0.3em]">[ {label} ]</span>
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl mb-16 relative inline-block"
      >
        {title}
        <motion.div
          className="absolute -bottom-3 left-0 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8 }}
        />
      </motion.h3>
    </>
  );
}
