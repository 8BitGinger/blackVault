import React from 'react'

import { motion } from 'framer-motion';
import fadeIn from '../utils/variants';

const Intro = () => {
  return (
    <section className="intro">
        <motion.h2 
        variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
        
        Welcome to Blackvault</motion.h2>

        <motion.h3
        variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
        Locally Owned and Operated</motion.h3>
        <motion.p
        variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
        At Blackvault, we don't just provide security; we deliver absolute peace of mind. Our team of highly trained professionals combines decades of experience with cutting-edge technology to safeguard what matters most to you. We are more than a service—we are a fortress for your assets, a vigilant protector of your people, and a partner you can trust implicitly. With Blackvault, you gain the confidence of knowing you're protected by the best in the industry, every single day.</motion.p>
        <motion.a
        variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
        href="/services" className="intro-cta">Schedule Your Evaluation Now!</motion.a>
    </section>
    
  )
}

export default Intro