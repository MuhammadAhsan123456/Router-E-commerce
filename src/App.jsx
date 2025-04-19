// import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
])

function App() {

  return (
    <>
     {/* <h1 className='text-6xl text-amber-300'>Hello world</h1> */}
     <RouterProvider router={router}/>

    </>
  )
}

export default App
