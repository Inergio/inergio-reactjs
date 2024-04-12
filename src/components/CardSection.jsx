import React from 'react'
import { CardHome } from './CardHome';
import imagen1 from '../assets/landing/Calefacción.webp';

function CardSection() {
  const cardsArray = [
    {
      image: imagen1,
      name: "SPONSOR Torneo Regional de Rugby",
      date: "03/2024",
      data: "Acompañaremos los partidos de todo el certamen siendo sponsor del XXV Torneo Litoral - Unión de Rugby Rosario.",
      link: "/novedades"
    },
    {
      image: imagen1,
      name: "Colégio Cayetano Errico (Capitán Bermúdez) 2",
      date: "03/2024",
      data: "Llevamos a cabo una gran obra eléctrica que incluye nuevo cableado de todo el establecimiento, montaje de nuevos tableros seccionales y general.",
      link: "/novedades"
    },
    {
      image: imagen1,
      name: "YPF OPESSA (Rosario)",
      date: "03/2024",
      data: "Relevamientos y prestación de servicios de climatización.",
      link: "/novedades"
    },
    {
      image: imagen1,
      name: "Heroica - Panadería Del Bien (Rosario)",
      date: "03/2024",
      data: "Servicios energéticos y de climatización",
      link: "/novedades"
    },
    {
      image: imagen1,
      name: "La Fazenda - Café (Fisherton Plaza, Funes)",
      date: "03/2024",
      data: "Servicios de climatización.",
      link: "/novedades"
    },
    {
      image: imagen1,
      name: "Certificación Sistemas INVERTER",
      date: "11/2023",
      data: "",
      link: "/novedades"
    },
    
  ]

  return (
    <section className="section-home section-home--card">
      <div className="section__title">
        Novedades
      </div>

      <div className="section__grid">
        {cardsArray.map((card, index) => (
          <CardHome key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}

export { CardSection }