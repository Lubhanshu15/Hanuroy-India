// src/components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 2rem;
  text-align: center;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Hanuroy. All rights reserved.</p>
      <div>
        <FooterLink href="https://twitter.com">Twitter</FooterLink>
        <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
        <FooterLink href="#contact">Contact Us</FooterLink>
      </div>
    </FooterContainer>
  );
}

export default Footer;