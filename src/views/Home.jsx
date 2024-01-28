import React from 'react'
import { LandingSection } from '../components/LandingSection';
import { CardSection } from '../components/CardSection';
import { UsNetworks } from '../components/UsNetworks';

function Home() {
  const landingSections = [
    {
      name: "main",
      infoPosition: "center"
    },
    {
      name: "renewableEnergy",
      infoPosition: "bottom"
    },
    {
      name: "productsAndServices",
      infoPosition: "right"
    },
    {
      name: "aboutUs",
      infoPosition: "left"
    },
  ]

  return (
    <>
      {landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <section className='section-home section-home--about-us'>
        <div className="section__title">
          Nosotros
        </div>

        <div className="section__grid">
          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                ¿Cómo empezamos?
              </div>
              <div className="card__text">
                Inergio es una empresa que sigue en
                constante crecimiento desde su
                fundación en el año 2019.
                Tenemos como objetivo brindar los
                mejores servicios a comercios e
                industrias.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                Nuestra visión
              </div>
              <div className="card__text">
                Ser referentes en nuestra área de actuación,
                siendo reconocidos por nuestros clientes,
                proveedores y colaboradores, como una
                empresa que brinda soluciones y
                excelencia, con principios de
                sustentabilidad, humanidad, transparencia y
                compromiso con el cliente.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                Nuestro capital humano
              </div>
              <div className="card__text">
                Un equipo constituido por profesionales
                con vasta experiencia en el sector que
                además se encuentra en constante
                capacitación.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                Valores
              </div>
              <div className="card__text">
                Proporcionar procesos transparentes con
                la utilización correcta de recursos y
                estricto cumplimiento de normativas,
                priorizando la salud, la seguridad laboral
                y el compromiso con las relaciones
                basadas en la honestidad y el respeto.
                Asimismo, buscamos aportar al
                desarrollo de medidas de gestión de
                triple impacto: social, ambiental y
                económico, permitiendo así reinventar la
                cadena de valor.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                ¿Cómo trabajamos?
              </div>
              <div className="card__text">
                Para nosotros, la atención personalizada
                es primordial, cualquiera sea su actividad
                comercial o industrial, si estás interesado
                en nuestros servicios podes comunicarte
                por cualquiera de nuestros medios de
                comunicación o rellenar el formulario acá
                en nuestra web y brevemente nos
                pondremos en contacto.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">
                ¿Cómo te comunicas con nosotros?
              </div>
              <div className="card__text">
                Podes comunicarte con nuestra área
                administrativa en el <br/><b>+54 9 341 659 0047</b><br/>
                donde te brindaremos toda la
                información que buscas y en caso de
                que sea necesario te derivaremos al
                área correspondiente.
              </div>
            </section>
          </div>
        </div>
      </section>

      <CardSection />

      <UsNetworks />
    </>
  )
}

export { Home }