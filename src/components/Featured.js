import React from 'react'
import { useProductsContext } from '../context/products_context'
import Loader from './Loader'
import Message from './Message'
import Product from './Product'
import { Container, Row, Col } from 'react-bootstrap'

const Featured = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Message />
  }

  return (
    <Container>
      <Row>
        {featured.map((product) => {
          return (
            <Col key={product.id} xs={12} md={4}>
              <Product {...product} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Featured
