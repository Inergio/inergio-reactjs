import React from 'react'
import { Icon } from './icons/Icon';
import { MenuIcon } from './icons/MenuIcon';
import { Logo } from './icons/Logo';
import { MenuMobile } from './MenuMobile';

function Header() {
  return (
    <header className="header">
      <MenuMobile />

      <a href='/' className="header__logo">
        <Icon iconSvg={<Logo />} />
      </a>
      
    </header>
  )
}

export default Header