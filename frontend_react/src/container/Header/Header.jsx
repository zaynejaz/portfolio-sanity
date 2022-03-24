import React from 'react'
import { motion } from 'framer-motion'

import {AppWrap} from '../../wrapper'

import {images} from '../../constants'
import './Header.scss'

import Typewriter from 'typewriter-effect';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    
    <div className="app__header app__flex">
      {/* <motion.div
        whileInView={{ x: [-350, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="head-text">Hello and Welcome</p>
            </div>
          </div>

          <div className="badge-cmp app__flex">
            <div>
              <p className="p-text p-text__hero">My name is</p>
              <h1 className="head-text head-text__hero">Zayn Ejaz</h1>
            </div>
          </div> */}

          {/* <div className="tag-cmp app__flex">
            <p className="p-text p-text__hero">
              <Typewriter options={{ 
                loop: true,
              }}
                onInit={(typewriter) => { 
                  typewriter
                  .typeString('I develop <span class="Typewriter-text__span">better experiences</span>')
                  .pauseFor(1500)
                  .deleteAll(40)
                  .typeString('I love <span class="Typewriter-text__span">HTML Emails</span>')
                  .pauseFor(1500)
                  .deleteAll(70)
                  .typeString('I build <span class="Typewriter-text__span">elegant websites</span>')
                  .pauseFor(1500)
                  .deleteAll(40)
                  .typeString('I craft <span class="Typewriter-text__span">logical designs</span>')
                  .pauseFor(1500)
                  .deleteAll(40)
                  .start();
                }}
              />
            </p>
            
          </div> */}
        {/* </div>
      </motion.div> */}

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 5 }}
        className="app__header-item"
      >
        <div className="app__header-badge">
          
          <div className="badge-cmp app__flex">
            <div>
              <p className="head-text head-text-HW">Hello <span>and</span> Welcome</p>
            </div>
          </div>

          <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 6, delayChildren: 100 }}
                  className="app__header-item"
          >
            <div className="badge-cmp app__flex">
              <div>
                <p className="p-text p-text__hero">My name is</p>
                <h1 className="head-text head-text__hero">Zayn Ejaz</h1>
                {/* <h1 className="head-text head-text__hero">
                  <div class="TextGlitch" id="title">
                    <div class="TextGlitch-clip">
                      <div class="TextGlitch-word"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
                    </div>
                    <div class="TextGlitch-clip">
                      <div class="TextGlitch-word"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
                    </div>
                    <div class="TextGlitch-clip">
                      <div class="TextGlitch-word"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendA"></div>
                      <div class="TextGlitch-word TextGlitch-blend TextGlitch-blendB"></div>
                    </div>
                  </div>
                </h1> */}

                <p className="p-text p-text__hero">I'm a Front-End Email and Web Developer and... </p>

              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 3, delayChildren: 100 }}
            className="app__header-item"
          >
            <div className="tag-cmp app__flex">
              <p className="p-text p-text__hero">
                <Typewriter options={{ 
                  loop: true,
                }}
                  onInit={(typewriter) => { 
                    typewriter
                    .typeString('I develop <span class="Typewriter-text__span">better experiences</span>')
                    .pauseFor(1500)
                    .deleteAll(40)
                    .typeString('I love <span class="Typewriter-text__span">HTML Emails</span>')
                    .pauseFor(1500)
                    .deleteAll(70)
                    .typeString('I build <span class="Typewriter-text__span">elegant websites</span>')
                    .pauseFor(1500)
                    .deleteAll(40)
                    .typeString('I\'m passionate about <span class="Typewriter-text__span">solving business problems</span>')
                    .pauseFor(1500)
                    .deleteAll(70)
                    .typeString('I craft <span class="Typewriter-text__span">logical designs</span>')
                    .pauseFor(1500)
                    .deleteAll(40)
                    .start();
                  }}
                />
              </p>
            </div>
          </motion.div>
          
         </div>
        
        {/* <img src={images.profile} alt="profile_bg" /> */}
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        /> */}
      </motion.div>

      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div> */}
    </div>
  )
}

export default AppWrap(Header, 'home', )