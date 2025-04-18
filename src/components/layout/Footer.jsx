import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-4 p-5">
      <div>
        <h1 className='font-bold'>Funiro.</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti?</p>
      </div>
      <div className='font-bold'>
        <p className='text-gray-500'>Links</p>
        <p className='mt-5'>Home</p>
        <p className='mt-5'>Shop</p>
        <p className='mt-5'>Contact</p>
        <p className='mt-5'>About</p>
      </div>
      <div className='font-bold'>
        <p className='text-gray-500'>Help</p>
        <p className='mt-5'>payment options</p>
        <p className='mt-5'>Returns</p>
        <p className='mt-5'>Privcy Policies</p>
      </div>
      <div>
        <p className='text-gray-500 font-bold'>Newsletter</p>
        <div className='flex'>
          <div>
        <input type="text" placeholder='enter your email address' className='mt-5' />
        <hr />
        </div>
        <div>
        <p className='mt-5 font-bold'>Subscribe</p>
        <hr />
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer