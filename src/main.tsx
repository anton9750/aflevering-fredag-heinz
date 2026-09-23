import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles/GlobalStyle';
import { CartProvider } from './Context/cartContent.tsx';

// Opretter React-applikationen i root-elementet
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/* Giver applikationen adgang til client-side routing */}
    <BrowserRouter>

      {/* Globale CSS-regler for hele applikationen */}
      <GlobalStyle />

      {/* Giver komponenterne adgang til Cart Context */}
      <CartProvider>

        {/* Hovedkomponenten */}
        <App />

      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)