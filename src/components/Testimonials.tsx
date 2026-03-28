import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-primary/5 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-[32px] relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-8 w-12 h-12" />
              <p className="text-lg text-earth/80 dark:text-zinc-300 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-earth/50 dark:text-zinc-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
