import './App.css';
import React, { useRef } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { MyNavbar } from './components/MyNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Offers } from './components/Offers';
import { Gallery } from './components/Gallery';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { Home } from './components/Home';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const ref = useRef(null)
  return (
    <div className="container" >
      <LoadingBar color="red" ref={ref}/>
      <BrowserRouter>
        <MyNavbar startLoading={() => ref.current.continuousStart()} />
          <Routes>
            <Route path='/home' element={<Home stopLoading={() => ref.current.complete()} />} />
            <Route path='/about' element={<About />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
