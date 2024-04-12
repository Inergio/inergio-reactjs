import React from "react";
import { LandingSection } from "../components/LandingSection";
import { CardSection } from "../components/CardSection";
import { UsNetworks } from "../components/UsNetworks";

function Home() {
  const landingSections = [
    {
      name: "main",
      infoPosition: "center",
    },
    {
      name: "renewableEnergy",
      infoPosition: "bottom",
    },
    {
      name: "productsAndServices",
      infoPosition: "right",
    },
    {
      name: "aboutUs",
      infoPosition: "left",
    },
  ];

  return (
    <>
      {landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <section className="section-home section-home--about-us">
        <div className="section__title">Sobre nosotros</div>

        <div className="section__grid">
          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">¿Cómo empezamos?</div>
              <div className="card__text">
                Somos una empresa de ingeniería que sigue en constante
                crecimiento desde nuestra fundación en el año 2019. Desde
                entonces, nos destacamos en el mercado al proporcionar calidad y
                excelencia en cada proyecto y servicio.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">Valores</div>
              <div className="card__text">
                Responsabilidad, ética profesional, seguridad y eficacia son los
                valores que nos destacan como empresa líder y confiable.
                Asimismo, buscamos aportar al desarrollo de medidas de gestión
                de triple impacto: social, ambiental y económico, permitiendo
                así reinventar la cadena de valor.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">Nuestra visión</div>
              <div className="card__text">
                Ser referentes en nuestra área de actuación, siendo reconocidos
                por nuestros clientes, proveedores y colaboradores, como una
                empresa que brinda soluciones y excelencia con principios de
                sustentabilidad, humanidad, transparencia y compromiso con el
                cliente.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">¿Cómo trabajamos?</div>
              <div className="card__text">
                Proporcionamos procesos transparentes con la utilización
                correcta de recursos y estricto cumplimiento de normativas,
                priorizando la salud, la seguridad laboral y el compromiso con
                las relaciones basadas en la honestidad y el respeto.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">Nuestro capital humano</div>
              <div className="card__text">
                Somos un equipo conformado por profesionales con vasta
                experiencia y mantenemos un esquema de constante capacitación
                que nos permite estar a la par de las normativas vigentes y las
                novedades de los sectores comerciales e industriales.
              </div>
            </section>
          </div>

          <div className="item__wrapper">
            <section className="item">
              <div className="item__title">¿Cómo comunicarte con nosotros?</div>
              <div className="card__text">
                Creemos que la atención personalizada es primordial, por lo
                tanto, cualquiera sea su actividad comercial o industrial, si
                estás interesado en nuestros servicios podes comunicarte al{" "}
                <a
                  class="link link-primary"
                  href="https://www.whatsapp.com/catalog/5493416590047/?app_absent=0"
                >
                  + 54 9 (341) 659-0047
                </a>
                . También podes acceder a nuestras redes que se encuentran al
                final de está página o enviarnos un mail a ventas@inergio.com.ar
                / administracion@inergio.com.ar
              </div>
            </section>
          </div>
        </div>
      </section>

      <CardSection />

      <UsNetworks />
    </>
  );
}

export default Home;
