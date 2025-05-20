import styled from 'styled-components';
import { FaMapMarkedAlt, FaChartLine, FaLightbulb } from 'react-icons/fa';

const Features = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 10px;
  padding: 2rem;
  width: 250px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
`;

function FeatureSection() {
  return (
    <Features id="services">
      <Title>Why Advertise With Us?</Title>
      <CardContainer>
        <Card>
          <Icon><FaMapMarkedAlt /></Icon>
          <CardTitle>Real-Time Tracking</CardTitle>
          <CardText>Monitor ad campaigns as they move through the city.</CardText>
        </Card>
        <Card>
          <Icon><FaChartLine /></Icon>
          <CardTitle>Road Attraction Analytics</CardTitle>
          <CardText>Gain insights into ad engagement.</CardText>
        </Card>
        <Card>
          <Icon><FaLightbulb /></Icon>
          <CardTitle>Unique Ad Formats</CardTitle>
          <CardText>Stand out with dynamic screens on e-rickshaws.</CardText>
        </Card>
      </CardContainer>
    </Features>
  );
}

export default FeatureSection;