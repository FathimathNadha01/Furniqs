import React from 'react'
import image from '../../assets/images/image'

function Card() {
  return (
    <div className='flex gap-20 ml-35'>
      <div>
      <img className={"w-70 h-90"} src={image.living_room} alt="" />
      <h1 className='font-bold ml-20 p-3'>Living Room</h1>
      </div>
      <div>
      <img className={"w-70 h-90"} src={image.bedroom} alt="" />
      <h1 className='font-bold ml-20 p-3'>Bedroom</h1>
      </div>
      <div>
      <img className={"w-70 h-90"} src={image.Dining} alt="" />
      <h1 className='font-bold ml-20 p-3'>Dining</h1>
      </div>
    </div>
  )
}

export default Card