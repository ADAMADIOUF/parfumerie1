import React from 'react'
import Featured from './Featured'
import Slider from "./Slider"
import DetailsPost from './DetailsPost'
import Hero from './Hero'
import LastDetails from './LastDetails'
const Home = () => {
  return (
    <div>
     <Slider/>
     <Featured/>
     <DetailsPost/>
     <Hero/>
     <LastDetails/>
    </div>
  )
}

export default Home