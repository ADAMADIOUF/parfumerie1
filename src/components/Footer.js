import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {social} from "../social"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-dark text-white py-3'>
      <Container>
        <Row>
          <Col md={6} className='text-center text-md-start'>
            <p>Address: Senegal,Dakar</p>
            <p>Phone: (+221)77 555 26 46 </p>
            <p>Email: zanaparfumerie17@gmail.com</p>
          </Col>
          <Col md={6} className='text-center text-md-end'>
            <p>Suivez-nous:</p>
            <ul className='footer-link'>
              {social.map((link) => {
                const { url, icon, id } = link
                return (
                  <li key={id}>
                    <Link to={url} className='social-link-footer'>
                      {icon}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      
          <h5 className='footer-date'>
            &copy;
            {new Date().getFullYear()}
            <span> by adamadiouf2017@gmail.com</span>
          </h5>
       
      </Container>
    </footer>
  )
}

export default Footer
