import React from 'react'
import Destinations from './destinations/Destinations'
import Hero from './hero/Hero'
import Trip from '../homepage/trip/Trip'
import Packages from '../homepage/packages/Packages'
import Tour from '../homepage/tour/Tour'
import Tours from '../homepage/tours/Tours'
import Places from './places/Places.jsx'

const index = () => {
  return (
    <>
     <Hero/>
     <Destinations/>
     <Places/>
    </>
  )
}

export default index
