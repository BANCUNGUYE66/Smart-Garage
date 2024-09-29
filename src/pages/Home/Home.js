import React from 'react';
import { HomeContainer, HeroSection, HeroTitle, HeroSubtitle, CTAButton, AppLinksContainer, AppLinkImage } from './Home.styles';
import appStoreIcon from './assets/app-store-badge.png';
import googlePlayIcon from './assets/google-play-badge.png';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>PROFESSIONAL CAR DIAGNOSTIC TOOL IN YOUR POCKET</HeroTitle>
        <HeroSubtitle>Scan your car via Wi-Fi, find nearby garages, and predict maintenance needs using AI</HeroSubtitle>
        <CTAButton>Download App</CTAButton>

        <AppLinksContainer>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <AppLinkImage src={appStoreIcon} alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <AppLinkImage src={googlePlayIcon} alt="Get it on Google Play" />
          </a>
        </AppLinksContainer>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
