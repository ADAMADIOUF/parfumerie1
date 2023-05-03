import React from 'react'
import b from '../assets/b2.png'
import { Image } from 'react-bootstrap'


const Banner = () => {
  return (
    <div className='banner'>
      <Image src={b} />
      <div className='banner-text'>
        <h1>zana parfum</h1>
        <p>
          Notre parfum est une ode à l'élégance et à la sophistication. Les
          notes délicates et raffinées s'entrelacent pour créer un bouquet
          subtil et envoûtant qui évoque la féminité et la sensualité
        </p>
      </div>
    </div>
  )
}

export default Banner
