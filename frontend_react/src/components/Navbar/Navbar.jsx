import React, {useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

// import {images} from '../../constants'
import './Navbar.scss'
import {Logo, SocialMedia} from '../'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const containerLink = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: ["-10px", "0px"],
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  const itemLink = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  const containerLogo = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: ["-50px", "20px", "0px"],
      transition: {
        delay: -1,
      }
    }
  }

  return (
    
    <nav className="app__navbar">
      
      <motion.div
      variants={containerLogo}
      initial="hidden"
      animate="show"
      className="app__navbar-logo"
      
      >
        {/* <img src={images.logoSVG} alt="logo"/> */}
        <Logo className="logoSVG"/>
      </motion.div>
      <motion.ul
        variants={containerLink}
        initial="hidden"
        animate="show"
        className="app__navbar-links"
      >
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
          <motion.li 
          variants={itemLink}
          className="app__flex p-text" key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="app__navbar-menu">
          
        <HiMenuAlt4 onClick={() => setToggle(true) } className= {toggle ? "hiddenSVG" : "showSVG"} />
        <HiX onClick={() => setToggle(false) } className= {toggle ? "showSVG" : "hiddenSVG"} />

        
        {toggle && (
          <motion.div
            whileInView={{ opacity: [.5,1] }}
            transition={{ duration: 0.5, type: 'tween',ease: 'easeInOut' }}
            // whileInView={{ : [300, 0] }}
            // transition={{ duration: 0.85,  }}
          >
            <motion.ul
            variants={containerLink}
            initial="hidden"
            animate="show"
            className="app__navbar-links"
            >
              {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                <motion.li 
                variants={itemLink}
                key={item}
                >
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <SocialMedia />
          </motion.div>
        )}
      </div>

    </nav>
  )
}

export default Navbar