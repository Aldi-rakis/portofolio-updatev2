import { useState } from 'react'

import Routes from './route/Index';
import Navbar from './component/Navbar';
import { motion, useScroll, useSpring } from "framer-motion";
function App() {
  const [count, setCount] = useState(0)
 const { scrollYProgress } = useScroll();
  const scaleY  = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (

    <div className="App scrollbar-hide ">
     

    <Navbar />
     <motion.div className="progress-bar" style={{ scaleY }} />
      <Routes/>

    </div>



  )
}

export default App
