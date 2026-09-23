
import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./Cart-Context"
import type { CartItem } from "./Cart-Context"

// Provider til kurvens state
export function CartProvider({ children }: { children: ReactNode }) {

  // Opretter state til varer i kurven
  const [items, setItems] = useState<CartItem[]>([]);

  // Tilføjer en vare til kurven
  function addToCart(poster: CartItem) {

    // Kopierer varer og tilføjer den nye vare
    const newItems = [...items, poster];

    // Opdaterer state
    setItems(newItems);
  }

  // Fjerner en vare fra kurven
  function removeFromCart(id: number) {

    // Filtrerer varen med det valgte id fra
    const newItems = items.filter((item) => item.id !== id);
    
    // Opdaterer state
    setItems(newItems);
  }

  return (
    // Gør kurvens data og funktioner tilgængelige
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>

      {/* Viser komponenterne inde i provideren */}
      {children}

    </CartContext.Provider>
  );
}

