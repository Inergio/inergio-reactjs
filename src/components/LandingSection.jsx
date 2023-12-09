import React from 'react'
import imagen1 from '../assets/landing/1.jpg';
import logoHome from '../assets/landing/logo-home.jpg';

function LandingSection(props) {
  const { name, infoPosition } = props.section;

  return (
    <section className={`landing-section ${name} ${infoPosition}`}>
      <img className="landing-section__background" src={imagen1} alt="" />
      <div className="landing-section__info">
        {name === "main" && (
          <>
            <img className="info-image" src={logoHome} alt="" />
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

export { LandingSection }