import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;         
  font-size: 3rem;            
  font-weight: normal;        
  margin-bottom: 2rem;        

  span {
    font-weight: bold;        
  }
`;


export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeatureItem = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const AppLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
`;

export const AppLinkImage = styled.img`
  width: 150px; /* Adjust the size as needed */
  cursor: pointer;
`;