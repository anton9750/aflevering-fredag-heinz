import { createContext } from "react";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];

  addToCart: (poster: CartItem) => void;
  
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);