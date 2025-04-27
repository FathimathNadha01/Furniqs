import React, { useContext } from 'react'
import image from '../../assets/images/image'
import { Productcontext } from '../context/Productcontext'

function Productcard({productData}) {
    const {product}= useContext(Productcontext)
  return (
    <div className='p-5'>
        <div className='bg-gray-200 w-fit h-100'>
        <img className={"w-fit"} src={productData?.image_path||"no"} alt="" />
        <div className='p-2'>
        <h1 className='font-bold text-2xl '>{productData?.name||"no"}</h1>
        <p>{productData?.category||"no"}</p>
        <p className='font-bold'>R.P {productData?.price||"no"}</p>
        </div>
        </div>
        

    </div>
  )
}

export default Productcard