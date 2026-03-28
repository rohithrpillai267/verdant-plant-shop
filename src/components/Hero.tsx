

// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useInView } from 'motion/react';
// import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';

// export const Hero: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [hasAnimated, setHasAnimated] = useState(false);
  
//   const isInView = useInView(sectionRef, { 
//     once: true, 
//     amount: 0.2,
//     margin: "0px 0px -100px 0px" // Helps trigger when section is near
//   });

//   // Force trigger if already in view on mount
//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       setHasAnimated(true);
//     }
//   }, [isInView, hasAnimated]);

//   const shouldAnimate = hasAnimated || isInView;

//   return (
//     <div ref={sectionRef} className="relative w-full py-6 overflow-visible bg-[#FAF9F6]">

//       {/* Background layers remain the same */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none opacity-40"
//         style={{
//           backgroundImage: "url('/images/plantWallpaper.png')",
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: '115% 100%',
//         }}
//       />

//       <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-emerald-900/40 to-transparent z-0" />
//       <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-emerald-900/40 to-transparent z-0" />

//       <div className="relative z-10 w-[80%] mx-auto bg-emerald-900/90 backdrop-blur-md rounded-3xl overflow-visible border border-white/10 shadow-2xl">
        
//         {/* Left Side Animated Image */}
//         <div className="hidden md:flex absolute left-[6%] bottom-0 -translate-x-1/2 h-full items-end z-20">
//           <motion.img
//             src="/images/sk1.png"
//             alt="Plant"
//             className="h-[85%] object-contain"
//             initial={{ y: 120, opacity: 0, scale: 0.95 }}
//             animate={shouldAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//           />
//         </div>

//         <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-14">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">

//             <div className="flex-1 text-center md:text-left md:pl-16 lg:pl-24">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
//                   Bring Nature Home
//                 </h1>
//                 <p className="text-white/80 text-sm md:text-lg mb-8 max-w-lg">
//                   Premium indoor plants delivered to your doorstep.
//                   Transform your space into a green sanctuary.
//                 </p>

//                 <div className="flex gap-4 justify-center md:justify-start">
//                   <button className="bg-white text-emerald-950 px-8 py-3 rounded-xl font-bold hover:bg-stone-100 transition-all text-sm flex items-center gap-2 shadow-xl">
//                     Shop Now
//                     <ArrowRight size={18} />
//                   </button>
//                   <button className="border-2 border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all text-sm backdrop-blur-sm">
//                     Our Story
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="flex-1 w-full max-w-md md:pr-16 lg:pr-24">
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: Truck, text: "Fast Delivery", sub: "2-3 Days" },
//                   { icon: Shield, text: "Plant Care", sub: "Expert Tips" },
//                   { icon: Leaf, text: "Organic", sub: "Non-Toxic" },
//                   { icon: ArrowRight, text: "Join Club", sub: "10% Off" }
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
//                   >
//                     <item.icon className="w-5 h-5 text-emerald-400 mb-2" />
//                     <p className="text-white text-sm font-bold">{item.text}</p>
//                     <p className="text-white/40 text-[11px] uppercase tracking-wider">{item.sub}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//


import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Leaf, Truck, Shield, Gift, Percent } from 'lucide-react';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const shouldAnimate = hasAnimated || isInView;

  return (
    <div ref={sectionRef} className="relative w-full py-6 overflow-visible bg-[#FAF9F6]">

      {/* Background layers */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "url('/images/plantWallpaper.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '115% 100%',
        }}
      />

      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-emerald-900/40 to-transparent z-0" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-emerald-900/40 to-transparent z-0" />

      <div className="relative z-10 w-[85%] mx-auto bg-emerald-900/90 backdrop-blur-md rounded-2xl overflow-visible border border-white/10 shadow-2xl">
        
        {/* Sale Badge - Compact & Integrated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="absolute -top-3 -right-3 z-30"
        >
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2.5 shadow-lg">
            <div className="text-center">
              <Percent className="w-3 h-3 text-white mx-auto" />
              <p className="text-white font-black text-sm leading-none">30%</p>
              <p className="text-white text-[8px] font-bold uppercase">OFF</p>
            </div>
          </div>
        </motion.div>

        {/* Flash Sale Tag - Sleek */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="absolute -top-2 left-4 z-30"
        >
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
            <span className="text-yellow-300 text-xs">⚡</span>
            <span className="text-white text-[10px] font-bold uppercase tracking-wide">FLASH SALE</span>
          </div>
        </motion.div>
        
        {/* Left Side Animated Image */}
        <div className="hidden md:flex absolute left-[3%] bottom-0 -translate-x-1/2 h-full items-end z-20">
          <motion.img
            src="/images/sk1.png"
            alt="Plant"
            className="h-[80%] object-contain"
            initial={{ y: 120, opacity: 0, scale: 0.95 }}
            animate={shouldAnimate ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="px-5 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex-1 text-center md:text-left md:pl-12 lg:pl-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Compact Price Tag */}
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-2 py-0.5">
                    <span className="text-yellow-400 text-[10px] font-bold">🎁 LIMITED</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 line-through text-xs">$49.99</span>
                    <span className="text-yellow-400 text-lg font-bold">$34.99</span>
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  Bring Nature Home
                </h1>
                <p className="text-white/80 text-xs md:text-sm mb-4 max-w-lg">
                  Premium indoor plants delivered. Transform your space into a green sanctuary.
                </p>

                <div className="flex gap-3 justify-center md:justify-start">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-emerald-950 px-6 py-2 rounded-lg font-bold hover:shadow-xl transition-all text-xs flex items-center gap-2 shadow-lg">
                    Shop 30% Off
                    <ArrowRight size={14} />
                  </button>
                  <button className="border border-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all text-xs backdrop-blur-sm">
                    Our Story
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full max-w-sm md:pr-12 lg:pr-16">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Truck, text: "Fast Delivery", sub: "2-3 Days", highlight: false },
                  { icon: Shield, text: "Plant Care", sub: "Expert Tips", highlight: false },
                  { icon: Leaf, text: "Organic", sub: "Non-Toxic", highlight: false },
                  { icon: Gift, text: "Free Gift", sub: "With Purchase", highlight: true }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`${
                      item.highlight 
                        ? 'bg-yellow-400/15 border-yellow-400/40' 
                        : 'bg-white/5 border-white/10'
                    } backdrop-blur-lg rounded-xl p-2.5 border transition-all`}
                  >
                    <item.icon className={`w-4 h-4 ${item.highlight ? 'text-yellow-400' : 'text-emerald-400'} mb-1`} />
                    <p className="text-white text-xs font-bold">{item.text}</p>
                    <p className={`${item.highlight ? 'text-yellow-400/70' : 'text-white/40'} text-[9px] uppercase tracking-wider`}>
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Compact Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-30 w-[95%]"
        >
          <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-yellow-400/30">
            <div className="flex items-center justify-center gap-3 text-[9px]">
              <span className="text-yellow-400 font-bold">🎁 BONUS</span>
              <span className="text-white">Free Plant Food Kit</span>
              <span className="text-yellow-400">+</span>
              <span className="text-white">Free Shipping $50+</span>
              <span className="text-yellow-400 font-mono font-bold">GREEN30</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};