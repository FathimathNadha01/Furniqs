import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart} from "@fortawesome/free-regular-svg-icons";
import { faSearch,faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (

    <>
    <div className='flex justify-between'>
    <div className='flex gap-8 p-4 font-bold text-4xl'>
      Furniq.
    </div>
     <div className='gap-8 hidden lg:flex p-4'>
     <Link to={'./'}>Home</Link>
     <Link to={'./randomdishes'}>Shop</Link>
     
     <Link to={'./contact'}>About</Link>
     <Link to={'./about'}>Contact</Link>
    </div>


    <div className='gap-8 hidden lg:flex p-4'>
      <div><FontAwesomeIcon icon={faUser} /></div>
      <div><FontAwesomeIcon icon={faSearch} /></div>
      <div><FontAwesomeIcon icon={faHeart} /></div>
      <div><FontAwesomeIcon icon={faShoppingCart} /></div>
      </div>
    </div>
   </>
  )
}

export default Navbar