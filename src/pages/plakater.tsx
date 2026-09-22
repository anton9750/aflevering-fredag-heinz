import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import GenreFilters from "../components/genreFilter/Genrefilter";
import { useFetch } from "../hooks/useFetch";
import { breakpoints } from "../GlobalStyles/breakpoints";

type Genre = {
  id: number;
  name: string;
};

const Page = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Heading = styled.h1`
  color: #d97757;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    /* Filteret rykker ovenpå plakaterne i stedet for i en sidebar */
    grid-template-columns: 1fr;
  }
`;

function Plakater() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const { data: genres } = useFetch<Genre[]>(
    "http://localhost:3000/api/genres"
  );

  return (
    <Page>
      <Header>
        <Heading>Plakater</Heading>

        <select>
          <option>Sorter efter</option>
          <option>Pris: lavest</option>
          <option>Pris: højest</option>
          <option>Navn</option>
        </select>
      </Header>

      <Content>
        <GenreFilters
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />

        <Outlet context={{ selectedGenre }} />
      </Content>
    </Page>
  );
}

export default Plakater;