import { Search, ChevronDown } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: SearchBarProps) {
  return (
    <div
      className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl 
                 border border-stone-200 mb-4
                 flex flex-col sm:flex-row items-center gap-2
                 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    >
      {/* Search */}
      <div className="relative flex-1 w-full">
        <Search
          size={13}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400"
        />
        <input
          type="text"
          placeholder="Search plants..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-8 pr-2.5 py-1.5 text-sm rounded-lg 
                     bg-stone-50 border border-transparent 
                     text-stone-700 placeholder:text-stone-400
                     focus:bg-white
                     focus:border-emerald-900/20 
                     focus:ring-1 focus:ring-emerald-900/10
                     outline-none transition-all duration-150"
        />
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none px-3 py-1.5 pr-7 text-sm 
                       rounded-lg bg-stone-50 text-stone-700 
                       border border-transparent
                       focus:bg-white
                       focus:border-emerald-900/20 
                       focus:ring-1 focus:ring-emerald-900/10
                       outline-none cursor-pointer
                       transition-all duration-150"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price ↑</option>
            <option value="price-high">Price ↓</option>
            <option value="name">Name</option>
          </select>

          <ChevronDown
            size={12}
            className="absolute right-2 top-1/2 -translate-y-1/2 
                       text-stone-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}