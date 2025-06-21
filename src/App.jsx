import { useState } from 'react'

import Routes from './route/Index';
import Navbar from './component/Navbar';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

    <Navbar />
      <Routes/>

    </div>



  )
}

export default App
