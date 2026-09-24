import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../Context/useCart";
import { breakpoints } from "../GlobalStyles/breakpoints";

// Wrapper til hele kurvsiden
const Wrapper = styled.section`
  padding: 2rem 1rem;
`;

// Overskrift til siden
const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
`;

// Tekst når kurven er tom
const EmptyText = styled.p`
  font-size: 1rem;
`;

// Række for hvert produkt i kurven
const CartItemRow = styled.article`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;

  // Tilpasning til mobil
  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

// Styling af produktbilledet
const ItemImage = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
`;

// Indeholder information om produktet
const ItemInfo = styled.div`
  flex: 1;
`;

// Produktets navn
const ItemName = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.4rem;
`;

// Produktets pris
const ItemPrice = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

// Container til antal og plus/minus-knapper
const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.4rem;
  font-size: 0.9rem;
`;

// Knap til at ændre antal (plus og minus)
const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cdb0a4;
  }
`;

// Knap til at fjerne produktet
const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cdb0a4;
  }
`;

// Viser samlet pris
const Summary = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styling af totalprisen
const Total = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

// Komponent til kurvsiden
function CartPage() {

  // Henter varer og funktioner fra context
  const { items, removeFromCart, updateQuantity } = useCart();

  // Viser besked hvis kurven er tom
  if (items.length === 0) {
    return (
      <Wrapper>
        <Title>Din kurv</Title>
        <EmptyText>
          Din kurv er tom. <Link to="/plakater">Find en plakat</Link>
        </EmptyText>
      </Wrapper>
    );
  }

  // Beregner den samlede pris
  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <Wrapper>
      <Title>Din kurv</Title>

      {/* Gennemgår alle varer i kurven */}
      {items.map((item) => (
        <CartItemRow key={item.id}>

          {/* Viser produktets billede */}
          <ItemImage src={item.image} alt={item.name} />

          <ItemInfo>

            {/* Viser produktets information */}
            <ItemName>{item.name}</ItemName>
            <ItemPrice>Pris: {item.price},00 DKK</ItemPrice>

            {/* Knapper til at ændre antal */}
            <ItemQuantity>
              <QuantityButton
                aria-label={`Færre af ${item.name}`}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                −
              </QuantityButton>

              <span>Antal: {item.quantity}</span>

              <QuantityButton
                aria-label={`Flere af ${item.name}`}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </QuantityButton>
            </ItemQuantity>
          </ItemInfo>

          {/* Fjerner produktet fra kurven */}
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Fjern
          </RemoveButton>
        </CartItemRow>
      ))}

      {/* Viser samlet pris */}
      <Summary>
        <Total>Total: {total},00 DKK</Total>
      </Summary>
    </Wrapper>
  );
}

export default CartPage;