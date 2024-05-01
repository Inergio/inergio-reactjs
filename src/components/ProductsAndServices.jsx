import imgProduct1 from "../assets/landing/img-product-1.webp";
import imgProduct2 from "../assets/landing/img-product-2.webp";
import imgProduct3 from "../assets/landing/img-product-3.webp";
import imgProduct4 from "../assets/landing/img-product-4.webp";
import imgProduct5 from "../assets/landing/img-product-5.webp";
import imgProduct6 from "../assets/landing/img-product-6.webp";
import imgProduct7 from "../assets/landing/img-product-7.webp";
import imgProduct8 from "../assets/landing/img-product-8.webp";
import imgProduct9 from "../assets/landing/img-product-9.webp";
import imgProduct10 from "../assets/landing/img-product-10.webp";
import imgProduct11 from "../assets/landing/img-product-11.webp";
import imgProduct12 from "../assets/landing/img-product-12.webp";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";
import Swiper from "swiper";
import { useEffect, useRef } from "react";
import { Icon } from "./icons/Icon";

function ProductsAndServices() {
  const cardsInfoRef = useRef(null);
  const serviceSlider = useRef(null);
  
  useEffect(() => {
    const swiperOptions = {
      centeredSlides: false,
      slidesPerView: 1.1,
      breakpoints: {
        576: {
          slidesPerView: 2.1,
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
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
      // spaceBetween: 32,

      // loop: true,
    };

    serviceSlider.current = new Swiper(serviceSlider.current, swiperOptions);

    const cards = document.querySelectorAll(".card--services .card__info");
    cardsInfoRef.current = cards;

    serviceSlider.current.on('slideChange', () => {
      showLessOnAll();
    });

    showLessOnAll();

    return () => {
      serviceSlider.current.destroy();
    };
  }, []);

  const checkHeight = (card) => {
    card.classList.remove("show");

    if (card.scrollHeight > card.offsetHeight) {
      card.classList.add("hide");
    }
  };

  const showMore = (event) => {
    showLessOnAll();

    const info = event.currentTarget.closest(".card--services .card__info");

    info.classList.remove("hide");
    info.classList.add("show");
  };

  const showLessOnAll = () => {
    if (cardsInfoRef.current) {
      cardsInfoRef.current.forEach((card) => {
        checkHeight(card);
      });
    }
  };

  const handleNext = () => {
    serviceSlider.current.slideNext();
  }

  const handlePrev = () => {
    serviceSlider.current.slidePrev();
  }

  return (
    <>
      <div className="landing-section__slider swiper" ref={serviceSlider}>
        <div className="services-carousel__controllers">
          <div className="c-btn c-btn-outlined-black only-icon prev" onClick={handlePrev}>
            <Icon iconSvg={<ChevronLeft />} />
          </div>
          <div className="c-btn c-btn-outlined-black only-icon next" onClick={handleNext}>
            <Icon iconSvg={<ChevronRight />} />
          </div>
        </div>
        {/* El problema se dá desde los 768px, descarto que sea por la img bg de la section, tampoco es por las imagenes dentro de las cards, probablemente sea de Swiper */}
        <div className="swiper-wrapper swiper-wrapper--services">
          <div className="swiper-slide">
            <div className="card card--services">
              <div className="card__image">
                <img alt="" src={imgProduct1} loading="lazy" />
              </div>
              <div className="card__info">
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Climatización</div>
                <div className="card__data">
                  Desarrollamos y comercializamos proyectos integrales de
                  climatización, proporcionando sistemas de aire acondicionado de
                  alta calidad para una amplia gama de aplicaciones tanto en
                  entornos comerciales como industriales. Además, llevamos a cabo
                  el plan de mantenimiento preventivo de los equipos y sistemas.
                  Algunos de los sistemas que trabajamos son BAG IN - BAG - OUT,
                  baja silueta, chillers, enfriadoras de agua, FAN - COILS, ROOF -
                  TOP, split (VRV, City - Multi), inverter, piso techo, torres de
                  enfriamiento, etc.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Calefacción</div>
                <div className="card__data">
                  Brindamos asesoramiento técnico y análisis de proyecto para
                  sistemas de calefacción central, calderas, radiadores,
                  termotanques de alta recuperación y calefactores eléctricos.
                  Realizamos la automatización y control de los diferentes
                  sistemas y equipos. Además, contamos con una amplia gama de
                  equipamientos y productos.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Refrigeración</div>
                <div className="card__data">
                  Somos especialistas en sistemas de refrigeración comercial e
                  industrial de media, baja temperatura y super congelado.
                  Diseñamos, desarrollamos y realizamos el montaje de cámaras
                  frigoríficas. Realizamos el mantenimiento preventivo y
                  correctivo, además de implementar la automatización y control de
                  los diferentes sistemas.
                  <br />
                  Contamos con una amplia gama de equipamientos y productos.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Ventilación y Extracción</div>
                <div className="card__data">
                  Proporcionamos soluciones completas de inyección, renovación y
                  extracción de aire. Diseñamos sistemas que garantizan un
                  ambiente saludable y confortable, eliminando contaminantes y
                  proporcionando un flujo de aire fresco y limpio en espacios
                  cerrados.
                  <br />
                  Fabricamos conductos de aire e implementamos la automatización y
                  control de los diferentes sistemas.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Servicios Energéticos</div>
                <div className="card__data">
                  Servicios de Electricidad, Energías renovables, Domótica e
                  Iluminación.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Domótica</div>
                <div className="card__data">
                  Contamos con una amplia gama de dispositivos para domotizar
                  instalaciones eléctricas. Tanto para accionamiento de forma
                  remota desde un Smartphone como también para realizar acciones
                  de una interacción verbal, ya sea hablando con ALEXA, GOOGLE o
                  SIRI en el caso de Apple.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Electricidad</div>
                <div className="card__data">
                  Llevamos a cabo el relevamiento, diseño y desarrollo de planos y
                  proyectos de instalaciones eléctricas. Identificamos los activos
                  que deben repararse, renovarse o sustituirse para conseguir los
                  objetivos de eficiencia energética.
                  <br />
                  También desarrollamos las actividades de medición del
                  rendimiento de las instalaciones edilicias en lo que respecta a
                  consumo de energía, para su debida corrección de consumos. Otros
                  servicios:
                  <br />
                  • Automatización y control de sectores, equipos y sistemas
                  <br />
                  • Diseño de tableros monofásicos e industriales
                  <br />
                  • Instalaciones subterráneas
                  <br />
                  • Medición de puesta a tierra
                  <br />
                  • Proyecto, construcción y dirección de instalaciones
                  electromecánicas cuya potencia no supere los 11KW (15Hp)
                  <br />• Proyecto, dirección y/o ejecución de instalaciones
                  eléctricas MONO y TRIFÁSICAS hasta los 50KVA y 250V de tensión
                  contra tierra o 400V entre fase para construcciones edilicias
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">
                  Iluminación Led Smart
                </div>
                <div className="card__data">
                  Diseñamos proyectos de iluminación para cada cliente, según las
                  necesidades. Contamos con un equipo de trabajo listo para llevar
                  la iluminación de los espacios a un siguiente nivel con
                  tecnología LED de alta eficiencia.
                  <br />
                  • Iluminación de espacios deportivos
                  <br />
                  • Iluminación exterior decorativa
                  <br />
                  • Iluminación RGB
                  <br />• Iluminación Industrial
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Energía Solar</div>
                <div className="card__data">
                  Brindamos soluciones para el ahorro de energía y la reducción de
                  costos operativos, además de contribuir al cuidado del medio
                  ambiente que cada día más lo requiere.
                  <br />
                  Proporcionamos el uso de la energía solar para los siguientes
                  servicios: generación de electricidad, calentamiento de agua,
                  bombas de agua autónomas, climatización de piscinas y pisos
                  radiantes.
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Modulos Autónomos y Sustentables</div>
                <div className="card__data">
                  Brindamos el servicio de un techo con todos sus servicios para
                  lugares que no disponen del mismo. Las opciones pueden ser
                  consultorios, oficinas, obradores y Food Truck. Son fabricados
                  con estructura y placas térmicas lo que garantiza un alto grado
                  de aislamiento térmico y acústico.
                  <br />
                  El sistema de generación de energía es acorde a la necesidad de
                  cada cliente visto que los mismos pueden poseer distintos
                  dispositivos como aire acondicionado, cocinas eléctricas, etc.
                  <br />
                  A diferencia de los habituales contenedores que se utilizan para
                  diferentes proyectos, nuestros módulos son ultra livianos,
                  fáciles de trasladar y totalmente aislantes frente a la
                  temperatura, la humedad y los sonidos exteriores. Además, son de
                  rápido montaje y adaptables a construcciones preexistentes.
                  <br />
                  Por último, cabe resaltar que estás mismas placas también pueden
                  emplearse para las divisiones de interiores o el revestimiento
                  de techos en casas, cabañas y naves industriales, aportando así
                  al aislamiento de estos espacios.
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card--services">
              <div className="card__image">
                <img alt="" src={imgProduct11} loading="lazy" />
              </div>
              <div className="card__info">
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Venta de equipos</div>
                <div className="card__data">
                  De climatización, refrigeración, calefacción y ventilación.
                  Además de todo lo relacionada a la energía Fotovoltaica:
                  paneles, termotanques, solares, inversores, etc
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
                <div className="see-more" onClick={showMore}>Ver más</div>
                <div className="card__name">Optimización</div>
                <div className="card__data">
                  Proponemos mejoras para establecer procesos más sostenibles que
                  además generan una mayor eficiencia operacional elevando el
                  rendimiento de las empresas e industrias.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ProductsAndServices };
