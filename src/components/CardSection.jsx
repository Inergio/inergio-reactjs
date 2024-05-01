import React from "react";
import { CardHome } from "./CardHome";
import imagen2 from "../assets/landing/sponsor-torneo-rugby.webp";
import imagen3 from "../assets/landing/colegio-cayetano.webp";
import imagen4 from "../assets/landing/ypf-opessa.webp";
import imagen5 from "../assets/landing/heroica-panaderia.webp";
import imagen6 from "../assets/landing/la-fazenda.webp";
import imagen7 from "../assets/landing/certificacion-inverter.webp";
function CardSection() {
  const cardsArray = [
    {
      image: imagen2,
      name: "SPONSOR Torneo Regional de Rugby",
      date: "03/2024",
      data: "Acompañaremos los partidos de todo el certamen siendo sponsor del XXV Torneo Litoral - Unión de Rugby Rosario.",
      link: "/novedades",
    },
    {
      image: imagen3,
      name: "Colégio Cayetano Errico (Capitán Bermúdez) 2",
      date: "03/2024",
      data: "Llevamos a cabo una gran obra eléctrica que incluye nuevo cableado de todo el establecimiento, montaje de nuevos tableros seccionales y general.",
      link: "/novedades",
    },
    {
      image: imagen4,
      name: "YPF OPESSA (Rosario)",
      date: "03/2024",
      data: "Relevamientos y prestación de servicios de climatización.",
      link: "/novedades",
    },
    {
      image: imagen5,
      name: "Heroica - Panadería Del Bien (Rosario)",
      date: "03/2024",
      data: "Servicios energéticos y de climatización",
      link: "/novedades",
    },
    {
      image: imagen6,
      name: "La Fazenda - Café (Fisherton Plaza, Funes)",
      date: "03/2024",
      data: "Servicios de climatización.",
      link: "/novedades",
    },
    {
      image: imagen7,
      name: "Certificación Sistemas INVERTER",
      date: "11/2023",
      data: "",
      link: "/novedades",
    },
  ];

  return (
    <section className="section-home section-home--card">
      <div className="section__title">Novedades</div>

      <div className="section__grid">
        {cardsArray.map((card, index) => (
          <CardHome key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

export { CardSection };
