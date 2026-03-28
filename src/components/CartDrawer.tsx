import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-primary" />
                <h2 className="text-2xl font-display font-bold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-primary/20" />
                  </div>
                  <p className="text-lg font-medium text-earth/60 dark:text-zinc-400">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-red-500/50 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-primary font-semibold mb-3">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 glass">
                <div className="flex justify-between mb-6">
                  <span className="text-earth/60 dark:text-zinc-400 font-medium">Subtotal</span>
                  <span className="text-2xl font-display font-bold">${total.toFixed(2)}</span>
                </div>
               <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition shadow-lg">
  Checkout Now
</button>
                <p className="text-center text-xs text-earth/40 dark:text-zinc-500 mt-4">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
