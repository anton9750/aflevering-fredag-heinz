import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./Cart-Context"
import type { CartItem } from "./Cart-Context"

export function CartProvider({ children }: { children: ReactNode }) {

  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(poster: CartItem) {

    const newItems = [...items, poster];

    setItems(newItems);
  }

  function removeFromCart(id: number) {

    const newItems = items.filter((item) => item.id !== id);
    
    setItems(newItems);
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>

      {children}

    </CartContext.Provider>
  );
}