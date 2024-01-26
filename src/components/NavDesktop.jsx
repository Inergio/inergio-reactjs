import React from 'react'
import { Icon } from './icons/Icon';
import { Instagram } from './icons/Instagram';
import { Link } from 'react-router-dom'

function NavDesktop() {
  return (
    <div className='header-nav'>
      <Link className="item" to="/sobre-nosotros">
        Sobre nosotros
      </Link>
      {/* <Link className="item" to="/productos-y-servicios">
        Productos y Servicios
      </Link> */}
      <Link className="item" to="/novedades">
        Novedades
      </Link>
      <Link className="c-btn c-btn-contained-primary not-pill"  to="https://wa.me/c/5493416590047">
        Contacto
      </Link>
      <Link className="c-btn c-btn-text-secondary not-pill" to="https://www.instagram.com/inergio.ingenieria/?hl=es-la" target="_blank" rel="noreferrer">
        <Icon iconSvg={<Instagram />} />
      </Link>
    </div>
  )
}

export { NavDesktop }