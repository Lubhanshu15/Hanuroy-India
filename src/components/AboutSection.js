import styled from 'styled-components';

const About = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

function AboutSection() {
  return (
    <About id="about">
      <Title>About Us</Title>
      <Text>
        Hanuroy is a startup dedicated to transforming E-Rickshaws into moving billboards, providing a unique and effective advertising platform. Our mission is to help businesses reach their target audience in a dynamic and engaging way.
      </Text>
    </About>
  );
}

export default AboutSection;