import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
`;

const Headline = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtext = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  font-family: ${props => props.theme.fonts.main};
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;


const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
  border-radius: 10px;
`;



//function HeroSection({ setShowSignup }) {
// return (
//    <Hero id="home">
//      <Headline>Transforming E-Rickshaws into Moving Billboards</Headline>
  //    <Subtext>Advertise smarter with real-time tracking and analytics.</Subtext>
    //  <div>
      //  <Button onClick={() => setShowSignup(true)}>Get Started</Button>
        //<Button as="a" href="#services">Learn More</Button>
      //</div>
    //</Hero>
  //);
//}
function HeroSection({ setShowSignup }) {
  return (
    <Hero
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Headline>Transforming E-Rickshaws into Moving Billboards</Headline>
      <Subtext>Advertise smarter with real-time tracking and analytics.</Subtext>
      <div>
        <Button onClick={() => setShowSignup(true)}>Get Started</Button>
        <Button as="a" href="#services">Learn More</Button>
      </div>
    </Hero>
  );
}

export default HeroSection;