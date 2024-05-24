// import { useState } from 'react'

import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  const[data,setData] =  useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setData(json))
  })

  return (
    <>
    <Navbar/>
    <Products data={data}/>
    </>
  )
}

export default App
