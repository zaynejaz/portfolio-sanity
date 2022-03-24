import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import {AppWrap, MotionWrap} from '../../wrapper'
import {images} from '../../constants'
import './About.scss'
import {urlFor, client} from '../../client'
import Typewriter from 'typewriter-effect';

// const abouts = [
//   {title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
//   {title: 'Web Design', description: 'I am a good web developer', imgUrl: images.about02},
//   {title: 'UI / UX', description: 'I am a good web developer', imgUrl: images.about03},
//   {title: 'Web Animations', description: 'I am a good web developer', imgUrl: images.about04},
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      {/* <h2 className="head-text head-text__about">I Know that <span>Pixel Perfect Development</span> <br />off <span>Beautiful Designs</span><br />means <span>Better Engagement, CPA and ROI</span></h2> */}
      <h2 className="head-text">
        <Typewriter options={{ 

          }}
            onInit={(typewriter) => { 
              typewriter
              .typeString('I Know that ')
              .pauseFor(5)
              .typeString('<span>Optimized Co</span>')
              .pauseFor(1)
              .deleteChars(12)
              .pauseFor(0)
              .typeString('<span>Pixel Perfect Development</span><br />')
              .pauseFor(10)
              .typeString('off ')
              .pauseFor(8)
              .typeString('<span>Logical </span>')
              .pauseFor(8)
              .deleteChars(8)
              .pauseFor(1)
              .typeString('<span>Beautiful Designs</span><br />')
              .pauseFor(10)
              .typeString('Means ')
              .pauseFor(5)
              .typeString('<span>Increased Revenu</span>')
              .pauseFor(5)
              .deleteChars(16)
              .pauseFor(0)
              .typeString('<span>Better Engagement, CPA and ROI</span> ')
              .start();
            }}
          />
        </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(  
  MotionWrap(About, 'app__about'),
  'about',
  "app__grayGradbg"
  // "app__whitebg"
);