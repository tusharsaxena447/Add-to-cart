// import { useState } from 'react'

import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Single from './components/Single'

function App() {
  const[data,setData] =  useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setData(json))
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Products data={data} />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/single/:id' element={<Single />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
