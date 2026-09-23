
import styled from "styled-components";
import { useRandomPosters } from "../../hooks/userandomposters";
import PosterCard from "../../partials/cards";
import { breakpoints } from "../../GlobalStyles/breakpoints";

// Styling af sektionen
const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

// Styling af overskriften
const Heading = styled.h2`
  color: #d97757;
  margin-bottom: 1.5rem;
`;

// Gitter til plakaterne
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  // Én kolonne på mobil
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

// Komponent der viser plakater
function PosterList() {
  // Henter fire tilfældige plakater
  const { data, loading, error } = useRandomPosters(
    "http://localhost:3000/api/posters",
    4
  );

  // Viser loading mens data hentes
  if (loading) {
    return <Section>Loading...</Section>;
  }

  // Viser fejl hvis data ikke kan hentes
  if (error) {
    return <Section>Error: {error}</Section>;
  }

  return (
    <Section>
      {/* Overskrift til plakatsektionen */}
      <Heading>Fire tilfældige plakater</Heading>

      {/* Viser plakaterne i et grid */}
      <Grid>
        {data.map((poster) => (
          <PosterCard
            // Titel på plakaten
            title={poster.name}

            // Begrænser beskrivelsen til 120 tegn
            description={poster.description?.slice(0, 120) ?? ""}

            // Viser genrerne som tekst
            genre={poster.genres
              .map((genre) => genre.genreId)
              .join(", ")}

            // Billede til plakaten
            image={poster.image}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default PosterList;

