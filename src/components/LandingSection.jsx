import React, { useEffect, useRef } from 'react';
import imagen1 from '../assets/landing/1.webp';
import logoHome from '../assets/landing/logo-home.webp';

function LandingSection(props) {
  const { name, infoPosition } = props.section;
  const landingSectionInfoRefs = useRef([]);
  
  useEffect(() => {
    const landingSections = document.querySelectorAll('.landing-section.bottom, .landing-section.left, .landing-section.right');
    const handleScroll = () => {
      landingSections.forEach((section, index) => {
        const landingSectionInfo = section.querySelector('.landing-section__info');

        if (section && landingSectionInfo) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 500) {
            landingSectionInfo.classList.add('show');
          } else {
            landingSectionInfo.classList.remove('show');
          }
        }
      });
    };

    // Inicializa las referencias cuando el componente se monta
    landingSectionInfoRefs.current = Array.from({ length: landingSections.length }, () => React.createRef());

    // Agrega el evento scroll al documento
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <section className={`landing-section ${name} ${infoPosition}`}>
      <img className="landing-section__background" src={imagen1} loading="lazy" alt="" />
      <div className="landing-section__info">
        {name === "main" && (
          <>
            <img className="info-image" src={logoHome} loading="lazy" alt="" />
            {/* <h2 className='title'>Inergio Ingeniería</h2> */}
            <div className='data'>
              Somos soluciones, somos Inergio
            </div>
          </>
        )}

        {name === "renewableEnergy" && (
          <>
            <div className='data'>
              <h2 className='title'>
                Te presentamos las energias renovables
              </h2>
              <div className='data__content'>
                Las energías renovables son el futuro y nosotros queremos llevarte hacia él. Contamos con una amplia gama de productos y servicios que te van a permitir disfrutar de todas sus ventajas. La instalación de un sistema eléctrico eco-friendly marca el inicio de una vida mejor.

                Luego de su instalación, tendrás un gran ahorro en tus costos energéticos y una mejoría en calidad. Al mismo tiempo, vas a contribuir con el cuidado del medio ambiente y a generar un ambiente positivo de trabajo.
                Porque esto no es un gasto, es una inversión.
              </div>
            </div>
          </>
        )}

        {name === "productsAndServices" && (
          <>
            <div className='data'>
              <h2 className='title'>
                Productos y servicios
              </h2>
              <div className='data__content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, facilis obcaecati. Explicabo officia eius doloribus et tempora porro reprehenderit iure excepturi maiores magni nisi, autem ullam voluptas! Iusto, ratione fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, facilis obcaecati. Explicabo officia eius doloribus et tempora porro reprehenderit iure excepturi maiores magni nisi, autem ullam voluptas! Iusto, ratione fugiat.
              </div>
            </div>
          </>
        )}

        {name === "aboutUs" && (
          <>
            <div className='data'>
              <h2 className='title'>
                Sobre nosotros
              </h2>
              <div className='data__content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, facilis obcaecati. Explicabo officia eius doloribus et tempora porro reprehenderit iure excepturi maiores magni nisi, autem ullam voluptas! Iusto, ratione fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, facilis obcaecati. Explicabo officia eius doloribus et tempora porro reprehenderit iure excepturi maiores magni nisi, autem ullam voluptas! Iusto, ratione fugiat.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export { LandingSection };
