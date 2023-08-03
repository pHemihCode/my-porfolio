import React from 'react'
import {motion} from 'framer-motion'
function Services() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration:0.8 , ease:'easeIn'}}>
    <div className='mt-28 px-7 pb-10 services md:px-12'>
          <h1 className='font-semibold text-2xl text-center py-3'>My Services</h1>
          <p>
             <b> Custom Website Development</b><br />
             Want a website that stands out from the crowd? I'll build a custom website 
              tailored to your brand, ensuring it perfectly represents your business and engages your audience.
          </p>
          <p>
           <b>Responsive Web Design</b><br></br>Reach your audience on any device! I create websites that adapt to different screen sizes, 
            making sure your content looks great and functions flawlessly on smartphones, tablets, and computers.
          </p>
          <p>
            <b>User-friendly Interface</b><br />User experience matters! I focus on creating intuitive and easy-to-navigate interfaces, 
            ensuring that visitors find what they need effortlessly, leading to higher engagement and satisfaction.
          </p>
          <p>
            <b>Interactive Web Applications</b><br />Bring your ideas to life! With my expertise in React, I develop interactive web 
            applications that engage users and provide a seamless experience, enhancing the functionality of your site.
          </p>
          <p>
            <b>Tailwind CSS Styling</b><br />Elegant designs made easy! I utilize Tailwind CSS to efficiently style your website, 
            resulting in visually appealing layouts and streamlined development without sacrificing design flexibility.
          </p>
          <p>Let's work together to bring your project ideas into reality. Send me an email through <a href="https://mail.google.com" className='italic text-blue-600'>akintanfemi100@gmail.com</a></p>
    </div>
    </motion.div>
  )
}

export default Services