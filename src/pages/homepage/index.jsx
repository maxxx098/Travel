import React from 'react'
import Homepage from './home/home'
import AboutUs from './holiday/Holiday'
import Tour from './tour/Tour'

import Trip from './trip/Trip'
import Testimonial from './testimonial/Testimonial'
import Tours from './tours/Tours'
import Packages from './packages/Packages'
const index = () => {
  return (
    <>
    
    <Homepage/>
  
    <AboutUs/>
    <Tour/>
    <Packages/>
    <Testimonial/>
    <Trip/>
    </>
  )
}

export default index
