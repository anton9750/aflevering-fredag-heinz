
import styled from "styled-components";
import HeaderImage from "../assets/curtain.jpg";
import PosterList from "../components/posterList/posterList";
import { breakpoints } from "../GlobalStyles/breakpoints";

// Hero-sektion øverst på forsiden
const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  // Mindre højde på tablet
  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }

  // Mindre højde på mobil
  @media (max-width: ${breakpoints.mobile}) {
    height: 220px;
  }
`;

// Styling af hero-billedet
const HeroImage = styled.img`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

// Forside-komponenten
function Home() {
  return (
    <main>

      {/* Hero-billede øverst på siden */}
      <Hero>
        <HeroImage src={HeaderImage} alt="WALLYWOOD plakater" />
        
      </Hero>

      {/* Viser fire tilfældige plakater */}
      <PosterList />
   
    </main>
  );
}

export default Home;

