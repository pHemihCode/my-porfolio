import React from 'react'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration:0.8 , ease:'easeIn'}}>
    <div className='px-7 pb-10 mt-28 md:px-12'> 
        <h2 className='font-bold text-center text-xl pt-8 pb-3'>My Stacks </h2>
        <ul>
            <li><b>HTML & CSS:</b> The Building Blocks. As a Front-end Developer, I consider HTML and CSS to be the foundation of every web project. 
                I have a strong grasp of HTML5 semantics and use CSS to craft layouts that adapt gracefully to different screen sizes, ensuring 
                a seamless experience across devices.
            </li>
            <li>
               <b>JAVASCRIPT:</b> Bringing Interactivity to Life.JavaScript is my go-to language for adding interactivity and functionality to web applications. 
               I enjoy the challenge of solving problems through coding and have a solid understanding of modern JavaScript (ES6+).
            </li>
            <li>
              <b>REACT:</b> My Framework of Choice.With its component-based architecture, React allows me to efficiently manage and organize complex applications, leading to more maintainable and scalable codebases. 
            </li>
            <li>
                <b>TAILWIND CSS:</b> Streamlined Styling.When it comes to styling, Tailwind CSS has become an integral part of my toolkit. 
                Its utility-first approach empowers me to rapidly design and prototype interfaces without the need to write custom CSS.
            </li>
        </ul>
        <p>
             Let's Collaborate!If you're interested in working together or just want to say hello, feel free to reach out to me at <a href="https://mail.google.com" className='italic text-blue-600'>akintanfemi100@gmail.com</a>.Let's build something amazing together!
        </p>
    </div>
    </motion.div>
  )
}

export default About