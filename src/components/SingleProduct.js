import WhatsAppWidget from './whatssap'
import 'react-whatsapp-widget/dist/index.css'
import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import ProductImages from './ProductImages'
import { Button, Col, Container, ListGroupItem, Row } from 'react-bootstrap'

const SingleProduct = () => {
 const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
 const [qty, setQty] = useState(1)
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()
  const { id } = useParams()
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Message />
  }
  const { name, description, image } = product
  
  const handleAddToCart = () => {
    const message = `je veux acheter ${product.name} x${qty}`
    const url = `https://wa.me/+221775552646?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }
  return (
    <Container fluid>
      <Link to={`/boutique`}>
        <Button variant='primary' className='my-button btn-sm'>
          boutique
        </Button>
      </Link>
      <Row>
        <Col md={6}>
          <ProductImages image={image} className='col-md-6' />
        </Col>
        <Col md={6}>
          <h2>{name}</h2>
          <p className='text-muted'>{description}</p>
        </Col>
        <ListGroupItem>
          <Button onClick={handleAddToCart}>acheter par whatsapp</Button>
          {showWhatsAppWidget && (
            <WhatsAppWidget
              phoneNumber='+221775552646'
              message={`
je veux acheter ${product.name}`}
            />
          )}
        </ListGroupItem>
      </Row>
    </Container>
  )
}

export default SingleProduct
