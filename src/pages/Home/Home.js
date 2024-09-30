import React, { useState } from 'react';
import {
    HomeContainer,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    CTAButton,
    AppLinksContainer,
    AppLinkImage,
    SupportedVehiclesSection,
    VehiclesTitle,
    VehiclesGrid,
    VehicleImage,
    VehicleName,
    HowItWorksSection,
    HowItWorksTitle,
    StepsContainer,
    Step,
    StepNumber,
    StepDescription,
    StepArrow,
    DotsContainer,
    Dot,
  } from './Home.styles';
  

import appStoreIcon from './assets/app-store-badge.png';
import googlePlayIcon from './assets/google-play-badge.png';

import carBrand1 from './assets/bmw.svg';
import carBrand2 from './assets/honda.svg';
import carBrand3 from './assets/hyundai.svg';
import carBrand4 from './assets/jeep.svg';
import carBrand5 from './assets/kia.svg';
import carBrand6 from './assets/lexus.svg';
import carBrand7 from './assets/mercedes-benz.svg';
import carBrand8 from './assets/nissan.svg';
import carBrand9 from './assets/tesla.svg';
import carBrand10 from './assets/toyota.svg';
import carBrand11 from './assets/volkswagen.svg';
import carBrand12 from './assets/all-cars.svg';

import arrowIcon from './assets/arrow-right.svg';



const steps = [
    {
      number: '1',
      description: 'Plug the device into your car\'s OBD2 port',
    },
    {
      number: '2',
      description: 'Pair with your Smart Car mobile app',
    },
    {
      number: '3',
      description: 'Enjoy a better driving experience',
    },
  ];
  
  const Home = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleDotClick = (index) => {
      setCurrentStep(index);
    };
  
    return (
      <HomeContainer>
        <HeroSection>
          <HeroTitle>PROFESSIONAL CAR DIAGNOSTIC TOOL IN YOUR POCKET</HeroTitle>
          <HeroSubtitle>Scan your car via Wi-Fi, find nearby garages, and predict maintenance needs using AI</HeroSubtitle>
  
          <AppLinksContainer>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <AppLinkImage src={appStoreIcon} alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <AppLinkImage src={googlePlayIcon} alt="Get it on Google Play" />
            </a>
          </AppLinksContainer>
  
          <CTAButton>Visit shop</CTAButton>
        </HeroSection>

      <SupportedVehiclesSection>
        <VehiclesTitle>SUPPORTED VEHICLES</VehiclesTitle>
        <VehiclesGrid>
          <div>
            <VehicleImage src={carBrand1} alt="BMW" />
            <VehicleName>BMW</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand2} alt="Honda" />
            <VehicleName>Honda</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand3} alt="Hyundai" />
            <VehicleName>Hyundai</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand4} alt="Jeep" />
            <VehicleName>Jeep</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand5} alt="Kia" />
            <VehicleName>Kia</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand6} alt="Lexus" />
            <VehicleName>Lexus</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand7} alt="Mercedes-Benz" />
            <VehicleName>Mercedes-Benz</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand8} alt="Nissan" />
            <VehicleName>Nissan</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand9} alt="Tesla" />
            <VehicleName>Tesla</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand10} alt="Toyota" />
            <VehicleName>Toyota</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand11} alt="Volkswagen" />
            <VehicleName>Volkswagen</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand12} alt="All Cars" />
            <VehicleName>All Brands</VehicleName>
          </div>
        </VehiclesGrid>
      </SupportedVehiclesSection>

      <HowItWorksSection>
        <HowItWorksTitle>HOW DOES IT WORK?</HowItWorksTitle>
        <StepsContainer>
          {steps.map((step, index) => (
            currentStep === index && (
              <Step key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepDescription>{step.description}</StepDescription>
              </Step>
            )
          ))}
        </StepsContainer>

        <DotsContainer>
          {steps.map((_, index) => (
            <Dot key={index} onClick={() => handleDotClick(index)} isActive={index === currentStep} />
          ))}
        </DotsContainer>
      </HowItWorksSection>
    </HomeContainer>
  );
};

export default Home;