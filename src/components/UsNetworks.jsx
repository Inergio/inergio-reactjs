import React from "react";
import facebookLogo from "../assets/social/facebook.webp";
import instagramLogo from "../assets/social/instagram.webp";
import linkedinLogo from "../assets/social/linkedin.webp";
import whatsappLogo from "../assets/social/whatsapp.webp";

function UsNetworks() {
  const networks = [
    {
      src: facebookLogo,
      link: "https://www.facebook.com/profile.php?id=100084586784225",
    },
    {
      src: instagramLogo,
      link: "https://www.instagram.com/inergio.ingenieria/?hl=es-la",
    },
    {
      src: linkedinLogo,
      link: "https://www.linkedin.com/company/inergio-ingenier%C3%ADa/?originalSubdomain=ar",
    },
    {
      src: whatsappLogo,
      link: "https://wa.me/c/5493416590047",
    },
  ];

  return (
    <section className="section-home section-home--us-networks">
      <div className="section__title">Nuestras redes</div>

      <div className="section__subtitle">
        Encontranos en todas las redes sociales como Inergio Ingenieria o hace
        click en uno de los siguientes enlaces.
      </div>

      <div className="section__items">
        {networks.map((network, index) => (
          <a href={network.link} target="_blank" key={index} rel="noreferrer">
            <img src={network.src} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}

export { UsNetworks };
