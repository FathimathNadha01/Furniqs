// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Footer from './components/layout/Footer'
// import Product from './pages/Product'
// import Carousel from './components/Carousel'
// import Navbar from './components/layout/Navbar'

// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Layout from './components/layout/Layout'
// import { productprovider } from './components/context/Productcontext';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <productprovider>
//       <Routes>
//         <Route path='/' element={<Layout/>}>
//         <Route path='/home' element={<Home/>}></Route>
//         <Route path='/product' element={<Product/>}></Route>
//         </Route>
//       </Routes>
//       </productprovider>
    
    
      
//     </>
//   )
// }

// export default App
import { useState } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Product from './pages/Product';
import Navbar from './components/layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { ProductProvider } from './components/context/Productcontext'; // Capital P

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Route>
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
