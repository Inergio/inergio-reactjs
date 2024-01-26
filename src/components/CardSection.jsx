import React from 'react'
import { CardHome } from './CardHome';
import imagen1 from '../assets/landing/Calefacción.webp';

function CardSection() {
  const cardsArray = [
    {
      image: imagen1,
      name: "Empresa 1",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    {
      image: imagen1,
      name: "Empresa 2",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    {
      image: imagen1,
      name: "Empresa 3",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    {
      image: imagen1,
      name: "Empresa 4",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    {
      image: imagen1,
      name: "Empresa 5",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    {
      image: imagen1,
      name: "Empresa 6",
      date: "12/11/2023",
      data: "Estuvimos en una capacitacion para mejorar el servicio que brindamos. Nuestros profesionales se especializaron en las ultimás tecnologías de refrigeración",
      link: "/novedades#id"
    },
    
  ]

  return (
    <section className="section-home section-home--card">
      <div className="section__title">
        Novedades
      </div>

      <div className="section__grid">
        {cardsArray.map((card, index) => (
          <CardHome key={index} card={card} />
        ))}
      </div>
    </section>
  )
}

export { CardSection }