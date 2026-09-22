import styled from "styled-components";
import { breakpoints } from "../GlobalStyles/breakpoints";

const Card = styled.article`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    /* Billede ovenpå tekst i stedet for ved siden af, når pladsen er trang */
    flex-direction: column;
  }
`;

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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

const Description = styled.p`
  margin: 0 0 0.8rem;
  font-size: 0.85rem;
  line-height: 1.4;
`;

const Genre = styled.p`
  margin: 0 0 1rem;
  font-size: 0.8rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const ReadMoreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dcc5ba;
  border: 1px solid #8c776d;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a3;
  }
`;

const FavoriteButton = styled.button`
  width: 35px;
  background-color: #dcc5ba;
  border: 1px solid #8c776d;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a3;
  }
`;

type PosterCardProps = {
  title: string;
  description: string;
  genre: string;
  image: string;
};

function PosterCard({
  title,
  description,
  genre,
  image,
}: PosterCardProps) {
  return (
    <Card>
      <Poster src={image} alt={title} />

      <CardContent>
        <Title>{title}</Title>

        <Description>
          {description}
        </Description>

        <Genre>Genre: {genre}</Genre>

        <Buttons>
          <ReadMoreButton>
            Læs mere
          </ReadMoreButton>

          <FavoriteButton aria-label="Tilføj til favoritter">
            ♡
          </FavoriteButton>
        </Buttons>
      </CardContent>
    </Card>
  );
}

export default PosterCard;