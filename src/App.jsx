import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/layout/Footer'
import Product from './pages/Product'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-700'>hello</h1>
      <Product/>
      <Carousel/>
    </>
  )
}

export default App
