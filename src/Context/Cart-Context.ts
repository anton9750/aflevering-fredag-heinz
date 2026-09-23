
import { createContext } from "react";

// Type for et produkt i kurven
export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
};

// Type for kurvens funktioner og data
export type CartContextType = {
  // Alle produkter i kurven
  items: CartItem[];

  // Tilføjer et produkt til kurven
  addToCart: (poster: CartItem) => void;

  // Fjerner et produkt fra kurven
  removeFromCart: (id: number) => void;
};

// Opretter context til kurven
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

