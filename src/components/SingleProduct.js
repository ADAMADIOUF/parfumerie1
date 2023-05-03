import React, { useEffect } from 'react'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import ProductImages from './ProductImages'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Contact from './Contact'
const SingleProduct = () => {
 const {
   single_product_loading: loading,
   single_product_error: error,
   single_product:product,fetchSingleProduct,
 } = useProductsContext()
 const {id}= useParams()
 useEffect(()=>{
  fetchSingleProduct(`${url}${id}`)
 },[id])
 if(loading){
  return<Loader/>
 }
 if(error){
  return<Message/>
 }
 const{name,description,image}=product
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
          <Contact className='col-md-6' />
        </Col>
      </Row>
    </Container>
  )
}

export default SingleProduct