import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;

  background-image: url('https://vwcentral.com.au/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/p/r/pro-pack-5.jpg'); 
  background-position: center;
  background-size: cover; 
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(135, 206, 235, 0.6); 
    backdrop-filter: blur(1px);
    z-index: -1;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  background-color: #0066cc;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

export const AppLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const AppLinkImage = styled.img`
  width: 140px;
  height: 42px;
  cursor: pointer;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
