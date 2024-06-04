import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  `;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #9fa5b3;
`;

const SubTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 10px;
  line-height: 1.75;
  color: #9fa5b3;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display 2 cards per row by default */
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    /* For screens that are 768px wide and larger */
    grid-template-columns: repeat(4, 1fr); /* Display 4 cards per row */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* Ensure full-width cards */
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, #695eff, #120e38);
  border-radius: 10px;
  padding: 20px;
  margin: 0px;
  width: 100%; /* Make the card take full width of the grid item */
  box-sizing: border-box; /* Ensure padding doesn't affect the card's width */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;





const AboutUsPage = () => {
  return (
    <Container>
     
      <Section>
        <Title>Our Mission</Title>
        <Paragraph>
          At Vehicle GPT, our mission is to revolutionize the way people maintain and repair their vehicles. We aim to make vehicle care accessible, efficient, and hassle-free through the power of artificial intelligence and innovative technology.
        </Paragraph>
      </Section>

      <Section>
        <Title>Who We Are</Title>
        <Paragraph>
          We are a passionate team of AI enthusiasts, automotive experts, and tech innovators dedicated to providing you with the best tools and services for your vehicle needs. With years of experience in the fields of machine learning, computer vision, and automotive technology, we’ve come together to create a solution that bridges the gap between complex automotive knowledge and everyday users.
        </Paragraph>
      </Section>

      <Section>
        <Title>What We Do</Title>
        <CardContainer>
          <Card>
            <SubTitle>Identify Vehicle Parts from Images</SubTitle>
            <Paragraph>
              Have a mystery part in your hand? Simply upload a photo of any vehicle part, and our state-of-the-art image recognition technology will identify it for you. No more guessing or searching through manuals.
            </Paragraph>
          </Card>

          <Card>
            <SubTitle>Detect Damage in Vehicle Parts</SubTitle>
            <Paragraph>
              Unsure if a part is damaged? Our AI can analyze the image to detect signs of wear and tear, helping you determine whether a replacement is necessary.
            </Paragraph>
          </Card>

          <Card>
            <SubTitle>Find Replacement Parts Online</SubTitle>
            <Paragraph>
              Once we’ve identified the part, we provide you with a list of e-commerce websites where you can purchase the exact item. Save time and money by comparing options from multiple sellers.
            </Paragraph>
          </Card>

          <Card>
            <SubTitle>Locate Nearby Mechanics</SubTitle>
            <Paragraph>
              Need professional help? Our geolocation service will locate nearby mechanics and repair shops, so you can get your vehicle back on the road quickly.
            </Paragraph>
          </Card>
        </CardContainer>
      </Section>

      <Section>
        <Title>Our Values</Title>
        <Paragraph>
          Innovation: We continually strive to push the boundaries of what’s possible with AI and technology to deliver cutting-edge solutions.
          Accessibility: We believe in making vehicle maintenance and repair accessible to everyone, regardless of their technical knowledge.
          Reliability: Trust is at the core of our service. We provide accurate, dependable information and solutions you can count on.
          Customer Focus: Your needs are our priority. We design our services with the user in mind, ensuring a seamless and helpful experience.
        </Paragraph>
      </Section>

      <Section>
        <Title>Why Choose Us?</Title>
        <Paragraph>
          Vehicle GPT stands out because of our commitment to quality and user satisfaction. We combine technical expertise with a deep understanding of the automotive industry to offer a unique, valuable service that simplifies your vehicle care process.
        </Paragraph>
      </Section>

      <Section>
        <Title>Join Our Journey</Title>
        <Paragraph>
          We’re excited to have you with us on this journey towards transforming vehicle care. Whether you’re a car owner looking for quick solutions or a mechanic seeking efficient tools, Vehicle GPT is here to assist you every step of the way.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default AboutUsPage;
