
import { useContext } from "react";
import { CartContext } from "./Cart-Context"

// Custom hook til at hente kurvens context
export function useCart() {
  // Henter værdien fra CartContext
  const context = useContext(CartContext);

  // Tjekker om hooket bruges uden for CartProvider
  if (!context) {
    
    // Giver en fejl hvis context ikke findes
    throw new Error("useCart skal bruges inden i en CartProvider");
  }

  // Returnerer kurvens data og funktioner
  return context;
}

