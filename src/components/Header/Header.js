import React, { useState } from 'react';
import { HeaderContainer, Logo, Nav, NavItem, RightSection } from './Header.styles';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import logoImage from './smart-Garage-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src={logoImage} alt="Smart Garage Logo" />
          Smart Garage
        </Link>
      </Logo>
      <Nav>
        <NavItem  to="/services-page">
          AI powered App
        </NavItem>
        <NavItem  to="/shop">
          Shop
        </NavItem>
      </Nav>
      <RightSection>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/* <UserIcon>
          <FaUser />
        </UserIcon> */}
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
