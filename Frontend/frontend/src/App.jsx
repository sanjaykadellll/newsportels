import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Hero from "./Pages/Hero";
import Gallery from './Pages/Gallery'
import Trending from "./Pages/Trending";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
    </BrowserRouter>


      <Navbar />
      <Home />
      <Hero />
      <Gallery />
      <Trending/>
      <Footer />
    </>
  );
}

export default App