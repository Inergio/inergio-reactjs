import React, { useEffect, useRef } from "react";
import imgMain from "../assets/landing/Home.webp";
import imgSection1 from "../assets/landing/section1.webp";
import imgSection3 from "../assets/landing/section3.webp";
import logoHome from "../assets/landing/logo-home.webp";
import imgProduct1 from "../assets/landing/img-product-1.webp";
import imgProduct2 from "../assets/landing/img-product-2.webp";
import imgProduct3 from "../assets/landing/img-product-3.webp";
import imgProduct4 from "../assets/landing/img-product-4.webp";
import imgProduct5 from "../assets/landing/img-product-5.webp";
import imgProduct6 from "../assets/landing/img-product-6.webp";
import imgProduct7 from "../assets/landing/img-product-7.webp";
import imgProduct8 from "../assets/landing/img-product-8.webp";
import imgProduct9 from "../assets/landing/img-product-8.webp";
import imgProduct10 from "../assets/landing/img-product-10.webp";
import imgProduct11 from "../assets/landing/img-product-11.webp";
import imgProduct12 from "../assets/landing/img-product-12.webp";
import imgProduct13 from "../assets/landing/img-product-13.webp";
import imgProduct14 from "../assets/landing/img-product-14.webp";
import Swiper from "swiper";
import "swiper/css/bundle";

