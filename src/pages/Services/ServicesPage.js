import React from 'react';
import obdelevenDevice from '../Home/assets/take-this-track-master.jpg';
import {
  OBDelevenSection,
  OBDelevenContent,
  OBDelevenImage, 
} from '../Home/Home.styles';
import {
  FeatureItem,
  FeaturesContainer,
  AppLinksContainer,
  AppLinkImage,
} from './ServicesPage.styles'

import { Title } from './ServicesPage.styles';
import appStoreIcon from '../Home/assets/app-store-badge.png';
import googlePlayIcon from '../Home/assets/google-play-badge.png';



const ServicesPage = () => {
  return (
    <OBDelevenSection>
      <Title><span>ONE-CLICK</span> APPS</Title> 
      <OBDelevenContent>
        <OBDelevenImage src={obdelevenDevice} alt="OBDeleven NextGen Device" />
        <div>
          <h2>Change car behavior just in one click</h2>
          <p>
          Car feature customization is a great way to create a unique and truly personalized driving experience. There are so many different features and functionalities that can help do that, but they require knowledge and experience to activate.  

Discover One-Click Apps – pre-made coding applications that give all users – daily drivers and professionals – more control over their vehicles. With these ready-made applications, users can choose from thousands of One-Click Apps to activate or deactivate comfort features, enable various customization functions, and even – unlock manufacturer-hidden car features.  
 
One-Click Apps are available for Volkswagen Group (VAG), BMW Group and Toyota Group models.
          </p>
         {/* <LearnMoreLink href="#">Learn more →</LearnMoreLink> */}
        </div>
      </OBDelevenContent>
      <FeaturesContainer>
        <FeatureItem>
          <h3>Adjustments</h3>
          <p>Adjust different car settings and customize them to suit your individual driving needs in no time.</p>
        </FeatureItem>
        <FeatureItem>
          <h3>Retrofits</h3>
          <p>Easily adapt additional vehicle parts after installation.</p>
        </FeatureItem>
        <FeatureItem>
          <h3>Workshops</h3>
          <p>Save valuable time and money on performing various car maintenance tasks.</p>
        </FeatureItem>
      </FeaturesContainer>
      <AppLinksContainer>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <AppLinkImage src={appStoreIcon} alt="Download on the App Store" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <AppLinkImage src={googlePlayIcon} alt="Get it on Google Play" />
        </a>
      </AppLinksContainer>
    </OBDelevenSection>
  );
};

export default ServicesPage;
