import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 1001; /* Corrected here */
  width: 24px;
  height: 24px;

  .hamburger, .close {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .hide {
    opacity: 0;
    transform: rotate(90deg);
  }
`;

export const MenuList = styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  width: 250px;
  height: 18vh;
  background-color: #000;
  padding-top: 4rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

export const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1.60rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: start;
  align-items: center;

  &:hover {
    background-color: #333;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #333;
  margin-left: 1rem;
`;

export const AccountItem = styled(MenuItem)`
  margin-top: 12rem;
  border-bottom: none;
  font-weight: normal;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;
