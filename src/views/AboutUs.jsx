import React from "react";

function AboutUs() {
  const aboutUsItemsLeft = [
    {
      title: "¿Cómo empezamos?",
      content:
        "Inergio es una empresa que sigue en constante crecimiento desde su fundación en el año 2019. Tenemos como objetivo brindar los mejores servicios a comercios e industrias.",
    },
    {
      title: "Nuestros valores",
      content:
        "Proporcionar procesos transparentes con la utilización correcta de recursos y estricto cumplimiento de normativas, priorizando la salud, la seguridad laboral y el compromiso con las relaciones basadas en la honestidad y el respeto. Asimismo, buscamos aportar al desarrollo de medidas de gestión de triple impacto: social, ambiental y económico, permitiendo así reinventar la cadena de valor.",
    },
    {
      title: "Nuestros visión",
      content:
        "Ser referentes en nuestra área de actuación, siendo reconocidos por nuestros clientes, proveedores y colaboradores, como una empresa que brinda soluciones y excelencia, con principios de sustentabilidad, humanidad, transparencia y compromiso con el cliente.",
    },
  ];

  const aboutUsItemsRight = [
    {
      title: "¿Cómo trabajamos?",
      content:
        "Para nosotros, la atención personalizada es primordial, cualquiera sea su actividad comercial o industrial, si estás interesado en nuestros servicios podes comunicarte por cualquiera de nuestros medios de comunicación o rellenar el formulario acá en nuestra web y brevemente nos pondremos en contacto.",
    },
    {
      title: "Nuestro capital humano",
      content:
        "Un equipo constituido por profesionales con vasta experiencia en el sector que además se encuentra en constante capacitación.",
    },
    {
      title: "¿Cómo te comunicas con nosotros?",
      content:
        "Podes comunicarte con nuestra área administrativa en el +54 9 341 659 0047donde te brindaremos toda la información que buscas y en caso de que sea necesario te derivaremos al área correspondiente.",
    },
  ];

  return (
    <div className="page page--about-us">
      <div className="page__top">
        <div className="page__title">Sobre nosotros</div>
        <div className="page__subtitle">
          Conoce quienes somos y con quienes trabajamos
        </div>
      </div>

      <div className="page__content">
        <div className="content__right">
          {aboutUsItemsRight.map((item, index) => (
            <div className="section" key={`right_${index}_${item.title}`}>
              <div className="section__title">{item.title}</div>
              <div
                className="section__content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>

        <div className="content__left">
          {aboutUsItemsLeft.map((item, index) => (
            <div className="section" key={`left_${index}_${item.title}`}>
              <div className="section__title">{item.title}</div>
              <div
                className="section__content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
