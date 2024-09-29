import React, { useState } from 'react';
import { HeaderContainer, Logo, Nav, NavItem, RightSection, UserIcon } from './Header.styles';
import { FaUser } from 'react-icons/fa';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>OBDeleven</Logo>
      <Nav>
        <NavItem to="/shop">SHOP</NavItem>
        <NavItem to="/features">FEATURES</NavItem>
        <NavItem to="/vehicles">VEHICLES</NavItem>
        <NavItem to="/support">SUPPORT</NavItem>
        <NavItem to="/blog">BLOG</NavItem>
      </Nav>
      <RightSection>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <UserIcon>
          <FaUser />
        </UserIcon>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;