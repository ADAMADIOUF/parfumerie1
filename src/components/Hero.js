import React from 'react'
import { Link } from 'react-router-dom'
import { social } from '../social'
import h from '../assets/hero.png'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container>
      <div className='hero section-center'>
        <div className='hero-container'>
          <div className='img-hero'>
            <ul className='social-links'>
              {social.map((link) => {
                const { url, icon, id } = link
                return (
                  <li key={id}>
                    <Link to={url} className='social-link'>
                      {icon}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <img src={h} alt='' className='hero-image' />
          </div>

          <div className='hero-content'>
            <h3>Le parfum, une structure olfactive bien particulière</h3>
            <p>
              Comme une seconde peau, votre parfum révèle votre personnalité,
              vos goûts et votre état d'esprit. Pour trouver la fragrance
              idéale, vous devrez vous laisser guider par ses notes. Vous ne
              savez pas par où commencer ? Nous vous donnons de nombreux
              conseils pour choisir la bonne senteur.
            </p>
            <a href={`/shop/`}>
              <button className='btn btn-hero'>acheter</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
