import React from 'react'

import { motion } from 'framer-motion';
import fadeIn from '../utils/variants';

const WorkForUs = () => {
  return (
    <motion.article className="work-for-us"
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}>
      <h2>Join Our Team!</h2>
      <p>We are looking for talented individuals to help us secure Lubbock.</p>
        <button className="cta-btn">Apply Now</button>
    </motion.article>
  )
}

export default WorkForUs