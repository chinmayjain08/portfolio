import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/LandingPage/LandingPage'

function App() {

  return (
    <div className='portfolio'>
      <div className='navbar'><Navigation/></div>
      <LandingPage/>
      



      
    </div>
  )
}

export default App
