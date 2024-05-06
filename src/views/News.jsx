import React, { useEffect, useRef } from "react";
import imagen2 from "../assets/landing/sponsor-torneo-rugby.webp";
import imagen3 from "../assets/landing/colegio-cayetano.webp";
import imagen4 from "../assets/landing/ypf-opessa.webp";
import imagen5 from "../assets/landing/heroica-panaderia.webp";
import imagen6 from "../assets/landing/la-fazenda.webp";
import imagen7 from "../assets/landing/certificacion-inverter.webp";
function News() {
  const arrayImgRef = useRef([]);
  let loadedImgs;

  const scrollToNews = () => {
    const hash = window.location.hash;

    // Si no hay que redireccionar a ninguna novedad sale de la funcion
    if (hash.length === 0) return;

    const newsElement = document.querySelector(hash);

    if (newsElement) {
      const offsetTop = newsElement.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleImagenCargada = () => {
    if (loadedImgs) return;

    loadedImgs = arrayImgRef.current.every((imagen) => imagen.complete);

    if (loadedImgs) {
      scrollToNews();
    }
  };

  useEffect(() => {
    const imagenes = document.querySelectorAll("img");

    arrayImgRef.current = Array.from(imagenes);

    arrayImgRef.current.forEach((imagen) => {
      imagen.addEventListener("load", handleImagenCargada);
    });

    return () => {
      arrayImgRef.current.forEach((imagen) => {
        imagen.removeEventListener("load", handleImagenCargada);
      });
    };
  }, []);

  return (
    <div className="page">
      <div className="page__top">
        <div className="page__title">Novedades</div>
      </div>
      <div className="page-content page-content--news">
        <div className="news-card" id="news-card-0">
          <div className="news-card__img">
            <img className="" src={imagen2} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">SPONSOR Torneo Regional de Rugby</div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text">
              Acompañaremos los partidos de todo el certamen siendo sponsor del
              XXV Torneo Litoral - Unión de Rugby Rosario.
            </div>
          </div>
        </div>
        <div className="news-card" id="news-card-1">
          <div className="news-card__img">
            <img className="" src={imagen3} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">
                Colégio Cayetano Errico (Capitán Bermúdez) 2
              </div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text">
              Llevamos a cabo una gran obra eléctrica que incluye nuevo cableado
              de todo el establecimiento, montaje de nuevos tableros seccionales
              y general.
            </div>
          </div>
        </div>
        <div className="news-card" id="news-card-2">
          <div className="news-card__img">
            <img className="" src={imagen4} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">YPF OPESSA (Rosario)</div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text">
              Relevamientos y prestación de servicios de climatización.
            </div>
          </div>
        </div>
        <div className="news-card" id="news-card-3">
          <div className="news-card__img">
            <img className="" src={imagen5} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">
                Heroica - Panadería Del Bien (Rosario)
              </div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text">Servicios energéticos y de climatización</div>
          </div>
        </div>
        <div className="news-card" id="news-card-4">
          <div className="news-card__img">
            <img className="" src={imagen6} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">
                La Fazenda - Café (Fisherton Plaza, Funes)
              </div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text">Servicios de climatización.</div>
          </div>
        </div>
        <div className="news-card" id="news-card-5">
          <div className="news-card__img">
            <img className="" src={imagen7} loading="lazy" />
          </div>
          <div className="news-card__content">
            <div className="date-title-container">
              <div className="title">Certificación Sistemas INVERTER</div>
              <div className="card__date">23/04/2003</div>
            </div>
            <div className="text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { News };
