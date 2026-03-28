import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[48px] text-center relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Join the Green Side
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-earth/60 dark:text-zinc-400 mb-10 max-w-xl mx-auto"
          >
            Subscribe to our newsletter for plant care tips, exclusive offers, and early access to new arrivals.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-2xl bg-white/50 dark:bg-zinc-800/50 border border-primary/10 focus:outline-none focus:border-primary transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Subscribe
              <Send size={18} />
            </motion.button>
          </motion.form>
          
          <p className="text-xs text-earth/40 dark:text-zinc-500 mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
