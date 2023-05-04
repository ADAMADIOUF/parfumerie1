import React from 'react'
import Navbar from "./components/Navbar"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import ProductsList from './components/ProductsList'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import About from './components/About'
const App = () => {
  return (
    <BrowserRouter>
      <TopNav text='Bienvenue chez Zana Parfumerie,
    faite vos commande sur whatsapp,
    Au +221 77 555 26 46,
  ' speed={2} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SingleProduct />} />

        <Route path='/boutique' element={<ProductsList />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App