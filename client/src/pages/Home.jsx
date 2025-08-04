import React from 'react'

import Header from '../components/Header';
import '../assets/css/home.css';
import Intro from '../components/Intro';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import MissionStatement from '../components/MissionStatement';
import WorkForUs from '../components/WorkForUs';
import PhotoBlock from '../components/PhotoBlock';

import command from '../assets/images/commandCenter.jpg'; // Assuming the logo is in the images folder
import stop from '../assets/images/stop.jpg'; // Assuming the stop image is in the images folder
import burglar from '../assets/images/burglar.jpg'; // Assuming the burglar image is in the images folder
import Maps from '../components/Maps';
import InfoBlock from '../components/InfoBlock';

const Home = () => {
  return (
    <>
    <Header />
    <Intro />
    <PhotoBlock photo={{ url: command, alt: 'Security Command Center', description: '24/7 Security Monitoring' }} />
    <MissionStatement />
    <PhotoBlock photo={{ url: burglar, alt: 'Burglar Alarm', description: 'Protecting your home or business from intruders' }} />
    <Reviews />
    <WorkForUs />
    <Maps />
    <PhotoBlock photo={{ url: stop, alt: 'Security with Hand out as stopping gesture', description: 'Safeguarding you and your loved ones' }} />
    <InfoBlock />
    <Footer />
    </>
  )
}

export default Home