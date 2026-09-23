import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Home from "./pages/home";
import Plakater from "./pages/plakater";
import PosterDetail from "./pages/posterDetailPage";
import OmOs from "./pages/om-os";
import KontaktOs from "./pages/kontakt";
import Login from "./pages/loginpage";
import Footeren from "./components/Footer/Footer";
import PosterGrid from "./pages/posterGrid";
import CartPage from "./pages/cartPage";

// Hovedkomponenten for hele applikationen
function App() {
  return (
    <>
      {/* Navigationen vises på alle sider */}
      <Navbar />

      {/* Definerer applikationens routes */}
      <Routes>

        {/* Route til forsiden */}
        <Route path="/" element={<Home />} />

        {/* Route til plakatsiden med nested routes */}
        <Route path="/plakater" element={<Plakater />}>

          {/* Viser plakat-gridet som standard */}
          <Route index element={<PosterGrid />} />

          {/* Viser detaljer for en bestemt plakat */}
          <Route path=":id" element={<PosterDetail />} />

        </Route>

        {/* Route til Om os-siden */}
        <Route path="/om-os" element={<OmOs />} />

        {/* Route til kontaktsiden */}
        <Route path="/kontakt-os" element={<KontaktOs />} />

        {/* Route til login-siden */}
        <Route path="/login" element={<Login />} />

        {/* Route til indkøbskurven */}
        <Route path="/kurv" element={<CartPage />} />

      </Routes>

      {/* Footer vises på alle sider */}
      <Footeren />
    </>
  );
}

export default App;