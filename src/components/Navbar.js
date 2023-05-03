import Button from 'react-bootstrap/Button'
import logo from '../assets/logozana.png'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Search from './Search'

function NavScrollExample() {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      collapseOnSelect
      className='my-navbar'
    >
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} alt='' className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>accueil</Nav.Link>
            <Nav.Link href='/boutique'>Boutique</Nav.Link>
            <Nav.Link href='/about'>á propos</Nav.Link>
          </Nav>

          <Form className='d-flex'>
            <Search/>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
