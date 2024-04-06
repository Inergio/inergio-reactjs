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

    const cards = document.querySelectorAll('.card--services .card__info');
    cardsInfoRef.current = cards;

    serviceSlider.current.on('slideChange', () => {
      showLessOnAll();
    });

    showLessOnAll();

    return () => {
      serviceSlider.current.destroy();
    };
    
  }, [])

  const checkHeight = (card) => {
    card.classList.remove('show')

    if (card.scrollHeight > card.offsetHeight) {
      card.classList.add('hide')
    }
  }

  const showMore = (event) => {
    showLessOnAll()

    const info = event.currentTarget.closest('.card--services .card__info')

    info.classList.remove('hide')
    info.classList.add('show')
  }

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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
                <div className="see-more" onClick={showMore}>Ver más</div>
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
    </>
  )
}

export { ProductsAndServices };