import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Plant } from '../types';

interface PlantCardProps {
  plant: Plant;
  onAddToCart: (plant: Plant) => void;
  index?: number;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart, index = 0 }) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl overflow-hidden 
                 border border-stone-200 
                 shadow-[0_2px_8px_rgba(0,0,0,0.04)] 
                 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] 
                 transition-all duration-300"
    >
      {/* Wishlist */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-2.5 right-2.5 z-20 w-7 h-7 
                   bg-white/90 backdrop-blur rounded-full 
                   flex items-center justify-center 
                   shadow-sm hover:scale-105 transition"
      >
        <Heart 
          size={14} 
          className={`${isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-400'}`}
        />
      </button>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F4F0]">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-full object-cover 
                     transition-transform duration-500 
                     group-hover:scale-105"
        />

        {/* Add to Cart */}
        <div className={`absolute bottom-2 left-0 right-0 flex justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <button 
            onClick={() => onAddToCart(plant)}
            className="px-4 py-2 bg-primary text-white 
                       rounded-lg text-xs font-semibold 
                       shadow-md hover:scale-105 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[9px] text-stone-400 uppercase tracking-wide">
          {plant.category}
        </p>

        <h3 className="font-medium text-sm text-stone-800 mt-1 leading-tight">
          {plant.name}
        </h3>

        <div className="flex justify-between items-center mt-1.5">
          <span className="text-base font-semibold text-primary">
            ${plant.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};