import styled from "styled-components";
import { breakpoints } from "../../GlobalStyles/breakpoints";

const Footer = styled.footer`
  background-color: #fcfcfc;
  color: #000;
  padding: 10px 22px;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
`;

//selve stylingen af min footer

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 120px 150px;
  column-gap: 25px;

  align-items: start;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;

//SELVE STYLINGER AF DIVEN SOM INDEHOLDER DATAEN

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h2`
  margin: 0 0 4px;
  color: #b9873c;
  font-size: 13px;
`;

const Info = styled.p`
  margin: 1px 0;
  line-height: 1.3;
  font-size: 9px;
  color: #000;
`;

function Footeren() {
  return (
    <Footer>
      <FooterContent>

        //venstre
        <FooterColumn>
          <CompanyName>WALLYWOOD</CompanyName>
          <Info>Øster Uttrupvej 1</Info>
          <Info>9000 Aalborg</Info>
        </FooterColumn>

        //højre
        <FooterColumn>
          <Info>CVR: 12345678</Info>
          <Info>MAIL: info@wallywood.dk</Info>
          <Info>MOBIL: +45 9812 3456</Info>
        </FooterColumn>

      </FooterContent>
    </Footer>
  );
}

export default Footeren;