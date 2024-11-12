import React from 'react';
import { HamburgerMenuContainer, IconWrapper, MenuList, MenuItem, Separator } from './HamburgerMenu.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <HamburgerMenuContainer>
      <IconWrapper onClick={toggleMenu}>
      <FaBars className={`hamburger ${isOpen ? 'hide' : ''}`} />
      <FaTimes className={`close ${isOpen ? '' : 'hide'}`} />
      </IconWrapper>
      <MenuList isOpen={isOpen}>
        <MenuItem as={Link} to="/services-page" onClick={toggleMenu}>
          AI powered App
        </MenuItem>
        <MenuItem as={Link} to="/shop" onClick={toggleMenu}>
          Shop
        </MenuItem>
        <Separator />
        {/* <AccountItem as={Link} to="/account" onClick={toggleMenu}>
          <FaUser />
          ACCOUNT
        </AccountItem> */}
      </MenuList>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
