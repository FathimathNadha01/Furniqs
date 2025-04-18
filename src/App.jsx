import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/layout/Footer'
import Product from './pages/Product'
import Carousel from './components/Carousel'
import Navbar from './components/layout/Navbar'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
      <Navbar/>
      
      <Product/>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default App
