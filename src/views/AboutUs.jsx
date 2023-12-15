import React from 'react'

function AboutUs() {
  const aboutUsItemsRight = [
    {
      title: "¿Cómo trabajamos?",
      content: "Lo primero es escuchar las consultas de quien nos contacte, seguido de esto desarrollamos la etapa de planeacion y presupuesto, donde vamos a buscar la solucion que sea màs apta para resolver completamente tu problema. <br> Una vez terminada la planificacion y confirmado el presupuesto nos ponemos manos a la obra para solucionar tu problema en el menor tiempo posible, aplicando toda nuestra experiencia y trayectoria para garantizar la mayor calidad de servicio.",
    },
    {
      title: "¿Qué pasa después?",
      content: "Desde nuestro departamento de Administración le van a brindar seguimiento continuo para verificar la correcta aplicacion de las soluciones y en caso de que sea necesario, brindar ayuda. Con esto nos aseguramos los siguientes puntos:<ul><li>Establecer un vinculo único con el cliente.</li><li>Su total satisfaccion con el servicio.</li><li>Ayuda profesional sin importar la hora ni el día.</li></ul>",
    },
  ]
  const aboutUsItemsLeft = [
    {
      title: "¿Cómo empezamos?",
      content: "Inergio es una empresa en crecimiento fundada en 2019. Desde un principio nuestro principal objetivo es brindar soluciones a tus problemas. Especializados en electricidad y refrigeraciones forjamos una largo historial de clientes satisfechos y problemas resueltos.",
    },
    {
      title: "¿Cómo los contacto?",
      content: "Podés contactarnos mandanos un mensaje a nuestro Whatsapp +54 9 3416 59-0047 o buscarnos en todas las redes sociales como Inergio Ingenieria.",
    },
  ]
  return (
    <div className='page'>
      <div className="page__top">
        <div className="page__title">
          Sobre nosotros
        </div>
        <div className="page__subtitle">
          Conoce quienes somos y con quienes trabajamos
        </div>
      </div>

      <div className="page__content">
        <div className='content__right'>
        {aboutUsItemsRight.map((item, index) => (
          <>
            {/* <img src="" alt="" /> */}
            <div className="section" key={index}>
              <div className="section__title">
                {item.title}
              </div>
              <div className="section__content" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </>
        ))}
        </div>

        <div className='content__left'>
          {aboutUsItemsLeft.map((item, index) => (
            <>
              {/* <img src="" alt="" /> */}
              <div className="section" key={index}>
                <div className="section__title">
                  {item.title}
                </div>
                <div className="section__content" dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </>
          ))}
        </div>
      </div>

    </div>
  )
}

export { AboutUs }