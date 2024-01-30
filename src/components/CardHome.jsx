import React from 'react'
import { Link } from 'react-router-dom'

function CardHome(props) {
  const { image, name, date, data, link } = props.card;
  const index = props.index

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
        <Link to={`${link}#news-card-${index}`} className="c-btn c-btn-contained-primary">
          Ver más
        </Link>
      </div>
    </section>
  )
}

export { CardHome }