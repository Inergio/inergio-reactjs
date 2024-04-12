import React from "react";

function AboutUs() {
  const aboutUsItemsLeft = [
    {
      title: "¿Cómo empezamos?",
      content:
        "Somos una empresa de ingeniería que sigue en constante crecimiento desde nuestra fundación en el año 2019. Desde entonces, nos destacamos en el mercado al proporcionar calidad y excelencia en cada proyecto y servicio.",
    },
    {
      title: "Valores",
      content:
        "Ser referentes en nuestra área de actuación, siendo reconocidos por nuestros clientes, proveedores y colaboradores, como una empresa que brinda soluciones y excelencia con principios de sustentabilidad, humanidad, transparencia y compromiso con el cliente.",
    },
    {
      title: "Nuestra visión",
      content:
        "Ser referentes en nuestra área de actuación, siendo reconocidos por nuestros clientes, proveedores y colaboradores, como una empresa que brinda soluciones y excelencia, con principios de sustentabilidad, humanidad, transparencia y compromiso con el cliente.",
    },
  ];

  const aboutUsItemsRight = [
    {
      title: "¿Cómo trabajamos?",
      content:
        "Proporcionamos procesos transparentes con la utilización correcta de recursos y estricto cumplimiento de normativas, priorizando la salud, la seguridad laboral y el compromiso con las relaciones basadas en la honestidad y el respeto.",
    },
    {
      title: "Nuestro capital humano",
      content:
        "Somos un equipo conformado por profesionales con vasta experiencia y mantenemos un esquema de constante capacitación que nos permite estar a la par de las normativas vigentes y las novedades de los sectores comerciales e industriales.",
    },
    {
      title: "¿Cómo te comunicas con nosotros?",
      content:
        "Creemos que la atención personalizada es primordial, por lo tanto, cualquiera sea su actividad comercial o industrial, si estás interesado en nuestros servicios podes comunicarte al + 54 9 (341) 659-0047. También podes acceder a nuestras redes que se encuentran al final de está página o enviarnos un mail a ventas@inergio.com.ar / administracion@inergio.com.ar ",
    },
  ];

  return (
    <div className="page page--about-us">
      <div div class="gradient"></div>
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
