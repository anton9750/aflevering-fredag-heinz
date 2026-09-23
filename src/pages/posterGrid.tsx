import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PosterCard from "../partials/cards";
import { breakpoints } from "../GlobalStyles/breakpoints";

// Type for en plakat
type Poster = {
  id: number;
  name: string;
  image: string;
  price: string;
  stock: number;
  genres: {
    genreId: number;
    posterId: number;
  }[];
};

// Type for data fra Outlet Context
type ContextType = {
  selectedGenre: number | null;
};

// Grid-layout til plakaterne
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    // To kolonner på tablet
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    // Én kolonne på mobil
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Link rundt om hvert plakatkort
const PosterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// Komponent der viser plakaterne
function PosterGrid() {

  // Henter valgt genre fra Outlet Context
  const { selectedGenre } = useOutletContext<ContextType>();

  // Henter plakater fra API'et
  const { data, loading, error } = useFetch<Poster[]>(
    "http://localhost:3000/api/posters"
  );

  // Viser loading mens data hentes
  if (loading) {
    return <p>Loading...</p>;
  }

  // Viser fejl hvis data ikke kan hentes
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Filtrerer plakater efter valgt genre
  const filtered = selectedGenre

    ? data?.filter((poster) =>
        
        poster.genres.some((g) => g.genreId === selectedGenre)
      )
    : data;

  return (
    <Grid>
      {/* Viser højst 8 plakater */}
      {filtered?.slice(0, 8).map((poster) => (

        // Linker hver plakat til dens detaljeside
        <PosterLink key={poster.id} to={`/plakater/${poster.id}`}>

          <PosterCard

            // Viser plakatens navn
            title={poster.name}

            // Ingen beskrivelse vises i kortet
            description=""

            // Viser plakatens genre-id'er
            genre={poster.genres.map((

                g) => g.genreId).join(", ")}
                
            // Viser plakatens billede
            image={poster.image}
          />
        </PosterLink>
      ))}
    </Grid>
  );
}

export default PosterGrid;