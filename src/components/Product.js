import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Product = ({ image, name, id }) => {
  return (
    <Card className='product-card'>
      <Card.Img variant='top' src={image} className='product-img' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/products/${id}`}>
          <Button variant='primary'>acheter Maintenat</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
