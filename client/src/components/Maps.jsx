import React from 'react';

import {motion} from 'framer-motion';
import fadeIn from '../utils/variants';

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";


const Maps = () => {
  // Define a constant for the phone number for easy updates
  const phoneNumber = '806-000-0000';
  const emailAddress = 'info@blackvault.com';

  return (
    <>
      {/* This style block contains all the CSS for the component.
        It is included here to make the component fully self-contained.
      */}


      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
      
        className="map-contact-container">
        {/* Map Section - Occupies the left side on desktop */}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106603.95358742767!2d-101.93922319082098!3d33.57723438318042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8706308a3424164f%3A0x6b8dd8d3a7d57f12!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1626880000000!5m2!1sen!2sus"
            allowFullScreen="yes"
            loading="lazy"
            className="map-frame"
            title="Google Map of Lubbock, TX"
          ></iframe>
        </div>

        {/* Contact Info Section - Occupies the right side on desktop */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}
        className="info-section">
          <h2>Local to Lubbock</h2>
          <p>We maintain a local, Lubbock presence for you. Call us here and get the protection you deserve.</p>
          <a href={`tel:${phoneNumber}`}><FaPhone /> {phoneNumber}</a>
          <a href={`mailto:${emailAddress}`}><FaEnvelope /> {emailAddress}</a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Maps;