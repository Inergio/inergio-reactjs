import React from 'react'
import { Icon } from './icons/Icon';
import { Instagram } from './icons/Instagram';
import { Whatsapp } from './icons/Whatsapp';

function NavDesktop() {
  return (
    <div className='header-nav'>
      <a className="item" href="/sobre-nosotros">
        Sobre nosotros
      </a>
      <a className="item" href="/productos-y-servicios">
        Productos y Servicios
      </a>
      <a className="item" href="/novedades">
        Novedades
      </a>
      <a className="c-btn c-btn-contained-primary not-pill" href="/contacto">
        <Icon iconSvg={<Whatsapp />} />
        Contactar
      </a>
      <a className="c-btn c-btn-text-secondary not-pill" href="https://www.instagram.com/inergio.ingenieria/?hl=es-la" target="_blank">
        <Icon iconSvg={<Instagram />} />
      </a>
    </div>
  )
}

export { NavDesktop }