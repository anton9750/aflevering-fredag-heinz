import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { breakpoints } from "../GlobalStyles/breakpoints";
import { useCart } from "../Context/useCart"

const Nav = styled.nav`
  display: flex;

  align-items: center;

  justify-content: space-between;


  padding: 1.5rem 2rem;

  background-color: #ffffff;

  border-bottom: 2px solid #f0f0f0;

  width: 100%;

  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  a {
    font-size: 2.2rem;

    font-weight: 900;

    letter-spacing: 1px;

    color: #d97757;

    text-decoration: none;

    font-family: 'Impact', sans-serif;
  }

  @media (max-width: ${breakpoints.mobile}) {
    a {
      font-size: 1.6rem;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;

  list-style: none;

  gap: 2.5rem;

  margin: 0;

  padding: 0;

  li {
    a {
      text-decoration: none;

      color: #2c2c2c;

      font-weight: 500;

      font-size: 0.95rem;

      letter-spacing: 0.5px;

      text-transform: uppercase;

      transition: color 0.2s ease;

      &:hover {
        color: #d97757;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    overflow-x: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    li a {
      font-size: 0.75rem;
    }
  }
`;

const Basket = styled.div`
  a {

    color: #2c2c2c;

    font-size: 1.5rem;

    display: flex;

    align-items: center;

    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
      color: #d97757;
    }
  }
`;

const BasketCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.2rem;
  height: 1.2rem;
  padding: 0 0.3rem;
  margin-left: 0.3rem;
  border-radius: 999px;
  background-color: #d97757;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
`;

const Navbar: React.FC = () => {
  const { items } = useCart();

  return (
    <Nav>
      <Logo>
        <Link to="/">WALLYWOOD</Link>
      </Logo>

      <NavLinks>
        <li><Link to="/">Forside</Link></li>

        <li><Link to="/plakater">Plakater</Link></li>

        <li><Link to="/om-os">Om os</Link></li>

        <li><Link to="/kontakt-os">Kontakt os</Link></li>
        
        <li><Link to="/login">Login</Link></li>
      </NavLinks>

      <Basket>
        <Link to="/kurv" aria-label="Gå til kurv">
          🛒
          {items.length > 0 && <BasketCount>{items.length}</BasketCount>}
        </Link>
      </Basket>
    </Nav>
  );
};

export default Navbar;