import React from 'react'
import facebookLogo from '../assets/social/facebook.png'
import instagramLogo from '../assets/social/instagram.png'
import linkedinLogo from '../assets/social/linkedin.png'
import whatsappLogo from '../assets/social/whatsapp.png'

function UsNetworks() {
  const networks = [
    {
      src : facebookLogo,
      link : "https://www.facebook.com/profile.php?id=100084586784225",
    },
    {
      src : instagramLogo,
      link : "https://www.instagram.com/inergio.ingenieria/?hl=es-la",
    },
    {
      src : linkedinLogo,
      link : "https://www.linkedin.com/in/inergio-ingenier%C3%ADa-788135279/",
    },
    {
      src : whatsappLogo,
      link : "https://www.facebook.com/profile.php?id=100084586784225",
    },
  ]

  return (
    <section className="section section--us-networks">
      <div className="section__title">
        Nuestras redes
      </div>

      <div className="section__subtitle">
        Encontranos en todas las redes sociales como Inergio Ingenieria o hace click en uno de los siguientes enlaces.
      </div>

      <div className="section__items">
        {networks.map((network, index) => (
          <a href={network.link} target="_blank" key={index}>
            <img src={network.src} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}

export { UsNetworks }