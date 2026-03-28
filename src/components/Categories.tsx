import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sun, Droplets, Trees } from 'lucide-react';
import { CATEGORIES } from '../constants';

const iconMap = {
  Leaf: Leaf,
  Sun: Sun,
  Droplets: Droplets,
  Trees: Trees,
};

export const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900">Shop by Category</h2>
          <p className="text-stone-500 mt-2">Find plants for every space</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={cat.name}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition border border-borderSoft cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-stone-800">{cat.name}</h3>
                <p className="text-xs text-stone-400 mt-1">Explore</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
