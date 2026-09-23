import { useContext } from "react";
import { CartContext } from "./Cart-Context"

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart skal bruges inden i en CartProvider");
  }

  return context;
}