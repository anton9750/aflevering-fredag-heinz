import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../Context/useCart"
import { breakpoints } from "../GlobalStyles/breakpoints";

const Wrapper = styled.section`
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0 0 1.5rem;
`;

const EmptyText = styled.p`
  font-size: 1rem;
`;

const CartItemRow = styled.article`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

const ItemImage = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 0.4rem;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const ItemQuantity = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #d9c0b5;
  border: 1px solid #8c756d;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a4;
  }
`;

const Summary = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

function CartPage() {
  const { items, removeFromCart } = useCart();

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

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <Wrapper>
      <Title>Din kurv</Title>

      {items.map((item) => (
        <CartItemRow key={item.id}>
          <ItemImage src={item.image} alt={item.name} />

          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>Pris: {item.price},00 DKK</ItemPrice>
            <ItemQuantity>Antal: {item.quantity}</ItemQuantity>
          </ItemInfo>

          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Fjern
          </RemoveButton>
        </CartItemRow>
      ))}

      <Summary>
        <Total>Total: {total},00 DKK</Total>
      </Summary>
    </Wrapper>
  );
}

export default CartPage;