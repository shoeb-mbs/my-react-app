import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import Home from '/src/components/Home.jsx'


function App() {
  return (
      <>
     <Header />
     <Home />
     <Footer />
      </>
  )
}

export default App