function LandingSection(props) {
  const { name, infoPosition } = props.section;
  const landingSectionInfoRefs = useRef([]);
  const section = useRef(null);

  const swiperOptions = {
    centeredSlides: false,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 1.1,
      },

      1200: {
        slidesPerView: 2.1,
      },

      1400: {
        slidesPerView: 2.1,
      },
    },
    // spaceBetween: 32,

    // loop: true,
  };
  const serviceSlider = new Swiper(".landing-section__slider", swiperOptions);

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

        {name === "productsAndServices" && (
          <div className="landing-section__slider swiper">
            {/* El problema se dá desde los 768px, descarto que sea por la img bg de la section, tampoco es por las imagenes dentro de las cards, probablemente sea de Swiper */}
            <div className="swiper-wrapper swiper-wrapper--services">
              {/* TODO: Reemplazar lorem ipsum por cards */}
              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct1} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Climatización</div>
                    <div className="card__data">
                      Desarrollamos y comercializamos proyectos integrales de
                      climatización, proporcionando sistemas de aire
                      acondicionado de alta calidad para una amplia gama de
                      aplicaciones tanto en entornos comerciales o industriales.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct2} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Refrigeración</div>
                    <div className="card__data">
                      Nos especializamos en instalaciones comerciales e
                      industriales, en sistemas convencionales y de bajo
                      consumo. <br></br>Diseño, desarrollo y montaje de cámaras
                      frigoríficas de baja y media temperatura.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct3} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Calefacción</div>
                    <div className="card__data">
                      Brindamos asesoramiento técnico y análisis de proyecto
                      para sistemas de calefacción central, calderas,
                      radiadores, termotanques de alta recuperación y
                      calefactores eléctricos. <br></br>Realizamos la
                      automatización de los diferentes sistemas y equipos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct4} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Ventilación</div>
                    <div className="card__data">
                      Proporcionamos soluciones completas de inyección,
                      extracción y renovación de aire. Diseñamos sistemas que
                      favorecen un ambiente saludable, cómodo y, libre de
                      contaminantes, que proporcionan un flujo de aire fresco y
                      limpio en espacios cerrados.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct5} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Electricidad</div>
                    <div className="card__data">
                      Llevamos a cabo relevamiento, diseño y desarrollo de
                      proyectos de instalaciones eléctricas. Identificamos los
                      activos que deben repararse, renovarse o sustituirse para
                      conseguir las objetivos de eficiencia energética.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct6} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Energías Renovables</div>
                    <div className="card__data">
                      Brindamos soluciones para ahorrar energía y así también
                      reducir costos operativos. Desarrollamos proyectos,
                      comercializamos materiales y productos, realizamos
                      instalaciones y trámites para el programa ERA.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct7} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Cámaras Frigoríficas</div>
                    <div className="card__data">
                      Proyecto, desarrollo, montaje y automatización de sistemas
                      para cámaras de frío de baja y media temperatura.<br></br>
                      Trasladables y multifuncionales: food truck, consultorios,
                      oficinas, abrevaderos, etc. Con placas termoaislantes y
                      termoacústicas.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct8} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">
                      Construcción de módulos autónomos y sustentables
                    </div>
                    <div className="card__data">
                      Construcción de módulos autonómos y sustentables.<br></br>
                      Los módulos están diseñados para funcionar de forma
                      independiente de la red eléctrica y de los servicios
                      públicos.<br></br>Están equipados con sistemas de energía
                      renovable, como paneles solares y eólicos, que les
                      permiten generar su propia electricidad.<br></br>También
                      cuentan con sistemas de almacenamiento de energía, que les
                      permiten almacenar el excedente de electricidad para su
                      uso posterior.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct9} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Domótica</div>
                    <div className="card__data">
                      Brindamos asesoramiento técnico y análisis de proyecto
                      para sistemas de calefacción central, calderas,
                      radiadores, termotanques de alta recuperación y
                      calefactores eléctricos.<br></br> Realizamos la
                      automatización de las diferentes sistemas y equipos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct10} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Automatización</div>
                    <div className="card__data">De equipos y sistemas</div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct11} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Venta de equipos</div>
                    <div className="card__data">
                      De climatización, refrigeración, calefacción y
                      ventilación. Además de todo lo relacionada a la energía
                      Fotovoltaica: paneles, termotanques, solares, inversores,
                      etc
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct12} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Optimización</div>
                    <div className="card__data">
                      Proponemos mejoras para establecer procesos más
                      sostenibles que además generan una mayor eficiencia
                      operacional elevando el rendimiento de las empresas e
                      industrias.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct13} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Mantenimiento Preventivo</div>
                    <div className="card__data">
                      Minimización de los costos operativos, prolongando el
                      ciclo de vida del equipamiento, implementando sistemas y
                      procedimientos de mantenimiento preventivo.
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card card--services">
                  <div className="card__image">
                    <img alt="" src={imgProduct14} loading="lazy" />
                  </div>
                  <div className="card__info">
                    <div className="card__name">Mantenimiento Correctivo</div>
                    <div className="card__data">
                      Evolución y diagnóstico para detectar si es más rentable
                      reparar o reemplazar un equipo, disponiendo de los costos
                      de reparación y mantenimiento.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
              <span>Somos soluciones</span>
              <br />
              <span>Somos Inergio Ingenieria</span>
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
              <h2 className="title">Productos y servicios</h2>
              <div className="data__content">
                Disponemos la prestación de múltiples servicios profesionales,
                los cuáles posibilitarán que su constructora, empresa o
                industria cuente con un único proveedor para solucionar
                diferentes situaciones y necesidades. Todo con el respectivo
                conocimiento de normativas y regulaciones que permitirán
                prevenir el riesgo de sanciones y accidentes laborales, y
                sobretodo optimizar los recursos indispensables para el
                funcionamiento, desarrollo y crecimiento de su empresa. Además,
                nuestras obras se llevan a cabocon personal de seguridad e
                higiene que garantizan la optimización de los procedimientos y
                actividades ejecutadas.
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
              <h2 className="title">Nosotros</h2>
              <div className="data__content">
                Nos dedicamos a proporcionar una amplia variedad de servicios
                energéticos y de climatización. Este último, incluye todo lo
                relacionado a la calefacción, refrigeración y ventilación, tanto
                en entornos comerciales como industriales. Desde el inicio de
                cada proyecto aportamos seguridad a los sistemas y personas que
                trabajan con ellos. Colaboramos con la optimización de recursos
                a través del mantenimiento preventivo y en caso de fallas,
                adecuamos los sistemas a través del mantenimiento correctivo.
                Nuestro amplio conocimiento y experiencia junto a un enfoque
                integral garantizan los atributos necesarios para brindar a
                nuestros clientes la confiabilidad requerida para llevar a cabo
                las mejores instalaciones. Garantizamos un diseño optimo,
                implementación profesional, operación eficiente y mantenimiento
                continuo de sus sistemas, maximizando el rendimiento energético
                y de su inversión, a largo plazo.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export { LandingSection };
