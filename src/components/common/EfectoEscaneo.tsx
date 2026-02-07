import { motion } from 'motion/react';

interface ScanningEffectProps {
  direction?: 'horizontal' | 'vertical';
  duration?: number;
  delay?: number;
}

export default function EfectoEscaneo({ 
  direction = 'horizontal', 
  duration = 3,
  delay = 0 
}: ScanningEffectProps) {
  const animationProps = direction === 'horizontal' 
    ? { x: ['-100%', '200%'] }
    : { y: ['-100%', '200%'] };

  return (
    <motion.div
      className={`absolute inset-0 ${
        direction === 'horizontal' 
          ? 'bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0'
          : 'bg-gradient-to-b from-cyan-400/0 via-cyan-400/10 to-cyan-400/0'
      } pointer-events-none`}
      animate={animationProps}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: 'linear',
        delay 
      }}
    />
  );
}
