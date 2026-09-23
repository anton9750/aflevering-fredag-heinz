
import styled from "styled-components";
import { breakpoints } from "../../GlobalStyles/breakpoints";

// Type for en genre
export type Genre = {
  id: number;
  name: string;
};

// Styling af filterområdet
const Filters = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 1.5rem;

  // Tilpasning til tablet
  @media (max-width: ${breakpoints.tablet}) {
    border-right: none;
    border-bottom: 1px solid #dddd;
    padding-right: 0;
    padding-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    overflow-x: auto;
  }
`;

// Overskrift til filteret
const FilterTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

// Styling af filterknapper
const Filter = styled.button<{ $active?: boolean }>`
  display: block;
  border: none;
  background: none;
  padding: 0.3rem 0;
  cursor: pointer;

  // Gør valgt filter større
  font-weight: ${(props) =>
    props.$active ? "700" : "400"};

  // Giver valgt filter en anden farve
  color: ${(props) =>
    props.$active ? "#d97757" : "inherit"};

  // Farve ved hover
  &:hover {
    color: #d97757;
  }
`;

// Props som komponenten modtager
type GenreFiltersProps = {
  genres: Genre[] | null;
  selectedGenre: number | null;
  onSelect: (genreId: number | null) => void;
};

// Genre-filter komponent
function GenreFilters({
  genres,
  selectedGenre,
  onSelect,
}: GenreFiltersProps) {
  return (
    <Filters>
      <FilterTitle>Filtre</FilterTitle>

      {/* Vælger alle genrer */}
      <Filter
        $active={selectedGenre === null}
        onClick={() => onSelect(null)}
      >
        Alle
      </Filter>

      {/* Viser alle genrer */}
      {genres?.map((genre) => (
        <Filter
          key={genre.id}
          $active={selectedGenre === genre.id}
          onClick={() => onSelect(genre.id)}
        >
          {genre.name}
        </Filter>
      ))}

      {/* Sektion til favoritter */}
      <FilterTitle>Favoritter</FilterTitle>
    </Filters>
  );
}

export default GenreFilters;

