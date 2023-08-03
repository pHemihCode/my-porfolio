import React from 'react'
import {motion} from 'framer-motion'
import { PiHandWavingLight } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import About from './About'
function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration:1 , ease:'easeInOut'}}>
    <div className='mt-40 home md:px-5 lg:mt-48'>
        <div className="theCont ">
            <div className="name  px-10 text-xl lg:flex lg:flex-col lg:justify-center lg:items-center">
               <motion.div className='lg:w-4/5'>
                  <motion.h1 initial={{x:'-200%'}} animate={{x:0}} transition={{delay:1.5, duration:0.8}} className='flex flex-row justify-center items-center text-xl font-bold my-5'><span>Hey</span> <PiHandWavingLight className='text-yellow-700 ml-1' /></motion.h1>
                    <motion.p initial={{x:'200%'}} animate={{x:0}} transition={{delay:1.5, duration:0.8}} className='text-xl '>I'm <i className='text-blue-700'>Femi AKINTAN</i>, a <b>front-end developer</b>.I specialize in creating captivating websites with clean 
                    and modern designs. Using modern front end technologies, I bring ideas to life and ensure a seamless user experience.
                    </motion.p>
                </motion.div>
                  <motion.div initial={{x:'-1000%'}} animate={{x:0}} transition={{delay:1.5, duration:0.8}} className="socials flex flex-row space-x-4 justify-center lg:justify-start items-center py-5">
                        <Link to='https://github.com/pHemihCode'><BsGithub /></Link>
                        <Link to='https://twitter.com/drt_phemihh'><FiTwitter /></Link> 
                        <Link to='https://www.linkedin.com/in/femi-akintan'><FaLinkedinIn /></Link>
                    </motion.div>
          </div>
        </div>
      <motion.div className='about' initial={{scale:0.5}}  whileInView={{scale:1}} transition={{duration:0.6,  ease:'easeInOut'}}>
        <About />
      </motion.div>
       <motion.div className='project'  initial={{scale:0.5}}  whileInView={{scale:1}} transition={{duration:0.6, ease:'easeInOut'}}>
         <Projects />
       </motion.div>
       <motion.div className='xl:mt-20'  initial={{scale:0.5}}  whileInView={{scale:1}} transition={{duration:0.6, ease:'easeInOut'}}>
          <h1 className='font-semibold text-2xl text-center contact-head lg:-mb-28 lg:mt-32'>Contact Me</h1>
          <Contact />
       </motion.div>
    </div>
    </motion.div>
  )
}

export default Home