import styled from "styled-components";
import { FaPinterest, FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { breakpoints } from "../../GlobalStyles/breakpoints";
import footerBg from "../../assets/pngtree-newspaper-textured-background-with-grunge-and-vintage-elements-in-a-white-image_17281530.jpg"


//jeg ved godt det er et langt import navn til billedet !:))
const Footer = styled.footer`
  font-family: "Open Sans", Arial, sans-serif;

  background-image:

    linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.4) 100%),
    
    url(${footerBg});


  background-size: cover;


  background-position: center;

  color: #333;

  padding: 15px 40px;

  margin-top: auto;
`;

const FooterContent = styled.div`

  display: grid;

  grid-template-columns: 255px 1fr auto;

  align-items: start;

  @media (max-width: ${breakpoints.mobile}) {

    grid-template-columns: 1fr;

    row-gap: 10px;
  }
`;

const FooterColumn = styled.div`

  display: flex;

  flex-direction: column;
`;

const CompanyName = styled.h1`

  margin: 0 0 4px;

  color: #d4694c;

  font-size: 16px;

  font-weight: 700;
`;

const Info = styled.p`

  margin: 2px 0;

  line-height: 1.3;

  font-size: 15px;

  color: #333;
`;

const Social = styled.div`

  display: flex;


  gap: 4px;

  font-size: 30px;

  color: #999;
`;

function Footeren() {
  return (
    <Footer>
      <FooterContent>
        <FooterColumn>
          <CompanyName>WALLYWOOD</CompanyName>
          <Info>Øster Uttrupvej 1</Info>
          <Info>9000 Aalborg</Info>
        </FooterColumn>

        <FooterColumn>
          <Info>CVR: 12345678</Info>
          <Info>MAIL: info@wallywood.dk</Info>
          <Info>MOBIL: +45 9812 3456</Info>
        </FooterColumn>

        <Social>
          <FaPinterest />
          <FaInstagram />
          <FaFacebookSquare />
          <FaTwitterSquare />
        </Social>
      </FooterContent>
    </Footer>
  );
}

export default Footeren;