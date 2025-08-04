


import {motion } from 'framer-motion';
import fadeIn from '../utils/variants';

const MissionStatement = () => {


  return (
    <section className="mission-statement">
        <motion.div
            variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
        >
        <h2>Our Mission: <span className='highlight'>Absolute Protection. Unwavering Confidence.</span></h2>
        <p>At BlackVault, we exist to protect what is most important. Our commitment is to provide absolute security, delivering a level of peace of mind that is both powerful and permanent. This is our mission, and it's our promise. We strive to be the trusted partner you can rely on, ensuring your safety and success in an ever-evolving world.</p>
         </motion.div>
        <div className="mission-content">
        <motion.p
            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
        >
            <h4>Security that Empowers</h4>
          Our commitment is to deliver intelligent and dependable security services that do more than just protect—they enable. We provide the highest standards of integrity and excellence so our clients can operate with total confidence, unburdened by worry. With BlackVault, security is the foundation on which your success is built.
        </motion.p>
        <motion.p
            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
        >
            <h4>Building a Safer World</h4>
          We envision a future where every business, community, and individual is protected by next-generation security solutions. Our mission is to be the most trusted guardian in the industry, fostering an environment of safety and confidence through relentless innovation and a truly client-first approach.
        </motion.p>
        <motion.p
            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
        >
            <h4>Protection By Innovation</h4>
          At BlackVault, we believe that innovation is key to effective security. We are committed to leveraging the latest technologies and methodologies to stay ahead of potential threats. Our proactive approach ensures that we not only respond to incidents but also anticipate and mitigate risks before they become issues. 
        </motion.p>
      </div>
       
<motion.a
        variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
        href="/services" className="cta-btn">Schedule Your Evaluation Now!</motion.a>
    </section>
    
  )
}

export default MissionStatement