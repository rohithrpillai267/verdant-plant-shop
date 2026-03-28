// import { forwardRef, useState } from 'react';
// import { motion } from 'motion/react';
// import { PlantCard } from './PlantCard';
// import { SearchBar } from './SearchBar';
// import { CategoryFilters } from './CategoryFilters';
// import { PLANTS } from '../constants';
// import { Plant } from '../types';

// interface ShopSectionProps {
//   onAddToCart: (plant: Plant) => void;
// }

// export const ShopSection = forwardRef<HTMLElement, ShopSectionProps>(({ onAddToCart }, ref) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [priceRange] = useState<[number, number]>([0, 200]);
//   const [sortBy, setSortBy] = useState("featured");

//   const categories = ["All", "Indoor", "Outdoor", "Succulent", "Air Purifying", "Low Light", "Pet Friendly"];
  
//   const filteredPlants = PLANTS.filter(plant => {
//     const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
//     const matchesPrice = plant.price <= priceRange[1];
//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   const sortedPlants = [...filteredPlants].sort((a, b) => {
//     if (sortBy === "price-low") return a.price - b.price;
//     if (sortBy === "price-high") return b.price - a.price;
//     if (sortBy === "name") return a.name.localeCompare(b.name);
//     return 0;
//   });

//   return (
//     <section ref={ref} id="shop" className="scroll-mt-24">
//       <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
//         <div>
//           <h2 className="text-4xl font-bold text-emerald-950 mb-2">Our Collection</h2>
//           <p className="text-stone-500">Hand-picked greenery for your specific lifestyle.</p>
//         </div>
//         <CategoryFilters 
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onSelectCategory={setSelectedCategory}
//         />
//       </div>

//       <SearchBar 
//         searchQuery={searchQuery}
//         onSearchChange={setSearchQuery}
//         sortBy={sortBy}
//         onSortChange={setSortBy}
//       />

//       <motion.div 
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {sortedPlants.map((plant, index) => (
//           <PlantCard 
//             key={plant.id} 
//             plant={plant} 
//             onAddToCart={onAddToCart} 
//             index={index} 
//           />
//         ))}
//       </motion.div>
//     </section>
//   );
// });

// ShopSection.displayName = 'ShopSection';


//


import { forwardRef, useState } from 'react';
import { motion } from 'motion/react';
import { PlantCard } from './PlantCard';
import { SearchBar } from './SearchBar';
import { CategoryFilters } from './CategoryFilters';
import { PLANTS } from '../constants';
import { Plant } from '../types';

interface ShopSectionProps {
  onAddToCart: (plant: Plant) => void;
}

export const ShopSection = forwardRef<HTMLElement, ShopSectionProps>(({ onAddToCart }, ref) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["All", "Indoor", "Outdoor", "Succulent", "Air Purifying", "Low Light", "Pet Friendly"];
  
  const filteredPlants = PLANTS.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
    const matchesPrice = plant.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section ref={ref} id="shop" className="scroll-mt-24 py-4 md:py-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-1">
            Our Collection
          </h2>
          <p className="text-xs md:text-sm text-stone-500">
            Hand-picked greenery for your specific lifestyle.
          </p>
        </div>

        <CategoryFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Search + Sort */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sortedPlants.map((plant, index) => (
          <PlantCard 
            key={plant.id} 
            plant={plant} 
            onAddToCart={onAddToCart} 
            index={index} 
          />
        ))}
      </motion.div>

    </section>
  );
});

ShopSection.displayName = 'ShopSection';