import React from 'react';
import { HamburgerMenuContainer, IconWrapper, MenuList, MenuItem, Separator, AccountItem } from './HamburgerMenu.styles';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <HamburgerMenuContainer>
      <IconWrapper onClick={toggleMenu}>
        <FaBars className={`hamburger ${isOpen ? 'hide' : ''}`} />
        <FaTimes className={`close ${isOpen ? '' : 'hide'}`} />
      </IconWrapper>
      <MenuList isOpen={isOpen}>
        <MenuItem to="/shop">SHOP</MenuItem>
        <Separator />
        <MenuItem to="/features">FEATURES</MenuItem>
        <Separator />
        <MenuItem to="/one-click-apps">ONE-CLICK APPS</MenuItem>
        <Separator />
        <MenuItem to="/vehicles">VEHICLES</MenuItem>
        <Separator />
        <MenuItem to="/support">SUPPORT</MenuItem>
        <Separator />
        <MenuItem to="/blog">BLOG</MenuItem>
        <Separator />
        <AccountItem to="/account">
          <FaUser />
          ACCOUNT
        </AccountItem>
      </MenuList>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;