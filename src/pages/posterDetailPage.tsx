import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { breakpoints } from "../GlobalStyles/breakpoints";

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

const Details = styled.div`
  padding-top: 0;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
`;

const Description = styled.p`
  max-width: 550px;
  line-height: 1.45;
  margin: 0 0 1.5rem;
`;

const Info = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
`;

const Price = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

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

function PosterDetail() {
  const { id } = useParams();

  const { data, loading, error } = useFetch<Poster>(
    `http://localhost:3000/api/posters/${id}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Poster not found</p>;
  }

  return (
    <Product>
      <Details>
        <ProductName>{data.name}</ProductName>

        <Description>
          {data.description || "Ingen beskrivelse tilgængelig."}
        </Description>

        <Info>
          Størrelse: {data.width} x {data.height} cm
        </Info>

        <Info>Varenummer (SKU): {data.id}</Info>

        <Price>Pris: {data.price},00 DKK</Price>

        <Buttons>
          <CartButton>Læg i kurv</CartButton>

          <FavoriteButton>♡</FavoriteButton>
        </Buttons>
      </Details>

      <PosterImage src={data.image} alt={data.name} />
    </Product>
  );
}

export default PosterDetail;