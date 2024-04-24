import React, { useEffect, useRef } from "react";
import imgMain from "../assets/landing/Home.webp";
import imgSection1 from "../assets/landing/section1.png";
import imgSection3 from "../assets/landing/section3.webp";
import logoHome from "../assets/landing/logo-home.webp";
import { ProductsAndServices } from "../components/ProductsAndServices";
import "swiper/css/bundle";

function LandingSection(props) {
  const { name, infoPosition } = props.section;
  const landingSectionInfoRefs = useRef([]);
  const section = useRef(null);

  useEffect(() => {
    const landingSections = document.querySelectorAll(
      ".landing-section.bottom, .landing-section.left, .landing-section.right"
    );

    const handleScroll = () => {
      landingSections.forEach((section, index) => {
        const landingSectionInfo = section.querySelector(
          ".landing-section__info"
        );

        if (section && landingSectionInfo) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 500) {
            landingSectionInfo.classList.add("show");
          } else {
            landingSectionInfo.classList.remove("show");
          }
        }
      });
    };

    // Inicializa las referencias cuando el componente se monta
    landingSectionInfoRefs.current = Array.from(
      { length: landingSections.length },
      () => React.createRef()
    );

    // Agrega el evento scroll al documento
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  useEffect(() => {
    const landingSectionCurrent = section.current;
    const isLeftOrRight =
      landingSectionCurrent.classList.contains("left") ||
      landingSectionCurrent.classList.contains("right");

    if (isLeftOrRight && window.innerWidth >= 768) {
      const infoHeight = section.current.querySelector(
        ".landing-section__info"
      ).offsetHeight;
      landingSectionCurrent.style.height = infoHeight + "px";
    }
  }, []);

  return (
    <section
      ref={section}
      className={`landing-section ${name} ${infoPosition}`}
    >
      <div className="landing-section__main" style={{ height: "100%" }}>
        {name !== "productsAndServices" && (
          <div className="landing-section__background-wrapper">
            {name === "main" && (
              <img
                className="landing-section__background"
                src={imgMain}
                loading="lazy"
                alt=""
              />
            )}
            {name === "renewableEnergy" && (
              <img
                className="landing-section__background"
                src={imgSection1}
                loading="lazy"
                alt=""
              />
            )}
            {name === "aboutUs" && (
              <img
                className="landing-section__background"
                src={imgSection3}
                loading="lazy"
                alt=""
              />
            )}
          </div>
        )}

        {name === "productsAndServices" && <ProductsAndServices />}
      </div>

      <div className="landing-section__info">
        {name === "main" && (
          <>
            <img
              className="info-image"
              src={logoHome}
              loading="lazy"
              alt="Un aire acondicionado del lado izquierdo de la imagen y en el fondo un cielo azul y despejado"
            />
            {/* <h2 className='title'>Inergio Ingeniería</h2> */}
            <div className="data">
              <span>Somos Soluciones</span>
              <br />
              <span>Somos Inergio Ingeniería</span>
            </div>
          </>
        )}

        {name === "renewableEnergy" && (
          <>
            {/* alt de la img de la seccion: 'Trabajadores de inergio resolviendo distintas situaciones' */}
            <div className="data">
              <h2 className="title">
                Soluciones en Servicios Energéticos y HVAC para Comercios e
                Industrias
              </h2>
              <div className="data__content">
                Llevamos a cabo relevamientos y desarrollos de informes y
                presupuestos para renovación, reparación y mantenimiento
                preventivo de las instalaciones, equipos y sistemas. Además,
                establecemos procesos proactivos para el mejoramiento de la
                explotación sostenible de la infraestructura, lo que se traduce
                en una eficiencia operacional.
              </div>
            </div>
          </>
        )}

        {name === "productsAndServices" && (
          <>
            <div className="data">
              <h2 className="title">Servicios</h2>
              <div className="data__content">
                Brindamos múltiples servicios profesionales, los cuáles
                posibilitan que empresas, constructoras e industrias cuenten con
                un único proveedor para solucionar diferentes situaciones y
                necesidades.
                <br />
                <br />
                Desde el inicio de cada proyecto aportamos seguridad a los
                sistemas y personas que trabajan con ellos. Garantizamos un
                diseño óptimo, implementación profesional y mantenimiento
                continuo de los sistemas que se traduce en un ahorro energético
                y económico para las empresas.
                <br />
                <br />
                Contamos con servicio de guardia para URGENCIAS las 24h para
                aquellos clientes que poseen instalaciones de punto crítico,
                donde es indispensable mantener los diferentes equipamientos y/o
                servicios en funcionamiento.
              </div>
              {/* Dentro de esta seccion deberia haber un carousel con todas las cards de productos y servicios */}
            </div>
          </>
        )}

        {name === "aboutUs" && (
          <>
            {/* alt de la img de la seccion: 'Manos de diversas personas apilandose en un mismo lugar como participes de un mismo equipo demostrando compañerismo' */}
            {/* alt de la img about-us-planning: 'Dos personas planeando y sacando cuentas de un proyecto sobre una mesa de madera' */}
            <div className="data">
              <h2 className="title">Sobre nosotros</h2>
              <div className="data__content">
                Somos especialistas en servicios energéticos, climatización,
                ventilación y refrigeración para todo tipo de escala de
                proyectos. Nos dedicamos al diseño, suministro, instalación y
                mantenimiento de los diferentes sistemas.
                <br />
                Nuestro amplio conocimiento y experiencia junto a un enfoque
                integral, garantizan los atributos esenciales para brindar
                soluciones a los diferentes sectores empresariales.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export { LandingSection };
