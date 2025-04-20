import React from 'react'
import image from '../../assets/images/image'

function Hero() {
  return (
    <div className='relative w-full'>
      <img src={image.home} alt="" className='w-full'/>
      <div className='absolute z-20 left-200 top-50'><img src={image.home2} alt="" /></div>
    </div>
  )
}

export default Hero