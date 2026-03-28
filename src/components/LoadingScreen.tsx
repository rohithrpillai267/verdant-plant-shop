import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-[100] bg-[#FAF9F6] flex items-center justify-center"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          rotate: [0, 5, 0] 
        }} 
        transition={{ duration: 1.5, repeat: Infinity }} 
        className="text-emerald-900"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="drop-shadow-sm">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C10.95 14 12 14 15 14"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}