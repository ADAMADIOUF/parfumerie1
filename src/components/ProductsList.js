import { useProductsContext } from '../context/products_context'
import Loader from './Loader'
import Message from './Message'
import Banner from './Banner'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProductsList = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Message />
  }

  return (
    <>
      <Banner />
      <Container>
        <Row className='products-grid'>
          {products.map((product) => {
            const { image, name, id } = product
            return (
              <Col key={id} xs={6} md={4} lg={3}>
                <Link to={`/products/${id}`}>
                  <div className='product-card'>
                    <Image src={image} className='product-image' />
                    <div className='product-overlay'>
                      <h3 className='product-name'>{name}</h3>
                    </div>
                  </div>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ProductsList
