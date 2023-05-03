import React, { useEffect } from 'react'
import v1 from '../assets/vh1.mp4'
import h1 from '../assets/a3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container } from 'react-bootstrap'
const LastDetails = () => {
 useEffect(() => {
   AOS.init({
     offset: 200,
     duration: 1000,
     delay: 50,
     easing: 'ease-in-out',
   })
 }, [])
  return (
    <Container>
      <div className='lastDetails'>
        <div className='title home-title'>
          <h3 data-aos='fade-right'>
            Un accord de parfums est comme une mélodie
          </h3>
        </div>
        <div className='container-home'>
          <article>
            <h3 data-aos='fade-right'>
              Pour illustrer ce propos, on peut comparer un parfum de couture à
              une mélodie
            </h3>
            <p>
              Les parfums sont complexes et il n'est pas facile d'exprimer ce
              que nous sentons avec notre nez. Nous avons du mal à utiliser le
              vocabulaire pour décrire un parfum. Nous pouvons utiliser des
              termes tels que "agréable" ou "doux", mais ils ne sont pas très
              spécifiques et relèvent de notre opinion personnelle. Ce qu'il
              faut, c'est une sorte de "langage du parfum" qui soit aussi
              objectif et neutre que possible.
            </p>
          </article>
          <article className='home-video' data-aos='fade-up'>
            <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
              <source src={v1} type='video/webm' />
            </video>
          </article>
        </div>
        <div className='home-container-2'>
          <article className='h2-content'>
            <div className='h-bg'></div>
            <div className='h-img'>
              <img src={h1} alt='' />
            </div>
          </article>
          <article className='last-content'>
            <h3>Donnez une chance à votre nez !</h3>
            <p data-aos='fade-right'>
              Il est important de ne pas précipiter l'évaluation, car de
              nombreux facteurs peuvent modifier votre perception un jour donné,
              par exemple les parfums que vous avez sentis plus tôt dans la
              journée, l'environnement dans lequel vous effectuez l'évaluation,
              ce que vous avez mangé ou bu récemment, votre propre humeur, etc.
            </p>
            <p data-aos='fade-up'>
              Nous vous recommandons également de sentir les parfums dans un
              environnement paisible et calme, afin de vous assurer que vos
              autres sens ne distraient pas votre nez. Par exemple, si quelqu'un
              mentionne un ingrédient particulier, vous remarquerez que vous
              percevez soudainement la même
            </p>
            <p data-aos='fade-right'>
              L'évaluation d'un parfum n'est pas facile, elle prend du temps et
              il est préférable de la répéter plusieurs fois.
            </p>
            <a href={`/boutique/`}>
              {' '}
              <button className='btn btn-home'>acheter</button>
            </a>
          </article>
        </div>
      </div>
    </Container>
  )
}

export default LastDetails