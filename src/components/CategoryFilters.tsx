interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-2">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        const isSale = cat.toLowerCase().includes("sale");

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`
              relative flex items-center gap-1.5
              px-3 py-1.5 rounded-full text-xs font-medium
              whitespace-nowrap border transition-all duration-200
              
              ${
                isActive
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-white text-stone-600 border-stone-200 hover:border-emerald-700/40 hover:text-emerald-900"
              }
            `}
          >
            {cat}

            {/* Sale Badge */}
            {isSale && (
              <span className="ml-1 px-1.5 py-[1px] text-[10px] font-bold rounded bg-yellow-400 text-black">
                %
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}