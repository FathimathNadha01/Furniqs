import React, { useContext } from 'react'
import Hero from '../components/home/Hero'
import Card from '../components/home/Card'
import Productcard from '../components/cards/Productcard'
import { Productcontext } from '../components/context/Productcontext'
import Carousel from '../components/Carousel'
import image from '../assets/images/image'



function Home() {
  const {product}= useContext(Productcontext)
  return (
    <div>
      <Hero/>
<div className='text-center mt-6 mb-6'>
      <h1 className='font-bold text-2xl'>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <Card/>
      <div className='text-center'>
      <h1 className='font-bold text-3xl'>Our Products</h1>
      </div>
      {/* <Productcard/> */}
    <div className='flex p-5 ml-18'>
      {product?.[7] ? (
  <Productcard productData={product[50]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[4]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[55]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[63]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

</div>

<div className='flex p-5 ml-18'>
      {product?.[7] ? (
  <Productcard productData={product[90]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[84]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[35]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}

{product?.[7] ? (
  <Productcard productData={product[25]} />

  

) : (
  <p className="text-center mt-4">Product 8 not found.</p>
)}


</div>
<Carousel/>
<img src={image.Share} alt="" />









    </div>
    
  )
}

export default Home