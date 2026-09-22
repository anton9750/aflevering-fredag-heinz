import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PosterCard from "../partials/cards";
import { breakpoints } from "../GlobalStyles/breakpoints";

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

type ContextType = {
  selectedGenre: number | null;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PosterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function PosterGrid() {
  const { selectedGenre } = useOutletContext<ContextType>();

  const { data, loading, error } = useFetch<Poster[]>(
    "http://localhost:3000/api/posters"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filtered = selectedGenre

    ? data?.filter((poster) =>
        
        poster.genres.some((g) => g.genreId === selectedGenre)
      )
    : data;

  return (
    <Grid>
      {filtered?.slice(0, 8).map((poster) => (

        <PosterLink key={poster.id} to={`/plakater/${poster.id}`}>

          <PosterCard

            title={poster.name}

            description=""
            genre={poster.genres.map((

                g) => g.genreId).join(", ")}
                
            image={poster.image}
          />
        </PosterLink>
      ))}
    </Grid>
  );
}

export default PosterGrid;