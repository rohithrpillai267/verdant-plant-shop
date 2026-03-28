import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000" 
              alt="Plant shop interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl hidden md:block max-w-[240px]"
          >
            <p className="text-primary font-display font-bold text-4xl mb-2">10k+</p>
            <p className="text-sm font-semibold text-earth/60 dark:text-zinc-400">Happy plant parents joined our community.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            We Believe Every Home Needs a <span className="text-primary italic">Soul</span>
          </h2>
          <p className="text-lg text-earth/70 dark:text-zinc-400 mb-8 leading-relaxed">
            Founded in 2020, Verdant started with a simple mission: to make high-quality, beautiful plants accessible to everyone. We source our plants from sustainable nurseries and ensure they arrive at your doorstep in perfect condition.
          </p>
          <p className="text-lg text-earth/70 dark:text-zinc-400 mb-10 leading-relaxed">
            Whether you're a seasoned plant parent or just starting your green journey, we're here to help you grow your own indoor jungle.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};
