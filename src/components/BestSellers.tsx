import React from 'react';
import { motion } from 'motion/react';
import { Plant } from '../types';
import { PlantCard } from './PlantCard';

interface BestSellersProps {
  plants: Plant[];
  onAddToCart: (plant: Plant) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ plants, onAddToCart }) => {
  const bestSellers = plants.filter(p => p.isBestSeller);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Best Sellers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-earth/60 dark:text-zinc-400"
            >
              Our most loved green companions.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            {/* Custom scroll indicators could go here */}
          </motion.div>
        </div>

        <motion.div 
          className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {bestSellers.map((plant, index) => (
            <div key={plant.id} className="min-w-[300px] md:min-w-[350px] snap-center">
              <PlantCard plant={plant} onAddToCart={onAddToCart} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
