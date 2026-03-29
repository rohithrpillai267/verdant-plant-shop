// import { motion } from 'motion/react';

// export function LoadingScreen() {
//   return (
//     <motion.div 
//       exit={{ opacity: 0 }} 
//       className="fixed inset-0 z-[100] bg-[#FAF9F6] flex items-center justify-center"
//     >
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.1, 1], 
//           rotate: [0, 5, 0] 
//         }} 
//         transition={{ duration: 1.5, repeat: Infinity }} 
//         className="text-emerald-900"
//       >
//         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="drop-shadow-sm">
//           <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
//           <path d="M2 21c0-3 1.85-5.36 5.08-6C10.95 14 12 14 15 14"/>
//         </svg>
//       </motion.div>
//     </motion.div>
//   );
// }


//


import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#FAF9F6] flex items-center justify-center"
    >
      {/* Outer Pulse Ring */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-28 h-28 rounded-full bg-emerald-200 blur-xl"
      />

      {/* Logo */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative text-transparent bg-clip-text bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
          className="drop-shadow-md"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
          </defs>

          <motion.path
            d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M2 21c0-3 1.85-5.36 5.08-6C10.95 14 12 14 15 14"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Brand Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 0.6, 1], y: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute mt-24 text-sm tracking-wide text-emerald-800 font-medium"
      >
        Growing Nature...
      </motion.p>
    </motion.div>
  );
}


//


// import { motion } from 'motion/react';

// export function LoadingScreen() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 z-[100] bg-[#FAF9F6] flex items-center justify-center"
//     >
//       {/* Subtle Radial Background Glow */}
//       <motion.div
//         animate={{
//           background: [
//             'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)',
//             'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)',
//             'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)',
//           ]
//         }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute inset-0"
//       />

//       {/* Soft Glow Behind Logo */}
//       <motion.div
//         animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute w-32 h-32 rounded-full bg-emerald-400/10 blur-3xl"
//       />

//       {/* Logo + Leaf */}
//       <motion.div
//         animate={{ y: [0, -1.5, 0], scale: [1, 1.01, 1] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         className="relative flex flex-col items-center"
//       >
//         <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
//           <defs>
//             <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#065f46">
//                 <animate attributeName="stop-color" values="#065f46;#10b981;#065f46" dur="4s" repeatCount="indefinite"/>
//               </stop>
//               <stop offset="100%" stopColor="#10b981"/>
//             </linearGradient>
//           </defs>

//           {/* Leaf Outline */}
//           <motion.path
//             d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
//             stroke="url(#leafGradient)"
//             strokeWidth="1.6"
//             fill="none"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* Main Vein */}
//           <motion.path
//             d="M3 21c1-3 4-5 7.5-6.2C12 14 13 14 16 14"
//             stroke="#10b981"
//             strokeWidth="1.2"
//             strokeLinecap="round"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
//           />

//           {/* Minimal Branches */}
//           <motion.path
//             d="M9.5 13.2c-0.7-0.6-1.2-1.2-1.5-2"
//             stroke="#10b981"
//             strokeWidth="0.8"
//             strokeLinecap="round"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1, opacity: 0.7 }}
//             transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
//           />
//           <motion.path
//             d="M13.8 16.5c0 0.5 1.5 1 2 1.8"
//             stroke="#10b981"
//             strokeWidth="0.8"
//             strokeLinecap="round"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1, opacity: 0.7 }}
//             transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
//           />
//         </svg>

//         {/* Animated Text */}
//         <div className="mt-8 text-center">
//           <motion.p
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="text-sm tracking-[0.2em] text-emerald-700 font-light uppercase"
//           >
//             GROWING
//           </motion.p>
//           <motion.p
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.3 }}
//             className="text-xs text-emerald-600/80 font-light mt-1 uppercase tracking-wider"
//           >
//             nature...
//           </motion.p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }