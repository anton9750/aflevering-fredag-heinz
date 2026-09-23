import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { breakpoints } from "../GlobalStyles/breakpoints";
import { useCart } from "../Context/useCart"

// Type for en plakat
type Poster = {
  id: number;
  name: string;
  description: string;
  image: string;
  width: number;
  height: number;
  price: string;
  stock: number;
  genres: {
    genreId: number;
    posterId: number;
  }[];
};

// Grid-layout til produktdetaljer og billede
const Product = styled.section`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    /* Billedet rykker ovenpå detaljerne i stedet for ved siden af */
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Container til produktdetaljerne
const Details = styled.div`
  padding-top: 0;
`;

// Styling af produktnavnet
const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
`;

// Styling af produktbeskrivelsen
const Description = styled.p`
  max-width: 550px;
  line-height: 1.45;
  margin: 0 0 1.5rem;
`;

// Styling af produktinformation
const Info = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
`;

// Styling af produktets pris
const Price = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 1rem;
`;

// Container til knapperne
const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

// Knap til at tilføje produktet til kurven
const CartButton = styled.button`
  padding: 0.6rem 1.3rem;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a4;
  }
`;

// Knap til favoritter
const FavoriteButton = styled.button`
  width: 42px;
  height: 38px;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a4;
  }
`;

// Styling af produktbilledet
const PosterImage = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  border-radius: 3px;

  @media (max-width: ${breakpoints.tablet}) {
    /* Vis plakaten øverst på mobil, før beskrivelsen */
    order: -1;
    margin: 0 auto;
  }
`;

// Komponent til visning af en enkelt plakat
function PosterDetail() {

  // Henter id fra URL-parametrene
  const { id } = useParams();

  // Henter addToCart-funktionen fra Cart Context
  const { addToCart } = useCart();

  // Henter produktdata fra API'et
  const { data, loading, error } = useFetch<Poster>(
    `http://localhost:3000/api/posters/${id}`
  );

  // Viser loading mens data hentes
  if (loading) {
    return <p>Loading...</p>;
  }

  // Viser fejl hvis data ikke kan hentes
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Tjekker om der findes produktdata
  if (!data) {
    return <p>Poster not found</p>;
  }

  return (
    <Product>
      <Details>

        {/* Produktets navn */}
        <ProductName>{data.name}</ProductName>

        {/* Produktets beskrivelse */}
        <Description>
          {data.description || "Ingen beskrivelse tilgængelig."}
        </Description>

        {/* Produktets størrelse */}
        <Info>
          Størrelse: {data.width} x {data.height} cm
        </Info>

        {/* Produktets varenummer */}
        <Info>Varenummer (SKU): {data.id}</Info>

        {/* Produktets pris */}
        <Price>Pris: {data.price},00 DKK</Price>

        {/* Knapper til kurv og favorit */}
        <Buttons>
          <CartButton
            onClick={() =>
              addToCart({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                quantity: 1,
              })
            }
          >
            Læg i kurv
          </CartButton>

          <FavoriteButton>♡</FavoriteButton>
        </Buttons>
      </Details>

      {/* Viser produktets billede */}
      <PosterImage src={data.image} alt={data.name} />
    </Product>
  );
}

export default PosterDetail;