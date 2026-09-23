import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import GenreFilters from "../components/genreFilter/Genrefilter";
import { useFetch } from "../hooks/useFetch";
import { breakpoints } from "../GlobalStyles/breakpoints";

// Type for en genre
type Genre = {
  id: number;
  name: string;
};

// Styling af hele siden
const Page = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

// Header med overskrift og sortering
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

// Styling af sidens overskrift
const Heading = styled.h1`
  color: #d97757;
`;

// Grid-layout til filter og plakater
const Content = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    /* Filteret rykker ovenpå plakaterne i stedet for i en sidebar */
    grid-template-columns: 1fr;
  }
`;

// Komponent til plakatsiden
function Plakater() {
  // State til den valgte genre
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  // Henter genrer fra API'et
  const { data: genres } = useFetch<Genre[]>(
    "http://localhost:3000/api/genres"
  );

  return (
    <Page>

      {/* Header med overskrift og sortering */}
      <Header>
        <Heading>Plakater</Heading>

        {/* Dropdown til sortering */}
        <select>
          <option>Sorter efter</option>
          <option>Pris: lavest</option>
          <option>Pris: højest</option>
          <option>Navn</option>
        </select>
      </Header>

      <Content>

        {/* Viser genre-filtrene */}
        <GenreFilters
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />

        {/* Viser den valgte route og sender selectedGenre videre */}
        <Outlet context={{ selectedGenre }} />

      </Content>
    </Page>
  );
}

export default Plakater;