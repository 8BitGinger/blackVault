import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import fadeIn from '../utils/variants';


const Header = () => {
  return (
    <motion.header className="header"
    variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>
      
      <h1>Blackvault Security</h1>
            <h3
        
        className="flex flex-row"
      >
        <span className="intro-desc">Your </span>
        <TypeAnimation
          sequence={[
            'Local',
            3000,
            'Secure',
            3000,
            'Lubbock',
            4000,
            'Safe',
            3000,

          ]}
          speed={30}
          className="intro-type"
          wrapper="span"
          repeat={Infinity}
        />
        <span className="intro-desc">Security Solution </span>
      </h3>
      <div className="header-actions">
        <a href='/contact' className="cta-btn">Contact Us</a>
        <a href='/services#quote' className="cta-btn">Get a Quote</a>
      </div>

      

    </motion.header>
  )
}

export default Header