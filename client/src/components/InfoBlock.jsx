import React from 'react'

import { motion } from 'framer-motion';
import fadeIn from '../utils/variants';

import photo from '../assets/images/guard.jpg';
import photo2 from '../assets/images/guardFemale.jpg' // Assuming the image is in the images folder

const InfoBlock = () => {
  return (
    <section className="info-block">
        <h1>Anticipate. Fortify. Secure</h1>
        <p>In a world of evolving threats, static security is a liability. We offer a dynamic suite of intelligent solutions, precisely tailored to your unique challenges. Our expertise extends from proactive, ongoing risk mitigation to agile, rapid response, guaranteeing that your organization is always a step ahead, protected, and prepared.</p>
        <div className="card-container">
        <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="card"
        >
                <img src={photo} alt="" />
                <p>Solve long-term challenges: We provide proactive oversight and cutting-edge strategies to reduce the risk of theft, trespassing, and security lapses, safeguarding your property and reputation.</p>
        </motion.div>
        <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="card"
        >
            <p>Respond to immediate needs: Our rapid response team is on standby to manage high-risk events, from crisis situations to temporary operational needs.</p>
            <img src={photo2} alt="" />

        </motion.div>
        </div>
    </section>
  )
}

export default InfoBlock