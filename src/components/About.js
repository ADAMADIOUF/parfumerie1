import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <Container className='about'>
      <Row>
        <Col lg={6}>
          <Image
            src='https://images.pexels.com/photos/6310591/pexels-photo-6310591.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt='about image'
            fluid
            data-aos='fade-right'
          />
        </Col>
        <Col lg={6}>
          <div className='about-content'>
            <h4 className='title' data-aos='fade-up'>
              Zana Parfumerie
            </h4>
            <p data-aos='fade-up'>
              Bienvenue dans le monde enchanteur des parfums Zana ! Nous sommes
              fiers de vous présenter notre collection unique de fragrances,
              créées avec soin et passion pour offrir une expérience olfactive
              inoubliable. Chaque parfum est conçu pour capturer la beauté et
              l'essence des fleurs et des plantes les plus rares et les plus
              exotiques du monde. Nos parfums sont fabriqués à partir
              d'ingrédients de la plus haute qualité, sélectionnés avec soin
              pour leur pureté et leur intensité. Que vous cherchiez un parfum
              frais et léger pour les journées chaudes d'été, ou une fragrance
              sensuelle et sophistiquée pour une soirée spéciale, nous avons ce
              qu'il vous faut. Explorez notre collection et laissez-vous
              transporter dans un monde de senteurs envoûtantes et enivrantes.
              Bienvenue chez Zana Parfumerie ! Il s'agit d'une famille olfactive
              très vaste et très répandue. Le thème principal de chaque création
              est soit une fleur unique (Solifloral), soit un bouquet floral.
              Elle est généralement divisée en fleurs rouges (par exemple, la
              rose, la violette,...) et en fleurs blanches (par exemple, le
              jasmin, la fleur d'oranger, la tubéreuse, l'ylang-ylang, le
              chèvrefeuille, ...). Certains parfumeurs ajoutent une autre
              sous-catégorie : les fleurs blanches-vertes (par exemple le
              Muguet). Ces fleurs peuvent être enrichies de nuances vertes,
              aldéhydées, fruitées ou épicées.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
