import React from 'react';
import { HomeContainer, HeroSection, HeroTitle, HeroSubtitle, CTAButton } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>PROFESSIONAL CAR DIAGNOSTIC TOOL IN YOUR POCKET</HeroTitle>
        <HeroSubtitle>Scan your car via Wi-Fi, find nearby garages, and predict maintenance needs using AI</HeroSubtitle>
        <CTAButton>Download App</CTAButton>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
