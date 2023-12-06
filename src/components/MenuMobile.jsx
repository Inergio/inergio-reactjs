import React, { useState, useEffect } from 'react';
import { Icon } from './icons/Icon';
import { Logo } from './icons/Logo';
import { MenuIcon } from './icons/MenuIcon';
import { ChevronLeft } from './icons/ChevronLeft';
import { ChevronRight } from './icons/ChevronRight';
import { Close } from './icons/Close';

function MenuMobile() {
  const [menuState, setMenuState] = useState({
    currentStep: 1,
    categoryToShow: null,
    backButtonVisible: false,
    menuOpen: false,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleWindowResize);

    const menu = document.querySelector('.c-menu')

    menu.addEventListener('click', event => {
      if (event.target.classList.contains('category-link')) {
        closeMenu();
      } else if (event.target.classList.contains('list-item--with-sublist')) {
        showSublist(event.target);
      }
    })

    if (menuState.currentStep === 1) {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: false,
      }));
    }
    else {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: true,
      }));
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [menuState.currentStep]);

  const openMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      menuOpen: true,
    }));
  };

  const closeMenu = () => {
    resetMenu();
  };

  const showSublist = (button) => {
    setMenuState((prevState) => ({
      ...prevState,
      categoryToShow: button.dataset.category,
    }));
    showNextStep();
  };
  
  const showNextStep = () => {
    setMenuState((prevState) => ({
      ...prevState,
      currentStep: menuState.currentStep + 1,
    }));
  };
  
  const showPrevStep = () => {
    setMenuState((prevState) => ({
      ...prevState,
      currentStep: menuState.currentStep - 1,
    }));
  };
  
  const resetMenu = () => {
    setMenuState({
      currentStep: 1,
      categoryToShow: null,
      backButtonVisible: false,
      menuOpen: false,
    });
  };

  return (
    <>
      <div className="c-menu__open" onClick={openMenu}>
        <Icon iconSvg={<MenuIcon />} />
      </div>

      <div className={`c-menu__overlay ${menuState.menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <div className={`c-menu ${menuState.menuOpen ? 'show' : ''}`}>
        <div className="c-menu__header">
          <button className={`menu-header__back ${menuState.backButtonVisible ? 'show' : ''}`} onClick={showPrevStep}>
            <Icon iconSvg={<ChevronLeft />} />
          </button>

          <a href='/' className="header__logo">
            <Icon iconSvg={<Logo />} />
          </a>

          <button className="menu-header__close" aria-label="Cerrar menú" onClick={closeMenu}>
            <Icon iconSvg={<Close />} />
          </button>
        </div>

        <div className="c-menu__list">
          <ul className={`menu-list menu-list--step-1 ${menuState.currentStep > 1 ? 'prev' : ''}`}>

            <a className="list-item" href="/">
              Inicio
            </a>

            {/* <div className="list-item list-item--with-sublist" data-category="categories">
              Categorías

              <div className="sublist-toggler">
                <Icon iconSvg={<ChevronRight />} />
              </div>
            </div> */}

            <a className="list-item" href="/sobre-nosotros">
              Sobre nosotros
            </a>
            <a className="list-item" href="/productos-y-servicios">
              Productos y Servicios
            </a>
            <a className="list-item" href="/novedades">
              Novedades
            </a>
            <a className="list-item" href="/contacto">
              Contacto
            </a>
          </ul>

          <div className={`menu-list menu-list--step-2 ${menuState.currentStep < 2 ? 'next' : (menuState.currentStep > 2 
          ? 'prev' : '')}`}>
            <ul className={`menu-list__category ${menuState.categoryToShow === 'categories' ? 'show' : ''}`} data-category-list="categories">
              <div className="menu-list__title">
                Categorías
              </div>

              <a className="list-item" href="/empresa">
                Empresa
              </a>
              <a className="list-item" href="/contacto">
                Contacto
              </a>
              <a className="list-item" href="/preguntas_frecuentes">
                Preguntas frecuentes
              </a>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export { MenuMobile }