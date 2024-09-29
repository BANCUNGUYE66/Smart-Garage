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
  width: 140px;  /* Set a common width */
  height: 42px;  /* Set a common height */
  cursor: pointer;
  object-fit: contain;  /* Ensure image scales while keeping aspect ratio */
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;