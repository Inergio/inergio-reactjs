import React, { useState, useEffect } from 'react';
import { Icon } from './icons/Icon';
import { Logo } from './icons/Logo';
import { MenuMobile } from './MenuMobile';
import { NavDesktop } from './NavDesktop';
import { Link } from 'react-router-dom'


function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__wrapper">
        {!isDesktop && <MenuMobile />}
        <Link to='/' className="header__logo">
          <Icon iconSvg={<Logo />} />
        </Link>
        {isDesktop && <NavDesktop />}
      </div>
    </header>
  )
}

export default Header