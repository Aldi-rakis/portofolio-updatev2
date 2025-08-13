import { useState } from 'react'

import Routes from './route/Index';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollToTop from './component/ui/ScrollToTop';
function App() {
  const [count, setCount] = useState(0)
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (

    <div className="App scrollbar-hide ">


      <ScrollToTop />
      <Navbar />
      <motion.div className="progress-bar" style={{ scaleY }} />
      <Routes />
      <Footer />

    </div>



  )
}

export default App
