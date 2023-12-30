import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<<<<<<< HEAD
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Hero from "./Pages/Hero";
import Gallery from './Pages/Gallery'
import Trending from "./Pages/Trending";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
<<<<<<< HEAD
// import './App.css'
import Navbar from './Components/Navbar'
=======
import './App.css'
>>>>>>> 6a20e987d76b8c21d28d0657faefed914e1116ac

>>>>>>> parent of f62fa61 (updates)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
    
    </BrowserRouter>


      <Navbar />
      <Home />
      <Hero />
      <Gallery />
      <Trending/>
      <Footer />
=======
<<<<<<< HEAD
      <Navbar/>
        
=======
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 6a20e987d76b8c21d28d0657faefed914e1116ac
>>>>>>> parent of f62fa61 (updates)
    </>
  );
}

export default App