import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./Cart-Context"
import type { CartItem } from "./Cart-Context"

// Nøgle som kurven gemmes under i localStorage
const STORAGE_KEY = "wallywood-cart";

// Provider til kurvens state
export function CartProvider({ children }: { children: ReactNode }) {

  // Opretter state til varer i kurven
  // Funktionen kører kun ved første render og henter den gemte kurv
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      // Hvis data er ødelagt eller localStorage ikke er tilgængelig
      return [];
    }
  });

  // Gemmer kurven i localStorage hver gang den ændres
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Tilføjer en vare til kurven
  function addToCart(poster: CartItem) {
    setItems((prev) => {

      // Tjekker om plakaten allerede ligger i kurven
      const existing = prev.find((item) => item.id === poster.id);

      // Hvis den findes, øges antallet med 1 i stedet for at oprette en ny række
      if (existing) {
        return prev.map((item) =>
          item.id === poster.id
            ? { ...item, quantity: item.quantity + 1 }
            : item //ternary
        );
      }

      // Ellers tilføjes plakaten som en ny vare
      return [...prev, poster];
    });
  }

  // Fjerner en vare fra kurven
  function removeFromCart(id: number) {

    // Filtrerer varen med det valgte id fra
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  // Ændrer antallet af en vare
  function updateQuantity(id: number, quantity: number) {

    // Hvis antallet kommer under 1, fjernes varen helt
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    // Opdaterer antallet på den valgte vare
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))    //prev- forrige state
    );
  }

  return (
    // Gør kurvens data og funktioner tilgængelige
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity }}
    >

      {/* Viser komponenterne inde i provideren */}
      {children}

    </CartContext.Provider>
  );
}