import { useState } from 'react'
import Prince from "../assets/Prince.png"
import Stars from "../assets/Stars.png"
import './App.css'


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${Stars})`,
      backgroundsize: '100%'
  }}>
      <img src= {Prince} className='Prince'/>
    </div>
  )
}

export default App
