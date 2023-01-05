import React from 'react'
import { Link } from 'react-router-dom'
export default function People({ image, name, info, glass }) {
  return (
    <article className='people'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='people-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/person/${name}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

