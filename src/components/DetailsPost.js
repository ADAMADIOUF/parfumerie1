import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DetailsPost = () => {
  return (
    <div className='details-post'>
      <Container>
        <Row className='image-grid'>
          <Col lg={6} md={12}>
            <a href='/boutique'>
              <div className='image-overlay'>
                <p>Voir le produit</p>
              </div>
              <Image src={d1} className='image' />
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a href='/boutique'>
              <div className='image-overlay'>
                <p>Voir le produit</p>
              </div>
              <Image src={d2} className='image' />
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a href='/boutique'>
              <div className='image-overlay'>
                <p>Voir le produit</p>
              </div>
              <Image src={d3} className='image' />
            </a>
          </Col>
          <Col lg={6} md={12}>
            <a href='/boutique'>
              <div className='image-overlay'>
                <p>Voir le produit</p>
              </div>
              <Image src={d4} className='image' />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailsPost
