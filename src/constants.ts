import { Plant } from './types';

export const PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45,
    category: 'Indoor',
    description: 'Large, glossy leaves with iconic splits. A statement piece for any room.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 28,
    category: 'Low Light',
    description: 'Nearly indestructible air purifier. Perfect for beginners.',
    image: 'https://images.unsplash.com/photo-1593482892519-ebc7d7ff09cc?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 65,
    category: 'Indoor',
    description: 'Trendy tree with large, violin-shaped leaves. Dramatic and elegant.',
    image: 'https://images.unsplash.com/photo-1596484552836-6a2f2b0a7a4c?auto=format&fit=crop&q=80&w=400',
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Succulent Collection',
    price: 22,
    category: 'Succulent',
    description: 'Set of 3 assorted succulents in ceramic pots. Low maintenance beauty.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '5',
    name: 'Peace Lily',
    price: 32,
    category: 'Air Purifying',
    description: 'Elegant white flowers that purify indoor air. Thrives in low light.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32b5efb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '6',
    name: 'ZZ Plant',
    price: 38,
    category: 'Low Light',
    description: 'Glossy leaves that thrive on neglect. Perfect for offices.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400',
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Spider Plant',
    price: 18,
    category: 'Pet Friendly',
    description: 'Fast-growing with baby plantlets. Safe for cats and dogs.',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '8',
    name: 'Aloe Vera',
    price: 15,
    category: 'Succulent',
    description: 'Medicinal plant with soothing gel inside leaves. Easy care.',
    image: 'https://images.unsplash.com/photo-1509423350716-97a9362f086b?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '9',
    name: 'Rubber Plant',
    price: 42,
    category: 'Indoor',
    description: 'Dark burgundy leaves that add drama to any space. Fast grower.',
    image: 'https://images.unsplash.com/photo-1600411832986-5a4477b64a1b?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '10',
    name: 'Pothos',
    price: 24,
    category: 'Air Purifying',
    description: 'Trailing vine that removes toxins. Grows in water or soil.',
    image: 'https://images.unsplash.com/photo-1627499023913-46a6e0a5f0e6?auto=format&fit=crop&q=80&w=400',
    isBestSeller: true
  }
];



export const CATEGORIES = [
  { name: 'Indoor', icon: 'Leaf' },
  { name: 'Outdoor', icon: 'Sun' },
  { name: 'Succulents', icon: 'Droplets' },
  { name: 'Bonsai', icon: 'Trees' }
] as const;
