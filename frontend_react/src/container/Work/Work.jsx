import React, {useState, useEffect} from 'react'
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Typewriter from 'typewriter-effect';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  // const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      {/* <h2 className="head-text">My Creative <span>Portfolio</span>.</h2> */}
      <h2 className="head-text">
        My&nbsp;
      
        <Typewriter options={{ 
            loop: true,
          }}
            onInit={(typewriter) => { 
              typewriter
              .typeString('Creative')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Diverse')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Centralized')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Balanced')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Digital')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Comprehensive')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Open-Source')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Active')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Filterable')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Unrivaled')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Appetizing')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Extraordinary')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Unique')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Splendid')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Prolific')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Poactive')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Humble')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Authentic')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Simple')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)
              .typeString('Personal')
              .pauseFor(500)
              .deleteAll()
              .pauseFor(10)

              .start();
            }}
          />

          Portfolio.
       </h2>

      <div className="app__work-filter">
        {['All', 'Websites', 'Landing Pages', 'HTML Emails', 'PWAs', 'UI/UX'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex  p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex app__grayGradbg" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [1, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [1, 1] }}
                    whileHover={{ scale: [1, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex projectSection"
                  >
                    <ImEye className="projectLink"/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [1, 1] }}
                    whileHover={{ scale: [1, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex repoSection"
                  >
                    <BsFillFileEarmarkCodeFill className="repoLink"/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex app__grayGradbg-rev">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(  
  MotionWrap(Work, 'app__works'),
  'work',
  "app__grayGradbg-rev"
  // "app__primarybg"
);