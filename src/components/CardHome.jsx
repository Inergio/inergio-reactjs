import React from 'react'

function CardHome(props) {
  const { image, name, date, data, link } = props.card;

  return (
    <section className="card">
      <div className="card__image">
        <img src={image} alt="" loading='lazy' />
      </div>
      <div className="card__info">
        <div className="card__name">
          {name}
        </div>
        <div className="card__date">
          {date}
        </div>
        <div className="card__data">
          {data}
        </div>
        <a href={link} className="c-btn c-btn-contained-primary">
          Ver más
        </a>
      </div>
    </section>
  )
}

export { CardHome }