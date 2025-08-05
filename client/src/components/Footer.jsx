import React from 'react'

import {motion} from 'framer-motion';
import fadeIn from '../utils/variants';

import FooterImage from '../assets/images/logo.png'; // Assuming the footer image is in the images folder

const Footer = () => {
  return (
    <motion.footer 
    variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
    className='footer'>
      <div className="row">
        <img src={FooterImage} alt="Footer Image" />
        <div className="row-content">
          <ul>Locations
            <li>Lubbock TX</li>
            <li>Wolforth TX</li>
            <li>Levelland TX</li>
            <p>Contact us</p>
            <a href='tel:8060000000'>(806) 000 - 0000</a>
          </ul>
          
        </div>
      </div>
        <div className="footer-content">
            <p><span className='highlight'>©</span> 2025 Black Vault Solutions </p>
            <p>All rights reserved.</p>
            <p> Designed by <a href="https://8bitginger.com" target="_blank" rel="noopener noreferrer">8bitGinger</a></p>
        </div>
    </motion.footer>
  )
}

export default Footer