import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Row, Col, Image } from 'react-bootstrap';
import AccordionUsage from '../components/AccordianUsage';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const Banner = styled.div`
  width: 100%; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-image: url('/images/shadow.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  
  @media (min-width: 768px) {
    height: 300px; /* Adjust the height for larger screens */
    width: 100%;
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-top: -16rem;
  font-weight: bold;
  color: white !important;
`;

const SubTitle = styled.h2`
  font-size: 1.9rem;
  margin-bottom: 1rem;
  color: #9fa5b3;
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 10px;
`;





const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-color: #695eff !important;
  color: ${({ theme }) => theme.colors.text};
  background-color: #020014;
  border: 2px solid #120e38;
  border-radius: 5px;
  cursor: pointer;
  color: white ;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #120e38;
    border-color: #695eff;
    color: white;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #120e38;
  color: white;
  border-color: #695eff !important;

  &:hover {
    background-color: #695eff;
    border-color: #695eff;
  }
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  color: #9fa5b3;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;




const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chatbot');
  };

  const handleGetStartedAbout = () => {
    navigate('/aboutus');
  };

  return (
    <Container>
      <Banner />
      <Content>
        <Title>Welcome to Vehicle GPT</Title>
        <SubTitle>Your Personal Automotive Assistant</SubTitle>
        <ButtonContainer>
          <PrimaryButton onClick={handleGetStarted}>Get Started</PrimaryButton>
          <Button onClick={handleGetStartedAbout}>Learn More</Button>
        </ButtonContainer>
      </Content>

      <StyledHeading>What can Vehicle GPT do for you ?</StyledHeading>


      <Row xs={2} md={4} className="g-3">

        <Col>
          <Card style={{ width: '18rem', marginTop: "20px", background: 'linear-gradient(135deg, #695eff, #120e38)', color: 'white' }}>
            <Card.Body>
              <Card.Title>Detect Damage in Vehicle Parts</Card.Title>
              <Card.Text>
                Unsure if a part is damaged? Our AI can analyze the image to detect signs of wear and tear, helping you determine whether a replacement is necessary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', marginTop: "20px", background: 'linear-gradient(135deg, #695eff, #120e38)', color: 'white' }}>
            <Card.Body>
              <Card.Title>Detect Damage in Vehicle Parts</Card.Title>
              <Card.Text>
                Unsure if a part is damaged? Our AI can analyze the image to detect signs of wear and tear, helping you determine whether a replacement is necessary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', marginTop: "20px", background: 'linear-gradient(135deg, #695eff, #120e38)', color: 'white' }}>
            <Card.Body>
              <Card.Title>Detect Damage in Vehicle Parts</Card.Title>
              <Card.Text>
                Unsure if a part is damaged? Our AI can analyze the image to detect signs of wear and tear, helping you determine whether a replacement is necessary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', marginTop: "20px", background: 'linear-gradient(135deg, #695eff, #120e38)', color: 'white' }}>
            <Card.Body>
              <Card.Title>Detect Damage in Vehicle Parts</Card.Title>
              <Card.Text>
                Unsure if a part is damaged? Our AI can analyze the image to detect signs of wear and tear, helping you determine whether a replacement is necessary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <div style={{ marginTop: '40px', marginBottom: "20px" }}>
        <StyledHeading>How It Works</StyledHeading>
        <AccordionUsage />
      </div>

    </Container>
  );
};

export default HomePage;


