import styled from "styled-components";
import { breakpoints } from "../GlobalStyles/breakpoints";

// Styling af selve plakatkortet
const Card = styled.article`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    /* Billede ovenpå tekst i stedet for ved siden af, når pladsen er trang */
    flex-direction: column;
  }
`;

// Styling af plakatbilledet
const Poster = styled.img`
  width: 105px;
  height: 155px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 220px;
  }
`;

// Container til kortets tekstindhold
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// Styling af plakatens titel
const Title = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

// Styling af beskrivelsen
const Description = styled.p`
  margin: 0 0 0.8rem;
  font-size: 0.85rem;
  line-height: 1.4;
`;

// Styling af genre-information
const Genre = styled.p`
  margin: 0 0 1rem;
  font-size: 0.8rem;
`;

// Container til knapperne
const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

// Knap til at læse mere
const ReadMoreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dcc5ba;
  border: 1px solid #8c776d;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cdb0a3;
  }
`;

// Knap til favoritter
const FavoriteButton = styled.button`
  width: 35px;
  background-color: #dcc5ba;
  border: 1px solid #8c776d;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cdb0a3;
  }
`;

// Props-type til plakatkortet
type PosterCardProps = {
  title: string;
  description: string;
  genre: string;
  image: string;
};

// Komponent til visning af et plakatkort
function PosterCard({
  title,
  description,
  genre,
  image,
}: PosterCardProps) {
  return (
    <Card>

      {/* Viser plakatens billede */}
      <Poster src={image} alt={title} />

      <CardContent>

        {/* Viser plakatens titel */}
        <Title>{title}</Title>

        {/* Viser plakatens beskrivelse */}
        <Description>
          {description}
        </Description>

        {/* Viser plakatens genre */}
        <Genre>Genre: {genre}</Genre>

        {/* Knapper til handlinger */}
        <Buttons>

          {/* Knap til at læse mere */}
          <ReadMoreButton>
            Læs mere
          </ReadMoreButton>

          {/* Knap til at tilføje til favoritter */}
          <FavoriteButton aria-label="Tilføj til favoritter">
            ♡
          </FavoriteButton>

        </Buttons>
      </CardContent>
    </Card>
  );
}

export default PosterCard;