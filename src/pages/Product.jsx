import React, { useState } from 'react'
import Imagegallery from '../components/Imagegallery'
import Button from '../components/Button'
import Carousel from '../components/Carousel'

function Product() {
    const [count,setCount] = useState(0)
  return (
            
    <div className='flex gap-8 p-5'>
        
        <Imagegallery/>
        <div>
        <h1 className='font-bold text-2xl mt-5'>Asgarda Sofa</h1>
        <p className='mt-3'>Rs 25,0000</p>
        <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, a!</p>
        <p className='mt-3'>Size</p>
        <div className='flex gap-3 mt-3'>
        <button className='rounded-2xl py-2 px-2 bg-gray-200'>XS</button>
        <button className='rounded-2xl py-2 px-2 bg-gray-200'>L</button>
        <button className='rounded-2xl py-2 px-2 bg-gray-200'>XL</button>

        </div>
        <div className='flex gap-3 mt-3'>
            <button className='rounded-full bg-amber-400 w-[20px] h-[20px]  '></button>
            <button className='rounded-full bg-amber-800 w-[20px] h-[20px]'></button>
            <button className='rounded-full bg-amber-200 w-[20px] h-[20px]'></button>
        </div>
        <div className='flex gap-3 mt-3'>
                <button onClick={()=>setCount(count<=0?0:count-1)} className='bg-gray-100 rounded-full px-2'> - </button>
                {count}
                <button onClick={()=>setCount(count+1)} className='bg-gray-100 rounded-full px-2'> + </button>
        </div>
        <div className='flex gap-3 mt-5'>
            <Button label={"Add to Cart"}/>
            <Button label={"+ Compare"}/>
            
        </div>
        <hr className='mt-5' />
        <div className='mt-5 text-gray-400'>
            <p>sku : ss001</p>
            <p>category:lambs</p>
            <p> tags:sofa,chair,home,shop</p>
            <p>share:</p>
        </div>
        {/* <Carousel/> */}

    
        
            
        </div>
        {/* <Carousel/> */}

        
    </div>
  )
}

export default Product