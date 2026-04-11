import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, selectedWeight = null) => {
        const items = get().items;
        const key = `${product.id}-${selectedWeight}`;
        const existing = items.find((i) => i.key === key);
        if (existing) {
          set({
            items: items.map((i) =>
              i.key === key ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                key,
                selectedWeight,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeItem: (key) => {
        set({ items: get().items.filter((i) => i.key !== key) });
      },

      updateQuantity: (key, quantity) => {
        if (quantity < 1) {
          get().removeItem(key);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.key === key ? { ...i, quantity } : i,
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      get totalItems() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },

      get totalPrice() {
        return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      },
    }),
    { name: "sytaya-morда-cart" },
  ),
);

export default useCartStore;
