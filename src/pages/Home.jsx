import React from 'react'
import Hero from '../components/home/Hero'

import image from '../assets/images/image'
import Card from '../components/home/Card'


function Home() {
  return (
    <>
    <div>
      <Hero/>
<div className='text-center mt-6'>
      <h1 className='font-bold text-2xl'>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      </div>
      <div className='flex justify-center gap-10 mt-10'>
    
    <div>
     <img src={image.Dining} alt="" />
     <p className='text-center mt-5'>Dining</p>

    </div>
    <div>
      <img src={image.living_room} alt="" />
      <p className='text-center mt-5'>Living</p>
    </div>
    <div>
      <img src={image.bedroom} alt="" />
      <p className='text-center mt-5'>Bedroom</p>
    </div>
    </div>
    <div className='mt-7'>
<h1 className='text-center text-4xl font-bold'>Our Products</h1>

<Card/>

    </div>
    </>
  )
}

export default Home