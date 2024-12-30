import React from 'react'
import Hero from './hero/aboutHero'
import StatsBar from './stats/statsbar'
import Holiday from '../homepage/holiday/Holiday'
import Tour from '../homepage/tour/Tour'
import Testimonial from '../about/testimonial/Testimonial'
const index = () => {
  return (
    <>
    <Hero/>
    <StatsBar/>
    <Holiday/>
    <Tour/>
    <Testimonial/>
    </>
  )
}

export default index
